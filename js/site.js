//--- БАЗА ФОРМУЛ ---
const formulasLibrary = [
    // ==================== Дополнительно ====================
    { name: "Арифметический оператор", eq: "out = in + coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in - coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in · coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in / coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in²", vars: ["out", "in"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = Math.sqrt(in)", vars: ["out", "in"], category: "Дополнительно" },


    // ==================== МЕХАНИКА ====================
    { name: "Давление", eq: "P = F/S", vars: ["P", "F", "S"], category: "Механика" },
    { name: "Плотность", eq: "ρ = m/V", vars: ["ρ", "m", "V"], category: "Механика" },
    { name: "Давление жидкости", eq: "P = ρ·g·h", vars: ["P", "ρ", "g", "h"], category: "Механика" },
    { name: "Сила тяжести", eq: "Fт = m·g", vars: ["Fт", "m", "g"], category: "Механика" },
    { name: "Архимедова сила", eq: "Fₐ = ρж·g·Vт", vars: ["Fₐ", "ρж", "g", "Vт"], category: "Механика" },
    { name: "II закон Ньютона", eq: "F = m·a", vars: ["F", "m", "a"], category: "Механика" },
    { name: "Закон Гука", eq: "Fy = -k·x", vars: ["Fy", "k", "x"], category: "Механика" },
    { name: "Кинетическая энергия", eq: "Ek = m·υ²/2", vars: ["Ek", "m", "υ"], category: "Механика" },
    { name: "Работа", eq: "A = F·S·cosα", vars: ["A", "F", "S", "cosα"], category: "Механика" },
    { name: "Мощность", eq: "N = A/t", vars: ["N", "A", "t"], category: "Механика" },
    { name: "Координата при равноускоренном движении", eq: "X = X0 + υ0·t + (a·t²)/2", vars: ["X", "X0", "υ0", "t", "a"], category: "Механика" },
    { name: "Перемещение при равноускоренном движении (без времени)", eq: "S = (υ2² - υ0²)/(2·a)", vars: ["S", "υ2", "υ0", "a"], category: "Механика" },
    { name: "Перемещение при равноускоренном движении (средняя скорость)", eq: "S = (υ + υ0)·t/2", vars: ["S", "υ", "υ0", "t"], category: "Механика" },
    { name: "Уравнение скорости при равноускоренном движении", eq: "υ = υ0 + a·t", vars: ["υ", "υ0", "a", "t"], category: "Механика" },
    { name: "Ускорение", eq: "a = (υ - υ0)/t", vars: ["a", "υ", "υ0", "t"], category: "Механика" },
    { name: "Скорость при движении по окружности", eq: "υ = 2·Math.PI·R/T", vars: ["υ", "R", "T"], category: "Механика" },
    { name: "Центростремительное ускорение", eq: "a = υ²/R", vars: ["a", "υ", "R"], category: "Механика" },
    { name: "Частота через период", eq: "ν = 1/T", vars: ["ν", "T"], category: "Механика" },
    { name: "Частота через циклическую частоту", eq: "ν = ω/(2·Math.PI)", vars: ["ν", "ω"], category: "Механика" },
    { name: "Циклическая частота через частоту", eq: "ω = 2·Math.PI·ν", vars: ["ω", "ν"], category: "Механика" },
    { name: "Закон Всемирного тяготения", eq: "F = G·M·m/R²", vars: ["F", "G", "M", "m", "R"], category: "Механика" },
    { name: "Вес тела при движении вверх с ускорением", eq: "P = m·(g + a)", vars: ["P", "m", "g", "a"], category: "Механика" },
    { name: "Вес тела при движении вниз с ускорением", eq: "P = m·(g - a)", vars: ["P", "m", "g", "a"], category: "Механика" },
    { name: "Сила трения", eq: "Fтр = μ·N", vars: ["Fтр", "μ", "N"], category: "Механика" },
    { name: "Импульс тела", eq: "p = m·υ", vars: ["p", "m", "υ"], category: "Механика" },
    { name: "Импульс силы", eq: "Δp = F·t", vars: ["Δp", "F", "t"], category: "Механика" },
    { name: "Момент силы", eq: "M = F·ℓ", vars: ["M", "F", "ℓ"], category: "Механика" },
    { name: "Потенциальная энергия тела, поднятого над землей", eq: "Eп = m·g·h", vars: ["Eп", "m", "g", "h"], category: "Механика" },
    { name: "Потенциальная энергия упруго деформированного тела", eq: "Eп = k·x²/2", vars: ["Eп", "k", "x"], category: "Механика" },
    { name: "Мощность через силу и скорость", eq: "N = F·υ", vars: ["N", "F", "υ"], category: "Механика" },
    { name: "Коэффициент полезного действия", eq: "η = Aп/Aз", vars: ["η", "Aп", "Aз"], category: "Механика" },

    // ==================== МОЛЕКУЛЯРНАЯ ФИЗИКА И ТЕРМОДИНАМИКА ====================
    { name: "Количество вещества", eq: "ν = N/Na", vars: ["ν", "N", "Na"], category: "Молекулярная физика" },
    { name: "Молярная масса", eq: "M = m/ν", vars: ["M", "m", "ν"], category: "Молекулярная физика" },
    { name: "Средняя кинетическая энергия молекул одноатомного газа", eq: "Ek = (3/2)·k·T", vars: ["Ek", "k", "T"], category: "Молекулярная физика" },
    { name: "Давление газа через концентрацию и температуру", eq: "P = n·k·T", vars: ["P", "n", "k", "T"], category: "Молекулярная физика" },
    { name: "Давление газа через концентрацию, массу молекулы и скорость", eq: "P = (1/3)·n·m0·υ²", vars: ["P", "n", "m0", "υ"], category: "Молекулярная физика" },
    { name: "Закон Гей-Люссака (изобарный процесс)", eq: "V2 = V1·T2/T1", vars: ["V2", "V1", "T2", "T1"], category: "Молекулярная физика" },
    { name: "Закон Шарля (изохорный процесс)", eq: "P2 = P1·T2/T1", vars: ["P2", "P1", "T2", "T1"], category: "Молекулярная физика" },
    { name: "Относительная влажность", eq: "φ = P/P0", vars: ["φ", "P", "P0"], category: "Молекулярная физика" },
    { name: "Внутренняя энергия идеального одноатомного газа", eq: "U = (3/2)·(M/µ)·R·T", vars: ["U", "M", "µ", "R", "T"], category: "Молекулярная физика" },
    { name: "Работа газа", eq: "A = P·ΔV", vars: ["A", "P", "ΔV"], category: "Молекулярная физика" },
    { name: "Закон Бойля-Мариотта (изотермический процесс)", eq: "P2 = P1·V1/V2", vars: ["P2", "P1", "V1", "V2"], category: "Молекулярная физика" },
    { name: "Количество теплоты при нагревании", eq: "Q = C·m·(T2 - T1)", vars: ["Q", "C", "m", "T2", "T1"], category: "Молекулярная физика" },
    { name: "Количество теплоты при плавлении", eq: "Q = λ·m", vars: ["Q", "λ", "m"], category: "Молекулярная физика" },
    { name: "Количество теплоты при парообразовании", eq: "Q = L·m", vars: ["Q", "L", "m"], category: "Молекулярная физика" },
    { name: "Количество теплоты при сгорании топлива", eq: "Q = q·m", vars: ["Q", "q", "m"], category: "Молекулярная физика" },
    { name: "Уравнение состояния идеального газа", eq: "P·V = (m/M)·R·T", vars: ["P", "V", "m", "M", "R", "T"], category: "Молекулярная физика" },
    { name: "Первый закон термодинамики", eq: "ΔU = A + Q", vars: ["ΔU", "A", "Q"], category: "Молекулярная физика" },
    { name: "КПД тепловых двигателей", eq: "η = (Q1 - Q2)/Q1", vars: ["η", "Q1", "Q2"], category: "Молекулярная физика" },
    { name: "КПД идеального двигателя (цикл Карно)", eq: "η = (T1 - T2)/T1", vars: ["η", "T1", "T2"], category: "Молекулярная физика" },

    // ==================== ЭЛЕКТРОДИНАМИКА ====================
    { name: "Закон Ома", eq: "I = U/R", vars: ["I", "U", "R"], category: "Электродинамика" },
    { name: "Закон Кулона", eq: "F = k·q1·q2/R²", vars: ["F", "k", "q1", "q2", "R"], category: "Электродинамика" },
    { name: "Напряженность электрического поля", eq: "E = F/q", vars: ["E", "F", "q"], category: "Электродинамика" },
    { name: "Напряженность поля точечного заряда", eq: "E = k·q/R²", vars: ["E", "k", "q", "R"], category: "Электродинамика" },
    { name: "Поверхностная плотность зарядов", eq: "σ = q/S", vars: ["σ", "q", "S"], category: "Электродинамика" },
    { name: "Напряженность поля бесконечной плоскости", eq: "E = 2·Math.PI·k·σ", vars: ["E", "k", "σ"], category: "Электродинамика" },
    { name: "Диэлектрическая проницаемость", eq: "ε = E0/E", vars: ["ε", "E0", "E"], category: "Электродинамика" },
    { name: "Потенциальная энергия взаимодействия зарядов", eq: "W = k·q1·q2/R", vars: ["W", "k", "q1", "q2", "R"], category: "Электродинамика" },
    { name: "Потенциал", eq: "φ = W/q", vars: ["φ", "W", "q"], category: "Электродинамика" },
    { name: "Потенциал точечного заряда", eq: "φ = k·q/R", vars: ["φ", "k", "q", "R"], category: "Электродинамика" },
    { name: "Напряжение", eq: "U = A/q", vars: ["U", "A", "q"], category: "Электродинамика" },
    { name: "Для однородного электрического поля", eq: "U = E·d", vars: ["U", "E", "d"], category: "Электродинамика" },
    { name: "Электроемкость", eq: "C = q/U", vars: ["C", "q", "U"], category: "Электродинамика" },
    { name: "Электроемкость плоского конденсатора", eq: "C = S·ε·ε0/d", vars: ["C", "S", "ε", "ε0", "d"], category: "Электродинамика" },
    { name: "Энергия заряженного конденсатора", eq: "W = C·U²/2", vars: ["W", "C", "U"], category: "Электродинамика" },
    { name: "Сила тока", eq: "I = q/t", vars: ["I", "q", "t"], category: "Электродинамика" },
    { name: "Сопротивление проводника", eq: "R = ρ·ℓ/S", vars: ["R", "ρ", "ℓ", "S"], category: "Электродинамика" },
    { name: "Общее сопротивление при последовательном соединении", eq: "R = R1 + R2", vars: ["R", "R1", "R2"], category: "Электродинамика" },
    { name: "Общее напряжение при последовательном соединении", eq: "U = U1 + U2", vars: ["U", "U1", "U2"], category: "Электродинамика" },
    { name: "Сила тока при последовательном соединении", eq: "I1 = I2", vars: ["I1", "I2"], category: "Электродинамика" },
    { name: "Общее сопротивление при параллельном соединении", eq: "R = 1/(1/R1 + 1/R2)", vars: ["R", "R1", "R2"], category: "Электродинамика" },
    { name: "Напряжение при параллельном соединении", eq: "U1 = U2", vars: ["U1", "U2"], category: "Электродинамика" },
    { name: "Сила тока при параллельном соединении", eq: "I = I1 + I2", vars: ["I", "I1", "I2"], category: "Электродинамика" },
    { name: "Мощность электрического тока", eq: "P = I·U", vars: ["P", "I", "U"], category: "Электродинамика" },
    { name: "Закон Джоуля-Ленца", eq: "Q = I²·R·t", vars: ["Q", "I", "R", "t"], category: "Электродинамика" },
    { name: "Закон Ома для полной цепи", eq: "I = ε/(R + r)", vars: ["I", "ε", "R", "r"], category: "Электродинамика" },
    { name: "Ток короткого замыкания", eq: "I = ε/r", vars: ["I", "ε", "r"], category: "Электродинамика" },
    { name: "Вектор магнитной индукции", eq: "B = Fmax/(I·ℓ)", vars: ["B", "Fmax", "I", "ℓ"], category: "Электродинамика" },
    { name: "Сила Ампера", eq: "Fa = I·B·ℓ·sinα", vars: ["Fa", "I", "B", "ℓ", "sinα"], category: "Электродинамика" },
    { name: "Сила Лоренца", eq: "Fл = B·q·υ·sinα", vars: ["Fл", "B", "q", "υ", "sinα"], category: "Электродинамика" },
    { name: "Магнитный поток", eq: "Ф = B·S·cosα", vars: ["Ф", "B", "S", "cosα"], category: "Электродинамика" },
    { name: "Магнитный поток через индуктивность", eq: "Ф = L·I", vars: ["Ф", "L", "I"], category: "Электродинамика" },
    { name: "Закон электромагнитной индукции", eq: "Ei = ΔФ/Δt", vars: ["Ei", "ΔФ", "Δt"], category: "Электродинамика" },
    { name: "ЭДС индукции в движущемся проводнике", eq: "Ei = B·ℓ·υ·sinα", vars: ["Ei", "B", "ℓ", "υ", "sinα"], category: "Электродинамика" },
    { name: "ЭДС самоиндукции", eq: "Esi = -L·ΔI/Δt", vars: ["Esi", "L", "ΔI", "Δt"], category: "Электродинамика" },
    { name: "Энергия магнитного поля катушки", eq: "Wм = L·I²/2", vars: ["Wм", "L", "I"], category: "Электродинамика" },

    // ==================== КОЛЕБАНИЯ И ВОЛНЫ ====================
    { name: "Период колебаний математического маятника", eq: "T = 2·Math.PI·Math.sqrt(ℓ/g)", vars: ["T", "ℓ", "g"], category: "Колебания и волны" },
    { name: "Период колебаний пружинного маятника", eq: "T = 2·Math.PI·Math.sqrt(m/k)", vars: ["T", "m", "k"], category: "Колебания и волны" },
    { name: "Уравнение гармонических колебаний", eq: "X = Xmax·Math.cos(ω·t)", vars: ["X", "Xmax", "ω", "t"], category: "Колебания и волны" },
    { name: "Связь длины волны, скорости и периода", eq: "λ = υ·T", vars: ["λ", "υ", "T"], category: "Колебания и волны" },
    { name: "Период колебаний колебательного контура", eq: "T = 2·Math.PI·Math.sqrt(L·C)", vars: ["T", "L", "C"], category: "Колебания и волны" },
    { name: "Индуктивное сопротивление", eq: "XL = 2·Math.PI·L·ν", vars: ["XL", "L", "ν"], category: "Колебания и волны" },
    { name: "Емкостное сопротивление", eq: "Xc = 1/(2·Math.PI·ν·C)", vars: ["Xc", "ν", "C"], category: "Колебания и волны" },
    { name: "Действующее значение силы тока", eq: "Iд = Imax/Math.sqrt(2)", vars: ["Iд", "Imax"], category: "Колебания и волны" },
    { name: "Действующее значение напряжения", eq: "Uд = Umax/Math.sqrt(2)", vars: ["Uд", "Umax"], category: "Колебания и волны" },
    { name: "Полное сопротивление", eq: "Z = Math.sqrt((Xc - XL)² + R²)", vars: ["Z", "Xc", "XL", "R"], category: "Колебания и волны" },

    // ==================== ОПТИКА ====================
    { name: "Закон преломления света", eq: "n21 = n2/n1", vars: ["n21", "n2", "n1"], category: "Оптика" },
    { name: "Показатель преломления", eq: "n21 = sinα/sinγ", vars: ["n21", "sinα", "sinγ"], category: "Оптика" },
    { name: "Формула тонкой линзы", eq: "1/F = 1/d + 1/f", vars: ["F", "d", "f"], category: "Оптика" },
    { name: "Оптическая сила линзы", eq: "D = 1/F", vars: ["D", "F"], category: "Оптика" },
    { name: "Максимум интерференции", eq: "Δd = k·λ", vars: ["Δd", "k", "λ"], category: "Оптика" },
    { name: "Минимум интерференции", eq: "Δd = (2k+1)·λ/2", vars: ["Δd", "k", "λ"], category: "Оптика" },
    { name: "Дифракционная решетка", eq: "d·sinφ = k·λ", vars: ["d", "sinφ", "k", "λ"], category: "Оптика" },

    // ==================== КВАНТОВАЯ ФИЗИКА ====================
    { name: "Формула Эйнштейна для фотоэффекта", eq: "h·ν = Aвых + Ek", vars: ["h", "ν", "Aвых", "Ek"], category: "Квантовая физика" },
    { name: "Красная граница фотоэффекта", eq: "νк = Aвых/h", vars: ["νк", "Aвых", "h"], category: "Квантовая физика" },
    { name: "Импульс фотона (через длину волны)", eq: "P = h/λ", vars: ["P", "h", "λ"], category: "Квантовая физика" },
    { name: "Импульс фотона (через энергию)", eq: "P = E/c", vars: ["P", "E", "c"], category: "Квантовая физика" },
    { name: "Закон радиоактивного распада", eq: "N = N0·Math.pow(2, -t/T)", vars: ["N", "N0", "t", "T"], category: "Квантовая физика" },
    { name: "Энергия связи атомных ядер", eq: "Eсв = (Z·mp + N·mn - Mя)·c²", vars: ["Eсв", "Z", "mp", "N", "mn", "Mя", "c"], category: "Квантовая физика" },

    // ==================== СПЕЦИАЛЬНАЯ ТЕОРИЯ ОТНОСИТЕЛЬНОСТИ ====================
    { name: "Релятивистское замедление времени", eq: "t = t1/Math.sqrt(1 - υ²/c²)", vars: ["t", "t1", "υ", "c"], category: "СТО" },
    { name: "Релятивистское сокращение длины", eq: "ℓ = ℓ0·Math.sqrt(1 - υ²/c²)", vars: ["ℓ", "ℓ0", "υ", "c"], category: "СТО" },
    { name: "Релятивистское сложение скоростей", eq: "υ2 = (υ1 + υ)/(1 + υ1·υ/c²)", vars: ["υ2", "υ1", "υ", "c"], category: "СТО" },
    { name: "Эквивалентность массы и энергии", eq: "E = m·c²", vars: ["E", "m", "c"], category: "СТО" }
];

// Отрисовка формул с группировкой
// Группировка формул по категориям
const groupedFormulas = {};
formulasLibrary.forEach(f => {
    if (!groupedFormulas[f.category]) groupedFormulas[f.category] = [];
    groupedFormulas[f.category].push(f);
});

// Порядок категорий (можно задать вручную или взять из ключей)
const categoryOrder = [
    "Механика",
    "Молекулярная физика",
    "Электродинамика",
    "Колебания и волны",
    "Оптика",
    "Квантовая физика",
    "СТО",
    "Дополнительно"
];

// Получаем контейнеры
const tabsContainer = document.getElementById('formulaTabs');
const contentContainer = document.getElementById('formulaTabContent');

// Очищаем
tabsContainer.innerHTML = '';
contentContainer.innerHTML = '';

/**
 * Создаёт кнопку-вкладку для категории формул.
 * @param {string} category - Название категории.
 * @param {boolean} isActive - Должна ли вкладка быть активной по умолчанию.
 * @returns {HTMLButtonElement} Элемент кнопки вкладки.
 */
function createTab(category, isActive = false) {
    const tabBtn = document.createElement('button');
    tabBtn.className = 'formula-tab' + (isActive ? ' active' : '');
    tabBtn.textContent = category;
    tabBtn.dataset.category = category;
    tabBtn.addEventListener('click', () => switchTab(category));
    return tabBtn;
}

/**
 * Создаёт контент (панель с формулами) для заданной категории.
 * @param {string} category - Название категории.
 * @returns {HTMLDivElement} Контейнер с перетаскиваемыми элементами формул.
 */
function createTabContent(category) {
    const formulas = groupedFormulas[category] || [];
    const contentDiv = document.createElement('div');
    contentDiv.className = 'formula-tab-pane';
    contentDiv.dataset.category = category;

    formulas.forEach(f => {
        const item = document.createElement('div');
        item.className = 'formula-item';
        item.setAttribute('draggable', 'true');
        item.dataset.eq = f.eq;
        item.dataset.name = f.name;
        item.dataset.vars = JSON.stringify(f.vars);
        item.innerText = f.eq;
        item.title = f.name;
        contentDiv.appendChild(item);
    });

    return contentDiv;
}

/**
 * Переключает активную вкладку и показывает соответствующий контент.
 * @param {string} category - Категория, на которую нужно переключиться.
 */
function switchTab(category) {
    // Обновляем активный класс у кнопок
    document.querySelectorAll('.formula-tab').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    // Показываем нужный контент
    document.querySelectorAll('.formula-tab-pane').forEach(pane => {
        pane.style.display = 'none';
        if (pane.dataset.category === category) {
            pane.style.display = 'block';
        }
    });
}

// Строим вкладки и содержимое
categoryOrder.forEach((cat, idx) => {
    const isActive = idx === 0;
    const tabBtn = createTab(cat, isActive);
    const tabPane = createTabContent(cat);
    tabsContainer.appendChild(tabBtn);
    contentContainer.appendChild(tabPane);
    if (!isActive) tabPane.style.display = 'none';
});

// Если есть категории, не вошедшие в order, добавим их в конец
for (const cat in groupedFormulas) {
    if (!categoryOrder.includes(cat)) {
        const tabBtn = createTab(cat, false);
        const tabPane = createTabContent(cat);
        tabsContainer.appendChild(tabBtn);
        contentContainer.appendChild(tabPane);
        tabPane.style.display = 'none';
    }
}

// ---------------------- Глобальное состояние ----------------------
let rectangles = new Map();                 // Хранилище блоков формул по id
let paramConnections = [];                  // Список связей между параметрами
let nextRectId = 1000;                      // Счётчик для генерации id новых блоков
let connectModeActive = false;              // Активен ли режим соединения
let pendingSource = null;                   // Временно выбранный источник соединения { rectId, param, isOutput }

const graphArea = document.getElementById('graphArea');
const rectLayer = document.getElementById('rectLayer');
const svg = document.getElementById('linesSvg');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const connModeBtn = document.getElementById('connModeBtn');
const helpBtn = document.getElementById('helpBtn');
const computeBtn = document.getElementById('computeBtn');
const modeStatusSpan = document.getElementById('modeStatus');
const paramConnListDiv = document.getElementById('paramConnList');
const clearAllParamsConnBtn = document.getElementById('clearAllParamsConn');

/**
 * Вычисляет относительные координаты события внутри контейнера.
 * @param {MouseEvent} e - Событие мыши.
 * @param {HTMLElement} container - Контейнер, относительно которого считаются координаты.
 * @returns {{x: number, y: number}} Объект с координатами x, y.
 */
function getRelativeCoords(e, container) {
    const rect = container.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

// ---------- Отрисовка линий ----------

/**
 * Перерисовывает все линии связей между параметрами.
 * Учитывает текущие размеры graphArea и положение портов.
 */
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
    // Добавляем маркер-стрелку, если ещё не добавлен
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
        marker.setAttribute("id", "arrowParam");
        marker.setAttribute("markerWidth", "8");
        marker.setAttribute("markerHeight", "7");
        marker.setAttribute("refX", "9");
        marker.setAttribute("refY", "5");
        marker.setAttribute("orient", "auto");
        const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        poly.setAttribute("points", "0 0, 9 5, 0 8");
        poly.setAttribute("fill", "#f97316");
        marker.appendChild(poly);
        defs.appendChild(marker);
        svg.appendChild(defs);
    }
}

/**
 * Возвращает координаты центра порта (входа или выхода) для заданного параметра.
 * @param {Object} rect - Объект данных блока.
 * @param {string} paramName - Имя параметра.
 * @param {boolean} isOutput - Является ли порт выходным (true) или входным (false).
 * @returns {{x: number, y: number}|null} Координаты порта или null, если не найден.
 */
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
            if (nameSpan?.innerText === paramName) {
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

/**
 * Обновляет отображение списка связей параметров в интерфейсе.
 */
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
        html += `<div class="conn-badge">${srcName} → ${tgtName} <button data-idx="${idx}" class="removeParamConn">✖</button></div>`;
    });
    paramConnListDiv.innerHTML = html;
    document.querySelectorAll('.removeParamConn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number.parseInt(btn.dataset.idx);
            removeParamConnection(idx);
        });
    });
}

/**
 * Удаляет связь параметров по индексу и обновляет интерфейс.
 * @param {number} index - Индекс связи в массиве paramConnections.
 */
function removeParamConnection(index) {
    const conn = paramConnections[index];
    if (!conn) return;
    paramConnections.splice(index, 1);
    const targetRect = rectangles.get(conn.targetRectId);
    if (targetRect) rebuildParamsList(targetRect);
    updateParamConnectionsList();
    redrawParamLines();
}


/**
 * Перестраивает список параметров в блоке на основе текущих связей и ручных значений.
 * Вызывается при изменении целевого параметра или после добавления/удаления связей.
 * @param {Object} rect - Объект данных блока.
 */
function rebuildParamsList(rect) {
    const container = rect.element.querySelector('.params-list');
    const newTarget = rect.targetVar;
    let newHtml = '';
    for (let v of rect.vars) {
        if (v === newTarget)
            continue;
        const hasConn = paramConnections.some(c => c.targetRectId === rect.id && c.targetParam === v);
        const manualVal = rect.manualValues[v] === undefined ? '' : rect.manualValues[v];
        if (hasConn) {
            newHtml += `
            <div class="param-row">
                <div class="port" data-param="${v}"></div>
                <div class="param-name">${v}</div>
                <div class="param-value">
                    <div class="param-output">связано</div>
                </div>
            </div>`;
        } else {
            newHtml += `
            <div class="param-row">
                <div class="port" data-param="${v}"></div>
                <div class="param-name">${v}</div>
                <div class="param-value">
                    <input class="param-input" type="number" placeholder="число" value="${escapeHtml(manualVal)}">
                </div>
            </div>`;
        }
    }
    container.innerHTML = newHtml;
    
    // Перепривязываем обработчики на порты
    container.querySelectorAll('.port').forEach(port => {
        port.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!connectModeActive)
                return;
            const param = port.dataset.param;
            handlePortClick(rect.id, param, false);
        });
    });

    // Восстанавливаем значения в инпутах и подписываемся на изменения
    for (let v of rect.vars) {
        if (v === rect.targetVar) continue;
        const row = findParamRow(rect.element, v);
        if (row && !paramConnections.some(c => c.targetRectId === rect.id && c.targetParam === v)) {
            const input = row.querySelector('input');
            if (input) {
                input.value = rect.manualValues[v] === undefined ? '' : rect.manualValues[v];
                input.addEventListener('input', (e) => {
                    rect.manualValues[v] = e.target.value;
                });
            }
        }
    }
}

/**
 * Находит строку параметра в DOM-элементе блока по имени параметра.
 * @param {HTMLElement} rectEl - Корневой элемент блока.
 * @param {string} paramName - Имя параметра.
 * @returns {HTMLElement|null} Элемент строки или null.
 */
function findParamRow(rectEl, paramName) {
    const rows = rectEl.querySelectorAll('.param-row');
    for (let row of rows) {
        const nameSpan = row.querySelector('.param-name');
        if (nameSpan?.innerText === paramName) return row;
    }
    return null;
}

/**
 * Добавляет новую связь от выходного параметра к входному.
 * Проверяет корректность и уникальность связи.
 * @param {number} sourceRectId - ID блока-источника.
 * @param {string} sourceParam - Имя выходного параметра (целевая переменная блока).
 * @param {number} targetRectId - ID блока-приёмника.
 * @param {string} targetParam - Имя входного параметра.
 * @returns {boolean} true, если связь успешно добавлена.
 */
function addParamConnection(sourceRectId, sourceParam, targetRectId, targetParam) {
    const srcRect = rectangles.get(sourceRectId);
    if (srcRect?.targetVar !== sourceParam) {
        alert("Источником может быть только вычисляемый выходной параметр (оранжевый кружок)!");
        return false;
    }
    const tgtRect = rectangles.get(targetRectId);
    if (!tgtRect) return false;
    if (tgtRect.targetVar === targetParam) {
        alert("Нельзя подключать вход к вычисляемому параметру цели!");
        return false;
    }
    if (paramConnections.some(c => c.sourceRectId === sourceRectId && c.sourceParam === sourceParam)) {
        alert("Параметр уже связан!");
        return false;
    }
    if (paramConnections.some(c => c.targetRectId === targetRectId && c.targetParam === targetParam)) {
        alert("Параметр уже связан!");
        return false;
    }
    if (sourceRectId === targetRectId) {
        alert("Нельзя соединять выход блока с его же входом (зацикливание)!");
        return false;
    }
    //if (targetParam !== sourceParam && targetParam !== 'in' && sourceParam !== 'out') {
    //    alert("Соединять можно только одинаковые параметры!");
    //    return false;
    //}
    paramConnections.push({ sourceRectId, sourceParam, targetRectId, targetParam });
    rebuildParamsList(tgtRect);
    updateParamConnectionsList();
    redrawParamLines();
    return true;
}

/**
 * Вычисляет значения всех блоков, используя ручные вводы и связи.
 * Выполняет итеративное решение до тех пор, пока есть изменения.
 */
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
            
            let allInputsReady = true;
            if (rect.isCustom) {
                // Получаем значение in
                let inVal = null;
                const inConn = paramConnections.find(c => c.targetRectId === rect.id && c.targetParam === 'in');
                if (inConn) {
                    const srcRect = rectangles.get(inConn.sourceRectId);
                    if (srcRect && srcRect.computedValue !== null) {
                        inVal = srcRect.computedValue;
                    } else {
                        allInputsReady = false;
                    }
                } else {
                    const manualIn = rect.manualValues.in;
                    if (manualIn !== undefined && manualIn.trim() !== '' && !isNaN(Number.parseFloat(manualIn))) {
                        inVal = Number.parseFloat(manualIn);
                    } else {
                        allInputsReady = false;
                    }
                }
                // Получаем coeff (только ручной ввод)
                let coeffVal = null;
                const manualCoeff = rect.manualValues.coeff;
                if (manualCoeff !== undefined && manualCoeff.trim() !== '' && !isNaN(Number.parseFloat(manualCoeff))) {
                    coeffVal = Number.parseFloat(manualCoeff);
                } else {
                    allInputsReady = false;
                }
                if (allInputsReady && inVal !== null && coeffVal !== null) {
                    let result = null;
                    switch (rect.operation) {
                        case '+': result = inVal + coeffVal; break;
                        case '-': result = inVal - coeffVal; break;
                        case '*': result = inVal * coeffVal; break;
                        case '/': result = coeffVal !== 0 ? inVal / coeffVal : NaN; break;
                    }
                    if (result !== null && isFinite(result)) {
                        rect.computedValue = result;
                        const targetSpan = rect.element.querySelector('.target-value');
                        if (targetSpan) targetSpan.innerText = result.toFixed(4);
                        changed = true;
                    }
                }
                continue;
            }
            const inputValues = {};
            allInputsReady = true;
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
                    if (manualVal !== undefined && manualVal.trim() !== '' && !Number.isNaN(Number.parseFloat(manualVal))) {
                        inputValues[v] = Number.parseFloat(manualVal);
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
            if (result !== null && Number.isFinite(result)) {
                rect.computedValue = result;
                const targetValueSpan = rect.element.querySelector('.target-value');
                if (targetValueSpan) targetValueSpan.innerText = result.toFixed(4);
                changed = true;
            }
        }
        iter++;
    }
    // Обновляем отображение связанных значений в блоках-приёмниках
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
                            valDiv.innerHTML = `<div class="param-output"> = ${srcRect.computedValue.toFixed(4)}</div>`;
                        }
                    }
                }
            }
        }
    }
}

/**
 * Приводит выражение к виду, пригодному для eval: заменяет символы умножения и степени.
 * @param {string} expr - Исходное выражение.
 * @returns {string} Нормализованное выражение.
 */
function normalizeExpression(expr) {
    expr = expr.replaceAll('·', '*');
    expr = expr.replaceAll('²', '**2');
    return expr;
}

/**
 * Вычисляет невязку уравнения для заданного значения целевой переменной.
 * Используется в численном решении уравнения.
 * @param {string} eq - Уравнение в виде "левая = правая".
 * @param {number} x - Пробное значение целевой переменной.
 * @param {string[]} vars - Список всех переменных.
 * @param {Object} knownValues - Известные значения остальных переменных.
 * @param {string} targetVar - Имя переменной, которую решаем.
 * @returns {number} Значение невязки (левая - правая).
 */
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
        if (env[v] === undefined || Number.isNaN(env[v]))
            return Number.NaN;
    }
    try {
        const fn = new Function(...vars, `return ${exprStr};`);
        return fn(...vars.map(v => env[v]));
    }
    catch(e) {
        return Number.NaN;
    }
}

/**
 * Решает уравнение относительно заданной переменной методом бисекции.
 * @param {string} eq - Уравнение.
 * @param {string[]} vars - Список переменных.
 * @param {Object} knownValues - Известные значения.
 * @param {string} targetVar - Искомая переменная.
 * @returns {number|null} Решение или null, если не удалось найти.
 */
function solveEquation(eq, vars, knownValues, targetVar) {
    let a = -1e6, b = 1e6;
    let fa = residual(eq, a, vars, knownValues, targetVar), fb = residual(eq, b, vars, knownValues, targetVar);
    if (Number.isNaN(fa) || Number.isNaN(fb))
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
        if (Number.isNaN(fm))
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

/**
 * Создаёт новый блок формулы и добавляет его в область построения.
 * @param {string} formulaEq - Строковое представление формулы (например, "F = m·a").
 * @param {string} formulaName - Название формулы.
 * @param {string[]} varsArray - Массив имён переменных, первая считается целевой по умолчанию.
 * @param {number} left - Позиция по X (px) относительно graphArea.
 * @param {number} top - Позиция по Y (px).
 * @param {number|null} id - Опциональный ID блока; если не указан, генерируется автоматически.
 * @returns {number} ID созданного блока.
 */
function createFormulaBlock(formulaEq, formulaName, varsArray, left, top, id = null, targetVarOverride = null, manualValuesOverride = null) {
    const rectId = id === null ? nextRectId++ : id;
    
    // Определяем целевую переменную
    let targetVar = targetVarOverride;
    if (!targetVar || !varsArray.includes(targetVar)) {
        targetVar = varsArray[0];
    }
    
    // Ручные значения: если переданы, используем их, иначе создаём пустые
    const manualValues = manualValuesOverride ? { ...manualValuesOverride } : {};
    for (let v of varsArray) {
        if (v !== targetVar && manualValues[v] === undefined) {
            manualValues[v] = '';
        }
    }
    
    const rectDiv = document.createElement('div');
    rectDiv.className = 'formula-card';
    rectDiv.style.left = `${left}px`;
    rectDiv.style.top = `${top}px`;
    rectDiv.dataset.id = rectId;
    rectDiv.title = formulaName;
    
    let paramsHtml = '';
    for (let v of varsArray) {
        if (v === targetVar) continue;
        const hasConn = paramConnections.some(c => c.targetRectId === rectId && c.targetParam === v);
        const manualVal = manualValues[v] === undefined ? '' : manualValues[v];
        if (hasConn) {
            paramsHtml += `
                <div class="param-row">
                    <div class="port" data-param="${v}"></div>
                    <div class="param-name">${v}</div>
                    <div class="param-value"><div class="param-output">связано</div></div>
                </div>`;
        } else {
            paramsHtml += `
                <div class="param-row">
                    <div class="port" data-param="${v}"></div>
                    <div class="param-name">${v}</div>
                    <div class="param-value"><input class="param-input" type="number" placeholder="число" value="${escapeHtml(manualVal)}"></div>
                </div>`;
        }
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
                <div class="target-symbol">${targetVar}</div>
                <div class="target-value">?</div>
            </div>
            <div class="target-port"></div>
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
            const param = port.dataset.param;
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
        if (paramConnections.some(c => c.sourceRectId === rectData.id)) {
            alert("Смена параметров невозможна при наличии соединения!");
            return false;
        }
        if(paramConnections.some(c => c.targetRectId === rectData.id)) {
            alert("Смена параметров невозможна при наличии соединения!");
            return false;
        }
        if (e.target === targetPort) return;
        const idx = rectData.vars.indexOf(rectData.targetVar);
        const nextIdx = (idx + 1) % rectData.vars.length;
        const newTarget = rectData.vars[nextIdx];
        rectData.targetVar = newTarget;
        const symSpan = targetArea.querySelector('.target-symbol');
        if (symSpan) symSpan.innerText = newTarget;
        rebuildParamsList(rectData);
    });
    
    // Подписка на ручной ввод
    for (let v of varsArray) {
        if (v === targetVar) continue;
        const row = findParamRow(rectDiv, v);
        if (row) {
            const input = row.querySelector('input');
            if (input) {
                input.value = manualValues[v] === undefined ? '' : manualValues[v];
                input.addEventListener('input', (e) => {
                    rectData.manualValues[v] = e.target.value;
                });
            }
        }
    }
    
    makeDraggable(rectDiv, rectId);
    return rectId;
}

/**
 * Создаёт специальный блок «Арифметический оператор».
 * @param {number} left - Позиция X.
 * @param {number} top - Позиция Y.
 * @param {number|null} id - ID блока (опционально).
 * @param {string} operation - Операция: '+', '-', '*', '/'.
 * @param {string|number} coeffValue - Начальное значение коэффициента.
 * @returns {number} ID созданного блока.
 */
function createCustomBlock(left, top, id = null, operation = '+', coeffValue = '') {
    const rectId = id === null ? nextRectId++ : id;
    const rectDiv = document.createElement('div');
    rectDiv.className = 'formula-card';
    rectDiv.style.left = `${left}px`;
    rectDiv.style.top = `${top}px`;
    rectDiv.dataset.id = rectId;
    rectDiv.title = 'Арифметический оператор';

    // Создаём структуру блока
    rectDiv.innerHTML = `
        <div class="card-header">
            <div class="formula-text">out = in <span id="opSelect-${rectId}">${operation}</span> coeff</div>
            <div class="delete-card">✕</div>
        </div>
        <div class="params-list">
            <div class="param-row">
                <div class="port" data-param="in"></div>
                <div class="param-name">in</div>
                <div class="param-value">
                    <input class="param-input" type="number" placeholder="число или связь" id="inInput-${rectId}">
                </div>
            </div>
            <div class="param-row">
                <div class="param-name" style="margin-left:26px;">coeff</div>
                <div class="param-value">
                    <input class="param-input" type="number" placeholder="коэффициент" id="coeffInput-${rectId}" value="${escapeHtml(String(coeffValue))}">
                </div>
            </div>
        </div>
        <div class="target-area" data-target-var="out">
            <div class="target-output">
                <div class="target-symbol">out</div>
                <div class="target-value">?</div>
            </div>
            <div class="target-port"></div>
        </div>
    `;

    rectLayer.appendChild(rectDiv);


    // Данные блока
    const rectData = {
        id: rectId,
        element: rectDiv,
        isCustom: true,
        formulaName: 'Арифметический оператор',
        vars: ['out', 'in', 'coeff'],
        targetVar: 'out',        // всегда out
        manualValues: { in: '', coeff: String(coeffValue) },
        operation: operation,
        computedValue: null
    };
    rectangles.set(rectId, rectData);

    // Поля ввода
    const inInput = rectDiv.querySelector(`#inInput-${rectId}`);
    const coeffInput = rectDiv.querySelector(`#coeffInput-${rectId}`);

    inInput.addEventListener('input', (e) => {
        rectData.manualValues.in = e.target.value;
    });
    coeffInput.addEventListener('input', (e) => {
        rectData.manualValues.coeff = e.target.value;
    });

    // Восстановление значений, если уже есть (при загрузке)
    if (rectData.manualValues.in) inInput.value = rectData.manualValues.in;
    if (rectData.manualValues.coeff) coeffInput.value = rectData.manualValues.coeff;

    // Порты
    const inPort = rectDiv.querySelector('.port');
    inPort.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!connectModeActive) return;
        handlePortClick(rectId, 'in', false);
    });

    const outPort = rectDiv.querySelector('.target-port');
    outPort.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!connectModeActive) return;
        handlePortClick(rectId, 'out', true);
    });

    // Удаление
    const deleteBtn = rectDiv.querySelector('.delete-card');
    deleteBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteRectangle(rectId); });

    makeDraggable(rectDiv, rectId);
    return rectId;
}

/**
 * Обрабатывает клик по порту (входному или выходному) в режиме соединения.
 * @param {number} rectId - ID блока.
 * @param {string} param - Имя параметра.
 * @param {boolean} isOutput - Является ли порт выходным.
 */
function handlePortClick(rectId, param, isOutput) {
    if (!connectModeActive) return;
    if (pendingSource === null) {
        if (!isOutput) {
            alert("Сначала выберите выходной порт (оранжевый кружок)");
            return;
        }
        pendingSource = { rectId, param, isOutput };
        modeStatusSpan.innerText = `Выбран источник: ${param}. Теперь выберите входной порт.`;
    } else if (pendingSource.isOutput && !isOutput) {
        addParamConnection(pendingSource.rectId, pendingSource.param, rectId, param);
        pendingSource = null;
        modeStatusSpan.innerText = `Режим связи: выберите выходной порт`;
    } else {
        alert("Некорректное направление: нужно от выхода (оранжевый) ко входу (синий)");
        pendingSource = null;
        modeStatusSpan.innerText = `Режим связи: выберите выходной порт`;
    }
}

/**
 * Удаляет блок формулы и все связанные с ним соединения.
 * @param {number} rectId - ID удаляемого блока.
 */
function deleteRectangle(rectId) {
    const rect = rectangles.get(rectId);
    if (!rect) return;
    rect.element.remove();
    rectangles.delete(rectId);
    paramConnections = paramConnections.filter(c => c.sourceRectId !== rectId && c.targetRectId !== rectId);
    if (pendingSource?.rectId === rectId) pendingSource = null;
    updateParamConnectionsList();
    redrawParamLines();
}

// ---------- ПЕРЕТАСКИВАНИЕ БЛОКОВ ----------
/**
 * Делает элемент перетаскиваемым в пределах graphArea.
 * Игнорирует клики по инпутам, портам и кнопкам.
 * @param {HTMLElement} element - Элемент блока.
 * @param {number} rectId - ID блока (не используется, но оставлен для совместимости).
 */
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
        startLeft = Number.parseFloat(element.style.left);
        startTop = Number.parseFloat(element.style.top);
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

/**
 * Экранирует HTML-спецсимволы для безопасного встраивания в DOM.
 * @param {string} str - Исходная строка.
 * @returns {string} Экранированная строка.
 */
function escapeHtml(str) {
	return String(str).replaceAll(/[&<>]/g, function (m) {
		return { '&': '&amp;', '<': '&lt;', '>': '&gt;'
		}[m];
	});
}

// Drag & Drop из библиотеки

/**
 * Настраивает перетаскивание элементов из библиотеки формул.
 * При drop создаётся новый блок формулы.
 */
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
        if (data.name === "Арифметический оператор") {
            createCustomBlock(x, y);
        } else {
            createFormulaBlock(data.eq, data.name, data.vars, x, y);
        }
        redrawParamLines();
    });
}

/**
 * Инициализирует демонстрационные блоки при загрузке страницы.
 */
function initDemo() {
    const demoState = {
        "version": "1.0",
        "blocks": [
            {
                "id": 1008,
                "formulaEq": "F = m·a",
                "formulaName": "II закон Ньютона",
                "vars": ["F", "m", "a"],
                "left": 88.024,
                "top": 61.0729,
                "targetVar": "F",
                "manualValues": { "m": "10", "a": "9.8" }
            },
            {
                "id": 1009,
                "formulaEq": "P = F/S",
                "formulaName": "Давление",
                "vars": ["P", "F", "S"],
                "left": 496.024,
                "top": 145.073,
                "targetVar": "P",
                "manualValues": { "F": "", "S": "3" }
            },
            {
                "id": 1010,
                "formulaEq": "P = ρ·g·h",
                "formulaName": "Давление жидкости",
                "vars": ["P", "ρ", "g", "h"],
                "left": 870.024,
                "top": 351.073,
                "targetVar": "ρ",
                "manualValues": { "ρ": "", "g": "", "h": "15" }
            },
            {
                "id": 1012,
                "formulaEq": "Fт = m·g",
                "formulaName": "Сила тяжести",
                "vars": ["Fт", "m", "g"],
                "left": 495.024,
                "top": 396.073,
                "targetVar": "g",
                "manualValues": { "m": "5", "g": "", "Fт": "98" }
            }
        ],
        "paramConnections": [
            { "sourceRectId": 1008, "sourceParam": "F", "targetRectId": 1009, "targetParam": "F" },
            { "sourceRectId": 1009, "sourceParam": "P", "targetRectId": 1010, "targetParam": "P" },
            { "sourceRectId": 1012, "sourceParam": "g", "targetRectId": 1010, "targetParam": "g" }
        ],
        "nextRectId": 1013
    };
    deserializeState(demoState);
}

/**
 * Включает или выключает режим соединения параметров.
 * @param {boolean} active - Новое состояние режима.
 */
function setConnectMode(active) {
    connectModeActive = active;
    if (!active) pendingSource = null;
    connModeBtn.classList.toggle('active', active);
    connModeBtn.innerText = active ? "Режим связи (ON)" : "Режим связи (OFF)";
    modeStatusSpan.innerText = active ? "Режим связи: выберите выходной порт" : "Режим: перемещение";
}

// ==================== СОХРАНЕНИЕ И ЗАГРУЗКА ====================

function clearWorkspace() {
    // Удаляем все блоки из DOM
    for (let rect of rectangles.values()) {
        rect.element.remove();
    }
    rectangles.clear();
    paramConnections.length = 0;
    pendingSource = null;
    if (!connectModeActive) setConnectMode(false);
    updateParamConnectionsList();
    redrawParamLines();
}

function serializeState() {
    const blocks = [];
    for (let rect of rectangles.values()) {
        const rectEl = rect.element;
        const blockData = {
            id: rect.id,
            formulaEq: rect.formulaEq || (rect.isCustom ? 'out = in ? coeff' : ''),
            formulaName: rect.formulaName,
            vars: rect.vars,
            left: Number.parseFloat(rectEl.style.left),
            top: Number.parseFloat(rectEl.style.top),
            targetVar: rect.targetVar,
            manualValues: rect.manualValues
        };
        if (rect.isCustom) {
            blockData.isCustom = true;
            blockData.operation = rect.operation;
        }
        blocks.push(blockData);
    }
    return {
        version: "1.0",
        blocks: blocks,
        paramConnections: paramConnections,
        nextRectId: nextRectId
    };
}

function deserializeState(state) {
    if (!state || !state.blocks || !state.paramConnections) {
        alert("Неверный формат файла");
        return false;
    }
    
    // Очищаем текущую сцену
    clearWorkspace();
    
    // Восстанавливаем счётчик ID
    nextRectId = state.nextRectId || 1000;
    
    // Сначала создаём все блоки (без связей, т.к. связи будут добавлены позже)
    for (let block of state.blocks) {
        if (block.isCustom) {
            createCustomBlock(
                block.left,
                block.top,
                block.id,
                block.operation || '+',
                block.manualValues?.coeff || ''
            );
            // Восстанавливаем ручное значение in, если оно есть (уже внутри createCustomBlock через manualValues)
            const rect = rectangles.get(block.id);
            if (rect && block.manualValues) {
                rect.manualValues = { ...block.manualValues };
                const inInput = rect.element.querySelector(`#inInput-${block.id}`);
                if (inInput) inInput.value = rect.manualValues.in || '';
                const coeffInput = rect.element.querySelector(`#coeffInput-${block.id}`);
                if (coeffInput) coeffInput.value = rect.manualValues.coeff || '';
            }
        } else {
            createFormulaBlock(
                block.formulaEq,
                block.formulaName,
                block.vars,
                block.left,
                block.top,
                block.id,
                block.targetVar,
                block.manualValues
            );
        }
    }
    
    // Восстанавливаем связи
    for (let conn of state.paramConnections) {
        // Проверяем, что оба блока существуют
        if (rectangles.has(conn.sourceRectId) && rectangles.has(conn.targetRectId)) {
            paramConnections.push({ ...conn });
            // Обновляем отображение связанного параметра в целевом блоке
            const targetRect = rectangles.get(conn.targetRectId);
            if (targetRect) rebuildParamsList(targetRect);
        } else {
            console.warn("Пропущена связь из-за отсутствия блока", conn);
        }
    }
    
    // Обновляем UI списка связей и перерисовываем линии
    updateParamConnectionsList();
    redrawParamLines();
    
    // Пересчитываем все значения, чтобы обновить вычисленные поля
    computeAll();
    
    return true;
}

function saveToFile() {
    const state = serializeState();
    const jsonStr = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "formula_workspace.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadFromFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const state = JSON.parse(ev.target.result);
                deserializeState(state);
            } catch (err) {
                alert("Ошибка при разборе файла: " + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function showHelp() {
    let title = 'Руководство пользователя';
    let content = `<p>Добро пожаловать в <strong>Конструктор формул</strong> – интерактивную среду для сборки и вычисления физических формул.</p>

    <h3>1. Добавление формул</h3>
    <ul>
        <li>Слева находится <strong>библиотека формул</strong>, разбитая по разделам (Механика, Термодинамика, Электродинамика и т.д.).</li>
        <li>Перетащите нужную формулу мышкой на серое рабочее поле – появится карточка с параметрами.</li>
        <li>Каждая карточка содержит:
            <ul>
                <li>саму формулу (например, <code>F = m·a</code>);</li>
                <li>список входных параметров (синие кружки);</li>
                <li>выходной параметр (оранжевый кружок) – вычисляемый параметр.</li>
            </ul>
        </li>
    </ul>

    <h3>2. Перемещение и удаление блоков</h3>
    <ul>
        <li><strong>Перетаскивание:</strong> зажмите левую кнопку мыши на свободной области карточки (не на кружках и не на полях ввода) и двигайте.</li>
        <li><strong>Удаление:</strong> нажмите крестик (X) в правом верхнем углу карточки.</li>
    </ul>

    <h3>3. Связывание параметров (передача данных между блоками)</h3>
    <ul>
        <li>Включите режим связывания кнопкой <strong>«Режим связи»</strong> на панели инструментов:
        <ul>
            <li><strong>(ON)</strong> - режим связывания ВКЛЮЧЕН;</li>
            <li><strong>(OFF)</strong> - режим связывания ВЫКЛЮЧЕН.</li>
        </ul>
        </li>
        <li>Сначала кликните на <strong>оранжевый кружок</strong> (выходной параметр) в одном блоке.</li>
        <li>Затем кликните на <strong>синий кружок</strong> (входной параметр) в другом блоке.</li>
        <li>Между блоками появится пунктирная линия со стрелкой – значение из выходного параметра будет автоматически передаваться во входной.</li>
        <li><strong>Важно:</strong> связывать можно только <em>одноимённые параметры</em> (например, <code>F</code> → <code>F</code>).</li>
        <li>Все созданные связи отображаются в нижней панели «Активные связи параметров». Там их можно удалять по отдельности или все сразу кнопкой «удалить все».</li>
        <li>Чтобы выйти из режима связи, нажмите кнопку «Режим связи» вновь.</li>
    </ul>

    <h3>4. Ввод чисел</h3>
    <ul>
        <li>У каждого входного параметра есть поле ввода. Введите туда числовое значение (можно дробное, разделитель – точка).</li>
        <li>Если параметр связан с другим блоком, его поле становится неактивным и отображает переданное значение.</li>
    </ul>

    <h3>5. Смена целевой переменной (что вычисляем)</h3>
    <ul>
        <li>По умолчанию формула решается относительно первого параметра (например, в <code>F = m·a</code> вычисляется <code>F</code>).</li>
        <li>Кликните по области с названием выходного параметра (серая зона) – целевая переменная будет циклически переключаться на следующий параметр из формулы.</li>
        <li>Соответственно, поля ввода для остальных параметров станут доступными, а выходной параметр изменится.</li>
    </ul>

    <h3>6. Вычисление</h3>
    <ul>
        <li>После того как все необходимые входные данные заданы (вручную или через связи), нажмите кнопку <strong>«ВЫЧИСЛИТЬ»</strong>.</li>
        <li>Программа автоматически решит уравнения, если входные данные вписаны или связаны.</li>
        <li>Результат появится в серой зоне (рядом с выходным параметром) и будет передан во все связанные блоки.</li>
        <li>Если данных недостаточно или решение не найдено, то в значении параметра отобразится знак вопроса: «?».</li>
    </ul>

    <h3>7. Сохранение и загрузка проекта</h3>
    <ul>
        <li>Кнопка <strong>«СОХРАНИТЬ»</strong> – средствами браузера скачивает в "Загрузки" JSON-файл с полным состоянием: все блоки, их позиции, связи и введённые числа.</li>
        <li>Кнопка <strong>«ЗАГРУЗИТЬ»</strong> – позволяет выбрать ранее сохранённый файл и восстановить рабочую область.</li>
    </ul>

    <h3>8. Советы</h3>
    <ul>
        <li>Если блок не вычисляется – проверьте, что все входные параметры имеют числовые значения (или связаны с вычисленными блоками).</li>
        <li>Для сложных систем блоков вычисления могут потребовать нескольких итераций – просто нажмите «ВЫЧИСЛИТЬ» повторно.</li>
    </ul>
`;

// Удаляем уже существующее окно, если оно есть
    const existingModal = document.getElementById('infoModal');
    if (existingModal) existingModal.remove();

    // Создаём контейнер затемнения
    const overlay = document.createElement('div');
    overlay.id = 'infoModal';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(1px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
    `;

    // Создаём окно
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #fffef7;
        border-radius: 32px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 35px rgba(0,0,0,0.2);
        border: 2px solid #f59e0b;
        display: flex;
        flex-direction: column;
    `;

    // Заголовок
    const header = document.createElement('div');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        border-bottom: 1px solid #e2e8f0;
        font-weight: bold;
        font-size: 1.2rem;
        background: #fef3c7;
        border-radius: 30px 30px 0 0;
    `;
    header.innerHTML = `<span>${escapeHtml(title)}</span><span style="cursor:pointer; font-size:24px;" id="closeInfoBtn">&times;</span>`;

    // Тело окна
    const body = document.createElement('div');
    body.style.cssText = `
        padding: 20px;
        line-height: 1.5;
        color: #1e293b;
        font-size: 0.95rem;
    `;

    // Добавляем содержимое
    if (typeof content === 'string') {
        body.innerHTML = content;
    } else if (content instanceof HTMLElement) {
        body.appendChild(content);
    }

    modal.appendChild(header);
    modal.appendChild(body);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Функция закрытия
    const closeModal = () => overlay.remove();

    // Закрытие по крестику
    const closeBtn = document.getElementById('closeInfoBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Закрытие по клику на фон
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Закрытие по Escape
    const keyHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', keyHandler);
        }
    };
    document.addEventListener('keydown', keyHandler);
}


saveBtn.addEventListener('click', () => saveToFile());
loadBtn.addEventListener('click', () => loadFromFile());
connModeBtn.addEventListener('click', () => setConnectMode(!connectModeActive));
helpBtn.addEventListener('click', () => showHelp() );
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