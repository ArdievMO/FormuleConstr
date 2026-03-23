// ---------------------- БАЗА ФОРМУЛ ----------------------
const formulasLibrary = [
    { name: "Давление", eq: "P = F/S", vars: ["P", "F", "S"] },
    { name: "Плотность", eq: "ρ = m/V", vars: ["ρ", "m", "V"] },
    { name: "Давление жидкости", eq: "P = ρ·g·h", vars: ["P", "ρ", "g", "h"] },
    { name: "Сила тяжести", eq: "Fт = m·g", vars: ["Fт", "m", "g"] },
    { name: "Архимедова сила", eq: "Fₐ = ρж·g·Vт", vars: ["Fₐ", "ρж", "g", "Vт"] },
    { name: "II закон Ньютона", eq: "F = m·a", vars: ["F", "m", "a"] },
    { name: "Закон Гука", eq: "Fy = -k·x", vars: ["Fy", "k", "x"] },
    { name: "Кинетическая энергия", eq: "Ek = m·υ²/2", vars: ["Ek", "m", "υ"] },
    { name: "Работа", eq: "A = F·S·cosα", vars: ["A", "F", "S", "cosα"] },
    { name: "Мощность", eq: "N = A/t", vars: ["N", "A", "t"] },
    { name: "Закон Ома", eq: "I = U/R", vars: ["I", "U", "R"] }
];
const formulaContainer = document.getElementById('formulaList');
formulasLibrary.forEach(f => {
    const item = document.createElement('div');
    item.className = 'formula-item';
    item.setAttribute('draggable', 'true');
    item.setAttribute('data-eq', f.eq);
    item.setAttribute('data-name', f.name);
    item.setAttribute('data-vars', JSON.stringify(f.vars));
    item.innerText = f.eq;
    item.title = f.name;
    formulaContainer.appendChild(item);
});

// ---------------------- Глобальное состояние ----------------------
let rectangles = new Map();
let paramConnections = [];
let nextRectId = 1000;
let connectModeActive = false;
let pendingSource = null;

const graphArea = document.getElementById('graphArea');
const rectLayer = document.getElementById('rectLayer');
const svg = document.getElementById('linesSvg');
const connModeBtn = document.getElementById('connModeBtn');
const clearConnModeBtn = document.getElementById('clearConnModeBtn');
const computeBtn = document.getElementById('computeBtn');
const modeStatusSpan = document.getElementById('modeStatus');
const paramConnListDiv = document.getElementById('paramConnList');
const clearAllParamsConnBtn = document.getElementById('clearAllParamsConn');

function getRelativeCoords(e, container) {
    const rect = container.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

// ---------- Отрисовка линий ----------
function redrawParamLines() {
    svg.innerHTML = '';
    const containerRect = graphArea.getBoundingClientRect();
    if (!containerRect.width || !containerRect.height) return;
    svg.setAttribute('width', containerRect.width);
    svg.setAttribute('height', containerRect.height);
    for (let conn of paramConnections) {
        const sourceRect = rectangles.get(conn.sourceRectId);
        const targetRect = rectangles.get(conn.targetRectId);
        if (!sourceRect || !targetRect) continue;
        let sourcePortPos = getPortPosition(sourceRect, conn.sourceParam, true);
        let targetPortPos = getPortPosition(targetRect, conn.targetParam, false);
        if (!sourcePortPos || !targetPortPos) continue;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", sourcePortPos.x);
        line.setAttribute("y1", sourcePortPos.y);
        line.setAttribute("x2", targetPortPos.x);
        line.setAttribute("y2", targetPortPos.y);
        line.setAttribute("stroke", "#f97316");
        line.setAttribute("stroke-width", "3");
        line.setAttribute("stroke-dasharray", "6 3");
        line.setAttribute("marker-end", "url(#arrowParam)");
        svg.appendChild(line);
    }
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
        marker.setAttribute("id", "arrowParam");
        marker.setAttribute("markerWidth", "8");
        marker.setAttribute("markerHeight", "8");
        marker.setAttribute("refX", "7");
        marker.setAttribute("refY", "4");
        marker.setAttribute("orient", "auto");
        const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        poly.setAttribute("points", "0 0, 8 4, 0 8");
        poly.setAttribute("fill", "#f97316");
        marker.appendChild(poly);
        defs.appendChild(marker);
        svg.appendChild(defs);
    }
}

function getPortPosition(rect, paramName, isOutput) {
    const rectEl = rect.element;
    if (!rectEl) return null;
    const containerBounds = graphArea.getBoundingClientRect();
    let targetEl = null;
    if (isOutput) {
        targetEl = rectEl.querySelector('.target-port');
    } else {
        const rows = rectEl.querySelectorAll('.param-row');
        for (let row of rows) {
            const nameSpan = row.querySelector('.param-name');
            if (nameSpan && nameSpan.innerText === paramName) {
                targetEl = row.querySelector('.port');
                break;
            }
        }
    }
    if (!targetEl) return null;
    const portBounds = targetEl.getBoundingClientRect();
    const centerX = (portBounds.left + portBounds.right) / 2 - containerBounds.left;
    const centerY = (portBounds.top + portBounds.bottom) / 2 - containerBounds.top;
    return { x: centerX, y: centerY };
}

function updateParamConnectionsList() {
    if (paramConnections.length === 0) {
        paramConnListDiv.innerHTML = '<span style="color:#64748b;">Нет связей параметров</span>';
        return;
    }
    let html = '';
    paramConnections.forEach((conn, idx) => {
        const srcRect = rectangles.get(conn.sourceRectId);
        const tgtRect = rectangles.get(conn.targetRectId);
        const srcName = srcRect ? `${srcRect.formulaName}:${conn.sourceParam}` : '?';
        const tgtName = tgtRect ? `${tgtRect.formulaName}:${conn.targetParam}` : '?';
        html += `<div class="conn-badge">📡 ${srcName} → ${tgtName} <button data-idx="${idx}" class="removeParamConn">✖</button></div>`;
    });
    paramConnListDiv.innerHTML = html;
    document.querySelectorAll('.removeParamConn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.idx);
            removeParamConnection(idx);
        });
    });
}

function removeParamConnection(index) {
    const conn = paramConnections[index];
    if (!conn) return;
    paramConnections.splice(index, 1);
    const targetRect = rectangles.get(conn.targetRectId);
    if (targetRect) rebuildParamsList(targetRect);
    updateParamConnectionsList();
    redrawParamLines();
}

function rebuildParamsList(rect) {
    const container = rect.element.querySelector('.params-list');
    const newTarget = rect.targetVar;
    let newHtml = '';
    for (let v of rect.vars) {
        if (v === newTarget) continue;
        const hasConn = paramConnections.some(c => c.targetRectId === rect.id && c.targetParam === v);
        const manualVal = rect.manualValues[v] !== undefined ? rect.manualValues[v] : '';
        if (hasConn) {
            newHtml += `<div class="param-row"><div class="port" data-param="${v}"></div><div class="param-name">${v}</div><div class="param-value"><div class="param-output">🔗 связано</div></div></div>`;
        } else {
            newHtml += `<div class="param-row"><div class="port" data-param="${v}"></div><div class="param-name">${v}</div><div class="param-value"><input class="param-input" type="text" placeholder="число" value="${escapeHtml(manualVal)}"></div></div>`;
        }
    }
    container.innerHTML = newHtml;
    container.querySelectorAll('.port').forEach(port => {
        port.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!connectModeActive) return;
            const param = port.getAttribute('data-param');
            handlePortClick(rect.id, param, false);
        });
    });
    for (let v of rect.vars) {
        if (v === rect.targetVar) continue;
        const row = findParamRow(rect.element, v);
        if (row && !paramConnections.some(c => c.targetRectId === rect.id && c.targetParam === v)) {
            const input = row.querySelector('input');
            if (input) {
                input.value = rect.manualValues[v] !== undefined ? rect.manualValues[v] : '';
                input.addEventListener('input', (e) => {
                    rect.manualValues[v] = e.target.value;
                });
            }
        }
    }
}

function findParamRow(rectEl, paramName) {
    const rows = rectEl.querySelectorAll('.param-row');
    for (let row of rows) {
        const nameSpan = row.querySelector('.param-name');
        if (nameSpan && nameSpan.innerText === paramName) return row;
    }
    return null;
}

function addParamConnection(sourceRectId, sourceParam, targetRectId, targetParam) {
    const srcRect = rectangles.get(sourceRectId);
    if (!srcRect || srcRect.targetVar !== sourceParam) {
        alert("Источником может быть только вычисляемый параметр (оранжевый кружок)");
        return false;
    }
    const tgtRect = rectangles.get(targetRectId);
    if (!tgtRect) return false;
    if (tgtRect.targetVar === targetParam) {
        alert("Нельзя подключать вход к вычисляемому параметру цели");
        return false;
    }
    if (paramConnections.some(c => c.sourceRectId === sourceRectId && c.sourceParam === sourceParam && c.targetRectId === targetRectId && c.targetParam === targetParam)) {
        alert("Такая связь уже существует");
        return false;
    }
    paramConnections.push({ sourceRectId, sourceParam, targetRectId, targetParam });
    rebuildParamsList(tgtRect);
    updateParamConnectionsList();
    redrawParamLines();
    return true;
}

function computeAll() {
    for (let rect of rectangles.values()) {
        rect.computedValue = null;
        const targetDiv = rect.element.querySelector('.target-value');
        if (targetDiv)
            targetDiv.innerText = '?';
    }
    let changed = true;
    let maxIter = 50;
    let iter = 0;
    while (changed && iter < maxIter) {
        changed = false;
        for (let rect of rectangles.values()) {
            if (rect.computedValue !== null)
                continue;
            const inputValues = {};
            let allInputsReady = true;
            for (let v of rect.vars) {
                if (v === rect.targetVar)
                    continue;
                const connection = paramConnections.find(c => c.targetRectId === rect.id && c.targetParam === v);
                if (connection) {
                    const sourceRect = rectangles.get(connection.sourceRectId);
                    if (sourceRect && sourceRect.computedValue !== null) {
                        inputValues[v] = sourceRect.computedValue;
                    }
                    else {
                        allInputsReady = false;
                        break;
                    }
                }
                else {
                    const manualVal = rect.manualValues[v];
                    if (manualVal !== undefined && manualVal.trim() !== '' && !isNaN(parseFloat(manualVal))) {
                        inputValues[v] = parseFloat(manualVal);
                    }
                    else {
                        allInputsReady = false;
                        break;
                    }
                }
            }
            if (!allInputsReady)
                continue;
            const result = solveEquation(rect.formulaEq, rect.vars, inputValues, rect.targetVar);
            if (result !== null && isFinite(result)) {
                rect.computedValue = result;
                const targetValueSpan = rect.element.querySelector('.target-value');
                if (targetValueSpan) targetValueSpan.innerText = result.toFixed(4);
                changed = true;
            }
        }
        iter++;
    }
    for (let rect of rectangles.values()) {
        for (let v of rect.vars) {
            if (v === rect.targetVar)
                continue;
            const conn = paramConnections.find(c => c.targetRectId === rect.id && c.targetParam === v);
            if (conn) {
                const srcRect = rectangles.get(conn.sourceRectId);
                if (srcRect && srcRect.computedValue !== null) {
                    const row = findParamRow(rect.element, v);
                    if (row) {
                        const valDiv = row.querySelector('.param-value');
                        if (valDiv) {
                            valDiv.innerHTML = `<div class="param-output">🔗 = ${srcRect.computedValue.toFixed(4)}</div>`;
                        }
                    }
                }
            }
        }
    }
}

function normalizeExpression(expr) {
    expr = expr.replace(/·/g, '*');
    expr = expr.replace(/²/g, '**2');
    return expr;
}

function residual(eq, x, vars, knownValues, targetVar) {
    const env = {};
    let [left, right] = eq.split('=').map(s => s.trim());
    if (!right)
        return null;

    left = normalizeExpression(left);
    right = normalizeExpression(right);
    const exprStr = `(${left}) - (${right})`;
    for(let v of vars) {
        if (v === targetVar)
            env[v] = x;
        else
            env[v] = knownValues[v];
    }
    for(let v of vars) {
        if (env[v] === undefined || isNaN(env[v]))
            return NaN;
    }
    try {
        const fn = new Function(...vars, `return ${exprStr};`);
        return fn(...vars.map(v => env[v]));
    }
    catch(e) {
        return NaN;
    }
}

function solveEquation(eq, vars, knownValues, targetVar) {
    let a = -1e6, b = 1e6;
    let fa = residual(eq, a, vars, knownValues, targetVar), fb = residual(eq, b, vars, knownValues, targetVar);
    if (isNaN(fa) || isNaN(fb))
        return null;
    if (fa * fb > 0) {
        for (let i = 0; i < 20; i++) {
            a *= 2;
            b *= 2;
            fa = residual(eq, a, vars, knownValues, targetVar);
            fb = residual(eq, b, vars, knownValues, targetVar);
            if (fa * fb <= 0)
                break;
        }
        if (fa * fb > 0)
            return null;
    }
    for (let iter = 0; iter < 70; iter++) {
        const mid = (a + b) / 2;
        const fm = residual(eq, mid, vars, knownValues, targetVar);
        if (Math.abs(fm) < 1e-8)
            return mid;
        if (isNaN(fm))
            return null;
        if (fa * fm < 0) {
            b = mid;
            fb = fm;
        }
        else {
            a = mid;
            fa = fm;
        }
    }
    return (a + b) / 2;
}

// ---------- СОЗДАНИЕ БЛОКА ----------
function createFormulaBlock(formulaEq, formulaName, varsArray, left, top, id = null) {
    const rectId = id !== null ? id : nextRectId++;
    const rectDiv = document.createElement('div');
    rectDiv.className = 'formula-card';
    rectDiv.style.left = `${left}px`;
    rectDiv.style.top = `${top}px`;
    rectDiv.setAttribute('data-id', rectId);
    rectDiv.title = formulaName;

    const targetVar = varsArray[0];
    const manualValues = {};
    for (let v of varsArray) if (v !== targetVar) manualValues[v] = '';

    let paramsHtml = '';
    for (let v of varsArray) {
        if (v === targetVar) continue;
        paramsHtml += `
                <div class="param-row">
                    <div class="port" data-param="${v}"></div>
                    <div class="param-name">${v}</div>
                    <div class="param-value"><input class="param-input" type="text" placeholder="число" value="${escapeHtml(manualValues[v])}"></div>
                </div>
            `;
    }

    rectDiv.innerHTML = `
            <div class="card-header">
                <div class="formula-text">${escapeHtml(formulaEq)}</div>
                <div class="delete-card">✕</div>
            </div>
            <div class="params-list" id="params-${rectId}">
                ${paramsHtml}
            </div>
            <div class="target-area" data-target-var="${targetVar}">
                <div class="target-output">
                    <div class="target-port"></div>
                    <div class="target-symbol">${targetVar}</div>
                </div>
                <div class="target-value">?</div>
            </div>
        `;

    rectLayer.appendChild(rectDiv);
    const rectData = {
        id: rectId,
        element: rectDiv,
        formulaEq: formulaEq,
        formulaName: formulaName,
        vars: varsArray,
        targetVar: targetVar,
        manualValues: manualValues,
        connections: {},
        computedValue: null
    };
    rectangles.set(rectId, rectData);

    const deleteBtn = rectDiv.querySelector('.delete-card');
    deleteBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteRectangle(rectId); });

    rectDiv.querySelectorAll('.port').forEach(port => {
        port.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!connectModeActive) return;
            const param = port.getAttribute('data-param');
            handlePortClick(rectId, param, false);
        });
    });
    const targetPort = rectDiv.querySelector('.target-port');
    targetPort.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!connectModeActive) return;
        handlePortClick(rectId, rectData.targetVar, true);
    });
    const targetArea = rectDiv.querySelector('.target-area');
    targetArea.addEventListener('click', (e) => {
        if (e.target === targetPort) return;
        const idx = rectData.vars.indexOf(rectData.targetVar);
        const nextIdx = (idx + 1) % rectData.vars.length;
        const newTarget = rectData.vars[nextIdx];
        rectData.targetVar = newTarget;
        const symSpan = targetArea.querySelector('.target-symbol');
        if (symSpan) symSpan.innerText = newTarget;
        rebuildParamsList(rectData);
    });

    for (let v of varsArray) {
        if (v === targetVar) continue;
        const row = findParamRow(rectDiv, v);
        if (row) {
            const input = row.querySelector('input');
            if (input) {
                input.addEventListener('input', (e) => {
                    rectData.manualValues[v] = e.target.value;
                });
            }
        }
    }

    makeDraggable(rectDiv, rectId);
    return rectId;
}

function handlePortClick(rectId, param, isOutput) {
    if (!connectModeActive) return;
    if (pendingSource === null) {
        if (!isOutput) {
            alert("Сначала выберите выходной порт (оранжевый кружок)");
            return;
        }
        pendingSource = { rectId, param, isOutput };
        modeStatusSpan.innerText = `🔌 Выбран источник: ${param}. Теперь выберите входной порт.`;
    } else {
        if (pendingSource.isOutput && !isOutput) {
            addParamConnection(pendingSource.rectId, pendingSource.param, rectId, param);
            pendingSource = null;
            modeStatusSpan.innerText = `🔌 Режим связи: выберите выходной порт`;
        } else {
            alert("Некорректное направление: нужно от выхода (оранжевый) ко входу (синий)");
            pendingSource = null;
            modeStatusSpan.innerText = `🔌 Режим связи: выберите выходной порт`;
        }
    }
}

function deleteRectangle(rectId) {
    const rect = rectangles.get(rectId);
    if (!rect) return;
    rect.element.remove();
    rectangles.delete(rectId);
    paramConnections = paramConnections.filter(c => c.sourceRectId !== rectId && c.targetRectId !== rectId);
    if (pendingSource && pendingSource.rectId === rectId) pendingSource = null;
    updateParamConnectionsList();
    redrawParamLines();
}

// ---------- ПЕРЕТАСКИВАНИЕ БЛОКОВ (исправленное: не мешает вводу) ----------
function makeDraggable(element, rectId) {
    let dragging = false, startX, startY, startLeft, startTop;
    element.addEventListener('mousedown', (e) => {
        // Если клик на инпуте, порте, кнопке удаления или целевом порте – не начинаем перетаскивание,
        // чтобы инпут мог получить фокус.
        if (e.target.closest('.param-input') ||
            e.target.closest('.port') ||
            e.target.closest('.delete-card') ||
            e.target.closest('.target-port')) {
            return;
        }
        e.preventDefault();
        dragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseFloat(element.style.left);
        startTop = parseFloat(element.style.top);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    function onMouseMove(e) {
        if (!dragging) return;
        let newLeft = startLeft + (e.clientX - startX);
        let newTop = startTop + (e.clientY - startY);
        const parentRect = graphArea.getBoundingClientRect();
        newLeft = Math.max(0, Math.min(newLeft, parentRect.width - element.offsetWidth));
        newTop = Math.max(0, Math.min(newTop, parentRect.height - element.offsetHeight));
        element.style.left = `${newLeft}px`;
        element.style.top = `${newTop}px`;
        redrawParamLines();
    }
    function onMouseUp() { dragging = false; document.removeEventListener('mousemove', onMouseMove); document.removeEventListener('mouseup', onMouseUp); }
}

function escapeHtml(str) { return String(str).replace(/[&<>]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]; }); }

// Drag & Drop из библиотеки
function setupDragDrop() {
    document.querySelectorAll('.formula-item').forEach(el => {
        el.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
                eq: el.dataset.eq,
                name: el.dataset.name,
                vars: JSON.parse(el.dataset.vars)
            }));
        });
    });
    graphArea.addEventListener('dragover', (e) => e.preventDefault());
    graphArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const raw = e.dataTransfer.getData('text/plain');
        if (!raw) return;
        const data = JSON.parse(raw);
        const coords = getRelativeCoords(e, graphArea);
        let x = coords.x - 145, y = coords.y - 70;
        x = Math.max(10, Math.min(x, graphArea.clientWidth - 290));
        y = Math.max(10, Math.min(y, graphArea.clientHeight - 200));
        createFormulaBlock(data.eq, data.name, data.vars, x, y);
        redrawParamLines();
    });
}

function initDemo() {
    createFormulaBlock("F = m·a", "II закон Ньютона", ["F", "m", "a"], 50, 80);
    createFormulaBlock("P = F/S", "Давление", ["P", "F", "S"], 360, 180);
    createFormulaBlock("I = U/R", "Закон Ома", ["I", "U", "R"], 660, 90);
    redrawParamLines();
}

function setConnectMode(active) {
    connectModeActive = active;
    if (!active) pendingSource = null;
    connModeBtn.classList.toggle('active', active);
    connModeBtn.innerText = active ? "🔌 Режим связи (ON)" : "🔌 Режим связи (OFF)";
    modeStatusSpan.innerText = active ? "🔌 Режим связи: выберите выходной порт" : "⚡ Режим: перемещение";
}
connModeBtn.addEventListener('click', () => setConnectMode(!connectModeActive));
clearConnModeBtn.addEventListener('click', () => { pendingSource = null; setConnectMode(false); });
computeBtn.addEventListener('click', computeAll);
clearAllParamsConnBtn.addEventListener('click', () => {
    paramConnections = [];
    for (let rect of rectangles.values()) rebuildParamsList(rect);
    updateParamConnectionsList();
    redrawParamLines();
});
window.addEventListener('resize', () => redrawParamLines());
new ResizeObserver(() => redrawParamLines()).observe(graphArea);
setupDragDrop();
initDemo();
setConnectMode(false);