//--- БАЗА ФОРМУЛ ---
const formulasLibrary = [
    // ==================== Дополнительно ====================
    { name: "Арифметический оператор", eq: "out = in + coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in - coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in * coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },
    { name: "Арифметический оператор", eq: "out = in / coeff", vars: ["out", "in", "coeff"], category: "Дополнительно" },


    // ==================== МЕХАНИКА ====================
    { name: "Давление", eq: "P = F/S", vars: ["P", "F", "S"], category: "Механика" },
    { name: "Плотность", eq: "ρ = m/V", vars: ["ρ", "m", "V"], category: "Механика" },
    { name: "Давление жидкости", eq: "P = ρ*g*h", vars: ["P", "ρ", "g", "h"], category: "Механика" },
    { name: "Сила тяжести", eq: "Fт = m*g", vars: ["Fт", "m", "g"], category: "Механика" },
    { name: "Архимедова сила", eq: "Fₐ = ρж*g*Vт", vars: ["Fₐ", "ρж", "g", "Vт"], category: "Механика" },
    { name: "II закон Ньютона", eq: "F = m*a", vars: ["F", "m", "a"], category: "Механика" },
    { name: "Закон Гука", eq: "Fy = -k*x", vars: ["Fy", "k", "x"], category: "Механика" },
    { name: "Кинетическая энергия", eq: "Ek = m*υ^2/2", vars: ["Ek", "m", "υ"], category: "Механика" },
    { name: "Работа", eq: "A = F*S*cos(α)", vars: ["A", "F", "S", "α"], category: "Механика" },
    { name: "Мощность", eq: "N = A/t", vars: ["N", "A", "t"], category: "Механика" },
    { name: "Координата при равноускоренном движении", eq: "X = X0 + υ0*t + (a*t^2)/2", vars: ["X", "X0", "υ0", "t", "a"], category: "Механика" },
    { name: "Перемещение при равноускоренном движении (без времени)", eq: "S = (υ2^2 - υ0^2)/(2*a)", vars: ["S", "υ2", "υ0", "a"], category: "Механика" },
    { name: "Перемещение при равноускоренном движении (средняя скорость)", eq: "S = (υ + υ0)*t/2", vars: ["S", "υ", "υ0", "t"], category: "Механика" },
    { name: "Уравнение скорости при равноускоренном движении", eq: "υ = υ0 + a*t", vars: ["υ", "υ0", "a", "t"], category: "Механика" },
    { name: "Ускорение", eq: "a = (υ - υ0)/t", vars: ["a", "υ", "υ0", "t"], category: "Механика" },
    { name: "Скорость при движении по окружности", eq: "υ = 2*π*R/T", vars: ["υ", "R", "T"], category: "Механика" },
    { name: "Центростремительное ускорение", eq: "a = υ^2/R", vars: ["a", "υ", "R"], category: "Механика" },
    { name: "Частота через период", eq: "ν = 1/T", vars: ["ν", "T"], category: "Механика" },
    { name: "Частота через циклическую частоту", eq: "ν = ω/(2*π)", vars: ["ν", "ω"], category: "Механика" },
    { name: "Циклическая частота через частоту", eq: "ω = 2*π*ν", vars: ["ω", "ν"], category: "Механика" },
    { name: "Закон Всемирного тяготения", eq: "F = G*M*m/R^2", vars: ["F", "G", "M", "m", "R"], category: "Механика" },
    { name: "Вес тела при движении вверх с ускорением", eq: "P = m*(g + a)", vars: ["P", "m", "g", "a"], category: "Механика" },
    { name: "Вес тела при движении вниз с ускорением", eq: "P = m*(g - a)", vars: ["P", "m", "g", "a"], category: "Механика" },
    { name: "Сила трения", eq: "Fтр = μ*N", vars: ["Fтр", "μ", "N"], category: "Механика" },
    { name: "Импульс тела", eq: "p = m*υ", vars: ["p", "m", "υ"], category: "Механика" },
    { name: "Импульс силы", eq: "Δp = F*t", vars: ["Δp", "F", "t"], category: "Механика" },
    { name: "Момент силы", eq: "M = F*ℓ", vars: ["M", "F", "ℓ"], category: "Механика" },
    { name: "Потенциальная энергия тела, поднятого над землей", eq: "Eп = m*g*h", vars: ["Eп", "m", "g", "h"], category: "Механика" },
    { name: "Потенциальная энергия упруго деформированного тела", eq: "Eп = k*x^2/2", vars: ["Eп", "k", "x"], category: "Механика" },
    { name: "Мощность через силу и скорость", eq: "N = F*υ", vars: ["N", "F", "υ"], category: "Механика" },
    { name: "Коэффициент полезного действия", eq: "η = Aп/Aз", vars: ["η", "Aп", "Aз"], category: "Механика" },

    // ==================== МОЛЕКУЛЯРНАЯ ФИЗИКА И ТЕРМОДИНАМИКА ====================
    { name: "Количество вещества", eq: "ν = N/Na", vars: ["ν", "N", "Na"], category: "Молекулярная физика" },
    { name: "Молярная масса", eq: "M = m/ν", vars: ["M", "m", "ν"], category: "Молекулярная физика" },
    { name: "Средняя кинетическая энергия молекул одноатомного газа", eq: "Ek = (3/2)*k*T", vars: ["Ek", "k", "T"], category: "Молекулярная физика" },
    { name: "Давление газа через концентрацию и температуру", eq: "P = n*k*T", vars: ["P", "n", "k", "T"], category: "Молекулярная физика" },
    { name: "Давление газа через концентрацию, массу молекулы и скорость", eq: "P = (1/3)*n*m0*υ^2", vars: ["P", "n", "m0", "υ"], category: "Молекулярная физика" },
    { name: "Закон Гей-Люссака (изобарный процесс)", eq: "V2 = V1*T2/T1", vars: ["V2", "V1", "T2", "T1"], category: "Молекулярная физика" },
    { name: "Закон Шарля (изохорный процесс)", eq: "P2 = P1*T2/T1", vars: ["P2", "P1", "T2", "T1"], category: "Молекулярная физика" },
    { name: "Относительная влажность", eq: "φ = P/P0", vars: ["φ", "P", "P0"], category: "Молекулярная физика" },
    { name: "Внутренняя энергия идеального одноатомного газа", eq: "U = (3/2)*(M/µ)*R*T", vars: ["U", "M", "µ", "R", "T"], category: "Молекулярная физика" },
    { name: "Работа газа", eq: "A = P*ΔV", vars: ["A", "P", "ΔV"], category: "Молекулярная физика" },
    { name: "Закон Бойля-Мариотта (изотермический процесс)", eq: "P2 = P1*V1/V2", vars: ["P2", "P1", "V1", "V2"], category: "Молекулярная физика" },
    { name: "Количество теплоты при нагревании", eq: "Q = C*m*(T2 - T1)", vars: ["Q", "C", "m", "T2", "T1"], category: "Молекулярная физика" },
    { name: "Количество теплоты при плавлении", eq: "Q = λ*m", vars: ["Q", "λ", "m"], category: "Молекулярная физика" },
    { name: "Количество теплоты при парообразовании", eq: "Q = L*m", vars: ["Q", "L", "m"], category: "Молекулярная физика" },
    { name: "Количество теплоты при сгорании топлива", eq: "Q = q*m", vars: ["Q", "q", "m"], category: "Молекулярная физика" },
    { name: "Уравнение состояния идеального газа", eq: "P*V = (m/M)*R*T", vars: ["P", "V", "m", "M", "R", "T"], category: "Молекулярная физика" },
    { name: "Первый закон термодинамики", eq: "ΔU = A + Q", vars: ["ΔU", "A", "Q"], category: "Молекулярная физика" },
    { name: "КПД тепловых двигателей", eq: "η = (Q1 - Q2)/Q1", vars: ["η", "Q1", "Q2"], category: "Молекулярная физика" },
    { name: "КПД идеального двигателя (цикл Карно)", eq: "η = (T1 - T2)/T1", vars: ["η", "T1", "T2"], category: "Молекулярная физика" },

    // ==================== ЭЛЕКТРОДИНАМИКА ====================
    { name: "Закон Ома", eq: "I = U/R", vars: ["I", "U", "R"], category: "Электродинамика" },
    { name: "Закон Кулона", eq: "F = k*q1*q2/R^2", vars: ["F", "k", "q1", "q2", "R"], category: "Электродинамика" },
    { name: "Напряженность электрического поля", eq: "E = F/q", vars: ["E", "F", "q"], category: "Электродинамика" },
    { name: "Напряженность поля точечного заряда", eq: "E = k*q/R^2", vars: ["E", "k", "q", "R"], category: "Электродинамика" },
    { name: "Поверхностная плотность зарядов", eq: "σ = q/S", vars: ["σ", "q", "S"], category: "Электродинамика" },
    { name: "Напряженность поля бесконечной плоскости", eq: "E = 2*π*k*σ", vars: ["E", "k", "σ"], category: "Электродинамика" },
    { name: "Диэлектрическая проницаемость", eq: "ε = E0/E", vars: ["ε", "E0", "E"], category: "Электродинамика" },
    { name: "Потенциальная энергия взаимодействия зарядов", eq: "W = k*q1*q2/R", vars: ["W", "k", "q1", "q2", "R"], category: "Электродинамика" },
    { name: "Потенциал", eq: "φ = W/q", vars: ["φ", "W", "q"], category: "Электродинамика" },
    { name: "Потенциал точечного заряда", eq: "φ = k*q/R", vars: ["φ", "k", "q", "R"], category: "Электродинамика" },
    { name: "Напряжение", eq: "U = A/q", vars: ["U", "A", "q"], category: "Электродинамика" },
    { name: "Для однородного электрического поля", eq: "U = E*d", vars: ["U", "E", "d"], category: "Электродинамика" },
    { name: "Электроемкость", eq: "C = q/U", vars: ["C", "q", "U"], category: "Электродинамика" },
    { name: "Электроемкость плоского конденсатора", eq: "C = S*ε*ε0/d", vars: ["C", "S", "ε", "ε0", "d"], category: "Электродинамика" },
    { name: "Энергия заряженного конденсатора", eq: "W = C*U^2/2", vars: ["W", "C", "U"], category: "Электродинамика" },
    { name: "Сила тока", eq: "I = q/t", vars: ["I", "q", "t"], category: "Электродинамика" },
    { name: "Сопротивление проводника", eq: "R = ρ*ℓ/S", vars: ["R", "ρ", "ℓ", "S"], category: "Электродинамика" },
    { name: "Общее сопротивление при последовательном соединении", eq: "R = R1 + R2", vars: ["R", "R1", "R2"], category: "Электродинамика" },
    { name: "Общее напряжение при последовательном соединении", eq: "U = U1 + U2", vars: ["U", "U1", "U2"], category: "Электродинамика" },
    { name: "Сила тока при последовательном соединении", eq: "I1 = I2", vars: ["I1", "I2"], category: "Электродинамика" },
    { name: "Общее сопротивление при параллельном соединении", eq: "R = 1/(1/R1 + 1/R2)", vars: ["R", "R1", "R2"], category: "Электродинамика" },
    { name: "Напряжение при параллельном соединении", eq: "U1 = U2", vars: ["U1", "U2"], category: "Электродинамика" },
    { name: "Сила тока при параллельном соединении", eq: "I = I1 + I2", vars: ["I", "I1", "I2"], category: "Электродинамика" },
    { name: "Мощность электрического тока", eq: "P = I*U", vars: ["P", "I", "U"], category: "Электродинамика" },
    { name: "Закон Джоуля-Ленца", eq: "Q = I^2*R*t", vars: ["Q", "I", "R", "t"], category: "Электродинамика" },
    { name: "Закон Ома для полной цепи", eq: "I = ε/(R + r)", vars: ["I", "ε", "R", "r"], category: "Электродинамика" },
    { name: "Ток короткого замыкания", eq: "I = ε/r", vars: ["I", "ε", "r"], category: "Электродинамика" },
    { name: "Вектор магнитной индукции", eq: "B = Fmax/(I*ℓ)", vars: ["B", "Fmax", "I", "ℓ"], category: "Электродинамика" },
    { name: "Сила Ампера", eq: "Fa = I*B*ℓ*sin(α)", vars: ["Fa", "I", "B", "ℓ", "α"], category: "Электродинамика" },
    { name: "Сила Лоренца", eq: "Fл = B*q*υ*sin(α)", vars: ["Fл", "B", "q", "υ", "α"], category: "Электродинамика" },
    { name: "Магнитный поток", eq: "Ф = B*S*cos(α)", vars: ["Ф", "B", "S", "α"], category: "Электродинамика" },
    { name: "Магнитный поток через индуктивность", eq: "Ф = L*I", vars: ["Ф", "L", "I"], category: "Электродинамика" },
    { name: "Закон электромагнитной индукции", eq: "Ei = ΔФ/Δt", vars: ["Ei", "ΔФ", "Δt"], category: "Электродинамика" },
    { name: "ЭДС индукции в движущемся проводнике", eq: "Ei = B*ℓ*υ*sin(α)", vars: ["Ei", "B", "ℓ", "υ", "α"], category: "Электродинамика" },
    { name: "ЭДС самоиндукции", eq: "Esi = -L*ΔI/Δt", vars: ["Esi", "L", "ΔI", "Δt"], category: "Электродинамика" },
    { name: "Энергия магнитного поля катушки", eq: "Wм = L*I^2/2", vars: ["Wм", "L", "I"], category: "Электродинамика" },

    // ==================== КОЛЕБАНИЯ И ВОЛНЫ ====================
    { name: "Период колебаний математического маятника", eq: "T = 2*π*√(ℓ/g)", vars: ["T", "ℓ", "g"], category: "Колебания и волны" },
    { name: "Период колебаний пружинного маятника", eq: "T = 2*π*√(m/k)", vars: ["T", "m", "k"], category: "Колебания и волны" },
    { name: "Уравнение гармонических колебаний", eq: "X = Xmax*cos(ω*t)", vars: ["X", "Xmax", "ω", "t"], category: "Колебания и волны" },
    { name: "Связь длины волны, скорости и периода", eq: "λ = υ*T", vars: ["λ", "υ", "T"], category: "Колебания и волны" },
    { name: "Период колебаний колебательного контура", eq: "T = 2*π*√(L*C)", vars: ["T", "L", "C"], category: "Колебания и волны" },
    { name: "Индуктивное сопротивление", eq: "XL = 2*π*L*ν", vars: ["XL", "L", "ν"], category: "Колебания и волны" },
    { name: "Емкостное сопротивление", eq: "Xc = 1/(2*π*ν*C)", vars: ["Xc", "ν", "C"], category: "Колебания и волны" },
    { name: "Действующее значение силы тока", eq: "Iд = Imax/√(2)", vars: ["Iд", "Imax"], category: "Колебания и волны" },
    { name: "Действующее значение напряжения", eq: "Uд = Umax/√(2)", vars: ["Uд", "Umax"], category: "Колебания и волны" },
    { name: "Полное сопротивление", eq: "Z = √((Xc - XL)^2 + R^2)", vars: ["Z", "Xc", "XL", "R"], category: "Колебания и волны" },

    // ==================== ОПТИКА ====================
    { name: "Закон преломления света", eq: "n21 = n2/n1", vars: ["n21", "n2", "n1"], category: "Оптика" },
    { name: "Показатель преломления", eq: "n21 = sin(α)/sin(γ)", vars: ["n21", "α", "γ"], category: "Оптика" },
    { name: "Формула тонкой линзы", eq: "1/F = 1/d + 1/f", vars: ["F", "d", "f"], category: "Оптика" },
    { name: "Оптическая сила линзы", eq: "D = 1/F", vars: ["D", "F"], category: "Оптика" },
    { name: "Максимум интерференции", eq: "Δd = k*λ", vars: ["Δd", "k", "λ"], category: "Оптика" },
    { name: "Минимум интерференции", eq: "Δd = (2k+1)*λ/2", vars: ["Δd", "k", "λ"], category: "Оптика" },
    { name: "Дифракционная решетка", eq: "d*sin(φ) = k*λ", vars: ["d", "φ", "k", "λ"], category: "Оптика" },

    // ==================== КВАНТОВАЯ ФИЗИКА ====================
    { name: "Формула Эйнштейна для фотоэффекта", eq: "h*ν = Aвых + Ek", vars: ["h", "ν", "Aвых", "Ek"], category: "Квантовая физика" },
    { name: "Красная граница фотоэффекта", eq: "νк = Aвых/h", vars: ["νк", "Aвых", "h"], category: "Квантовая физика" },
    { name: "Импульс фотона (через длину волны)", eq: "P = h/λ", vars: ["P", "h", "λ"], category: "Квантовая физика" },
    { name: "Импульс фотона (через энергию)", eq: "P = E/c", vars: ["P", "E", "c"], category: "Квантовая физика" },
    { name: "Закон радиоактивного распада", eq: "N = N0*2^(-t/T)", vars: ["N", "N0", "t", "T"], category: "Квантовая физика" },
    { name: "Энергия связи атомных ядер", eq: "Eсв = (Z*mp + N*mn - Mя)*c^2", vars: ["Eсв", "Z", "mp", "N", "mn", "Mя", "c"], category: "Квантовая физика" },

    // ==================== СПЕЦИАЛЬНАЯ ТЕОРИЯ ОТНОСИТЕЛЬНОСТИ ====================
    { name: "Релятивистское замедление времени", eq: "t = t1/√(1 - υ^2/c^2)", vars: ["t", "t1", "υ", "c"], category: "СТО" },
    { name: "Релятивистское сокращение длины", eq: "ℓ = ℓ0*√(1 - υ^2/c^2)", vars: ["ℓ", "ℓ0", "υ", "c"], category: "СТО" },
    { name: "Релятивистское сложение скоростей", eq: "υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)", vars: ["υ2", "υ1", "υ", "c"], category: "СТО" },
    { name: "Эквивалентность массы и энергии", eq: "E = m*c^2", vars: ["E", "m", "c"], category: "СТО" }
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

let graphBlocks = new Map();
let graphModeActive = false;        // активен ли режим выбора параметров для графика
let selectingStart = false;         // ожидание выбора начального параметра
let selectingEnd = false;           // ожидание выбора конечного параметра
let graphStartParam = null;         // выбранный начальный параметр { rectId, paramName, isOutput }
let graphEndParam = null;           // выбранный конечный параметр

let current = 0;
let tokensLocal = [];

const graphArea = document.getElementById('graphArea');
const rectLayer = document.getElementById('rectLayer');
const svg = document.getElementById('linesSvg');
const graphLayer = document.getElementById('graphLayer');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const connModeBtn = document.getElementById('connModeBtn');
const helpBtn = document.getElementById('helpBtn');
const graphBtn = document.getElementById('graphBtn');
const computeBtn = document.getElementById('computeBtn');
const modeStatusSpan = document.getElementById('modeStatus');
const paramConnListDiv = document.getElementById('paramConnList');
const clearAllParamsConnBtn = document.getElementById('clearAllParamsConn');
const clearAllBtn = document.getElementById('clearAll');

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
    if (targetRect)
        rebuildParamsList(targetRect);
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
    if (paramConnections.some(c => c.targetRectId === targetRectId && c.targetParam === targetParam)) {
        alert("Входной параметр уже связан!");
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
    // Замена квадрата
    expr = expr.replaceAll('^2', '**2');
    // Замена тригонометрических функций
    expr = expr.replaceAll('cos', 'Math.cos');
    expr = expr.replaceAll('sin', 'Math.sin');
    // Константы
    expr = expr.replaceAll('π', 'Math.PI');
    expr = expr.replaceAll('pi', 'Math.PI');
    expr = expr.replaceAll('√', 'Math.sqrt');
    expr = expr.replaceAll('log', 'Math.log10'); // или Math.log
    
    // Обработка степени (с поддержкой любых идентификаторов)
    const identPattern = '[\\p{L}\\p{N}_]+';
    const powerParenRegex = new RegExp(`(${identPattern})\\^\\(([^()]+)\\)`, 'gu');
    expr = expr.replace(powerParenRegex, 'Math.pow($1,$2)');
    const powerIdentRegex = new RegExp(`(${identPattern})\\^(${identPattern})`, 'gu');
    expr = expr.replace(powerIdentRegex, 'Math.pow($1,$2)');
    const powerNumberRegex = new RegExp(`(${identPattern})\\^(\\d+(?:\\.\\d+)?)`, 'gu');
    expr = expr.replace(powerNumberRegex, 'Math.pow($1,$2)');
    
    return expr;
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
    // Функция невязки: f(x) = левая_часть - правая_часть
    function residual(x) {
        const env = {};
        let [left, right] = eq.split('=').map(s => s.trim());
        if (!right) return NaN;
        left = normalizeExpression(left);
        right = normalizeExpression(right);
        const exprStr = `(${left}) - (${right})`;
        for (let v of vars) {
            env[v] = (v === targetVar) ? x : knownValues[v];
        }
        for (let v of vars) {
            if (env[v] === undefined || isNaN(env[v])) return NaN;
        }
        try {
            const fn = new Function(...vars, `return ${exprStr};`);
            return fn(...vars.map(v => env[v]));
        } catch(e) {
            return NaN;
        }
    }

    const EPS = 1e-12;
    const MAX_ITER = 80;
    const SMALL = 1e-9;
    const MAX_HIGH = 1e6;  // максимальное значение для поиска интервала

    // ---- Поиск интервала [a, b] с разными знаками ----
    let a = null, b = null;

    // 1. Поиск в положительной области (x > 0)
    let low = SMALL;
    let high = 1.0;
    let f_low = residual(low);
    let f_high = residual(high);
    // Если на low или high NaN, пробуем сдвинуть
    while (isNaN(f_low) && low < MAX_HIGH) {
        low += SMALL;
        f_low = residual(low);
    }
    while (isNaN(f_high) && high < MAX_HIGH) {
        high += SMALL;
        f_high = residual(high);
    }
    if (!isNaN(f_low) && !isNaN(f_high)) {
        // Расширяем high, пока не будет смены знака или не превысим лимит
        while (f_low * f_high >= 0 && high < MAX_HIGH) {
            high *= 2;
            f_high = residual(high);
            while (isNaN(f_high) && high < MAX_HIGH) {
                high += SMALL;
                f_high = residual(high);
            }
        }
        if (f_low * f_high < 0) {
            a = low;
            b = high;
        } else if (Math.abs(f_low) < EPS) {
            return low;
        } else if (Math.abs(f_high) < EPS) {
            return high;
        }
    }

    // 2. Если не нашли, поиск в отрицательной области (x < 0)
    if (a === null) {
        let low_neg = -MAX_HIGH;
        let high_neg = -SMALL;
        let f_low_neg = residual(low_neg);
        let f_high_neg = residual(high_neg);
        while (isNaN(f_low_neg) && low_neg > -MAX_HIGH) {
            low_neg -= SMALL;
            f_low_neg = residual(low_neg);
        }
        while (isNaN(f_high_neg) && high_neg > -MAX_HIGH) {
            high_neg -= SMALL;
            f_high_neg = residual(high_neg);
        }
        if (!isNaN(f_low_neg) && !isNaN(f_high_neg)) {
            // Расширяем low_neg вниз (увеличиваем по модулю)
            while (f_low_neg * f_high_neg >= 0 && low_neg > -MAX_HIGH) {
                low_neg *= 2;
                f_low_neg = residual(low_neg);
                while (isNaN(f_low_neg) && low_neg > -MAX_HIGH) {
                    low_neg -= SMALL;
                    f_low_neg = residual(low_neg);
                }
            }
            if (f_low_neg * f_high_neg < 0) {
                a = low_neg;
                b = high_neg;
            } else if (Math.abs(f_low_neg) < EPS) {
                return low_neg;
            } else if (Math.abs(f_high_neg) < EPS) {
                return high_neg;
            }
        }
    }

    // 3. Если не нашли, пробуем старый симметричный метод с защитой от NaN
    if (a === null) {
        let step = 1.0;
        let found = false;
        for (let i = 0; i < 50; i++) {
            let left = -step;
            let right = step;
            let f_left = residual(left);
            let f_right = residual(right);
            if (isNaN(f_left)) {
                left += SMALL;
                f_left = residual(left);
            }
            if (isNaN(f_right)) {
                right -= SMALL;
                f_right = residual(right);
            }
            if (!isNaN(f_left) && !isNaN(f_right) && f_left * f_right < 0) {
                a = left;
                b = right;
                found = true;
                break;
            }
            step *= 2;
        }
        if (!found) return null;
    }

    // Убеждаемся, что a < b
    if (a > b) { let t = a; a = b; b = t; }

    // ---- Метод бисекции на интервале [a, b] ----
    let root = null;
    for (let iter = 0; iter < MAX_ITER; iter++) {
        const mid = (a + b) / 2;
        const fm = residual(mid);
        if (Math.abs(fm) < EPS) {
            root = mid;
            break;
        }
        if (isNaN(fm)) {
            a = mid + SMALL;
            continue;
        }
        const fa = residual(a);
        if (fa * fm < 0) {
            b = mid;
        } else {
            a = mid;
        }
    }
    if (root === null) root = (a + b) / 2;

    // Коррекция знака: предпочитаем положительный корень, если он есть
    if (root < 0) {
        const posRoot = -root;
        const resPos = residual(posRoot);
        const resNeg = residual(root);
        if (!isNaN(resPos) && Math.abs(resPos) <= Math.abs(resNeg) + EPS) {
            root = posRoot;
        }
    }

    return root;
}

// ---------- СОЗДАНИЕ БЛОКА ----------

/**
 * Создаёт новый блок формулы и добавляет его в область построения.
 * @param {string} formulaEq - Строковое представление формулы (например, "F = m*a").
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
            <div class="formula-text">
                <div class="fText">${escapeHtml(formulaEq)}</div>
            </div>
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
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteRectangle(rectId);
    });

    
    rectDiv.querySelectorAll('.port').forEach(port => {
        port.addEventListener('click', (e) => {
            e.stopPropagation();
            const param = port.dataset.param;
            handlePortClick(rectId, param, false);
        });
    });
    
    const targetPort = rectDiv.querySelector('.target-port');
    targetPort.addEventListener('click', (e) => {
        e.stopPropagation();
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
        handlePortClick(rectId, 'in', false);
    });

    const outPort = rectDiv.querySelector('.target-port');
    outPort.addEventListener('click', (e) => {
        e.stopPropagation();
        handlePortClick(rectId, 'out', true);
    });

    // Удаление
    const deleteBtn = rectDiv.querySelector('.delete-card');
    deleteBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteRectangle(rectId); });

    makeDraggable(rectDiv, rectId);
    return rectId;
}

/**
 * Создаёт блок с графиком на рабочем поле.
 * @param {Object} graphContext - { mode, analyticFn, startSpec, endSpec, xLabel, yLabel }
 * @returns {number} ID созданного блока
 */
function createGraphBlock(graphContext) {
    const blockId = nextRectId++;
    const blockDiv = document.createElement('div');
    blockDiv.className = 'formula-card graph-card';
    blockDiv.style.left = '100px';   // начальная позиция
    blockDiv.style.top = '100px';
    blockDiv.style.width = '500px';
    blockDiv.style.height = '500px';
    blockDiv.dataset.id = blockId;

    blockDiv.innerHTML = `
        <div class="card-header" style="cursor:move;">
            <span>График ${graphContext.yLabel}(${graphContext.xLabel})</span>
            <div class="delete-card" style="cursor:pointer;">✕</div>
        </div>
        <div class="graph-canvas-wrapper" overflow:hidden; position:relative;">
            <canvas style="width:100%; height:100%; display:block;"></canvas>
        </div>
    `;
    
    graphLayer.appendChild(blockDiv);

    const canvas = blockDiv.querySelector('canvas');
    const wrapper = blockDiv.querySelector('.graph-canvas-wrapper');

    // Состояние масштаба (начальное)
    const state = {
        points: generateInitialPoints(graphContext, 2000),
        xMin: -50,
        xMax: 50,
        yMin: -50,
        yMax: 50
    };

    // Сохраняем данные блока
    const blockData = {
        id: blockId,
        element: blockDiv,
        canvas,
        wrapper,
        graphContext,
        state,
        observer: null
    };
    graphBlocks.set(blockId, blockData);

    // Функция перерисовки
    const redraw = () => drawGraphInBlock(blockData);

    // Подгонка размеров canvas при изменении размера wrapper
    const resizeObserver = new ResizeObserver(() => {
        const w = wrapper.clientWidth;
        const h = wrapper.clientHeight;
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
        }
        redraw();
    });
    resizeObserver.observe(wrapper);
    blockData.observer = resizeObserver;

    // ---- 1. Прокрутка правой кнопкой мыши (панорамирование) ----
    let isPanning = false;
    let panStartX = 0, panStartY = 0;
    let panStartXMin = 0, panStartXMax = 0;
    let panStartYMin = 0, panStartYMax = 0;

    // Отключаем браузерное контекстное меню на канвасе
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // Начало панорамирования (правая кнопка)
    canvas.addEventListener('mousedown', (e) => {
        if (e.button === 1) // средняя кнопка
            e.preventDefault();
        else
            return;
        isPanning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        panStartXMin = state.xMin;
        panStartXMax = state.xMax;
        panStartYMin = state.yMin;
        panStartYMax = state.yMax;
    });

    // Движение мыши при панорамировании
    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        const dx = e.clientX - panStartX;
        const dy = e.clientY - panStartY;

        const rangeX = panStartXMax - panStartXMin;
        const rangeY = panStartYMax - panStartYMin;

        // Перевод смещения пикселей в единицы графика
        const scaleX = rangeX / canvas.clientWidth;
        const scaleY = rangeY / canvas.clientHeight;

        let newXMin = panStartXMin - dx * scaleX;
        let newXMax = panStartXMax - dx * scaleX;
        let newYMin = panStartYMin + dy * scaleY;   // ось Y перевёрнута в canvas
        let newYMax = panStartYMax + dy * scaleY;

        // Ограничение: не выходить за -100..100
        // Сдвигаем второй край, чтобы сохранить диапазон при упоре в ограничение
        if (newXMin < -100) {
            const shift = -100 - newXMin;
            newXMin = -100;
            newXMax += shift;
        }
        if (newXMax > 100) {
            const shift = newXMax - 100;
            newXMax = 100;
            newXMin -= shift;
        }
        if (newYMin < -100) {
            const shift = -100 - newYMin;
            newYMin = -100;
            newYMax += shift;
        }
        if (newYMax > 100) {
            const shift = newYMax - 100;
            newYMax = 100;
            newYMin -= shift;
        }

        state.xMin = newXMin;
        state.xMax = newXMax;
        state.yMin = newYMin;
        state.yMax = newYMax;

        redraw();
    });

    // Отпускание правой кнопки (где угодно)
    window.addEventListener('mouseup', (e) => {
        if (e.button === 1) {
            isPanning = false;
            e.preventDefault();
        }
    });

    // ---- 2. Масштабирование колесом относительно курсора ----
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        const factor = delta < 0 ? 0.9 : 1.1;   // колесо вперёд (приближение)

        // Координаты мыши относительно canvas
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Паддинги, используемые при отрисовке графика
        const padding = { left: 50, right: 50, top: 50, bottom: 50 };
        const graphWidth = canvas.width - padding.left - padding.right;
        const graphHeight = canvas.height - padding.top - padding.bottom;

        // Перевод координат мыши в мировые (графические) координаты
        const centerX = state.xMin + ((mouseX - padding.left) / graphWidth) * (state.xMax - state.xMin);
        const centerY = state.yMin + ((graphHeight - (mouseY - padding.top)) / graphHeight) * (state.yMax - state.yMin);

        // Новые диапазоны после масштабирования
        let newXRange = (state.xMax - state.xMin) * factor;
        let newYRange = (state.yMax - state.yMin) * factor;

        // Сохраняем положение точки под курсором (масштабирование относительно неё)
        const ratioX = (centerX - state.xMin) / (state.xMax - state.xMin);
        const ratioY = (centerY - state.yMin) / (state.yMax - state.yMin);

        // Ограничения по осям: края не должны выходить за -100 и 100
        
        state.xMin = Math.max(-100, Math.min(-1, centerX - newXRange * ratioX));
        state.xMax = Math.min( 100, Math.max( 1, centerX + newXRange * (1 - ratioX)));
        state.yMin = Math.max(-100, Math.min(-1, centerY - newYRange * ratioY));
        state.yMax = Math.min( 100, Math.max( 1, centerY + newYRange * (1 - ratioY)));

        redraw();
    });

    // Удаление по крестику
    blockDiv.querySelector('.delete-card').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteGraphBlock(blockId);
    });

    // Перетаскивание блока (исключая canvas)
    makeGraphBlockDraggable(blockDiv);

    // Первая отрисовка
    setTimeout(redraw, 20);
    return blockId;
}


/**
 * Обрабатывает клик по порту (входному или выходному) в режиме соединения.
 * @param {number} rectId - ID блока.
 * @param {string} param - Имя параметра.
 * @param {boolean} isOutput - Является ли порт выходным.
 */
function handlePortClick(rectId, param, isOutput) {
    // Режим построения графика имеет приоритет
    if (graphModeActive) {
        if (selectingStart) {
            if (isOutput) {
                alert("Начальный параметр (X) должен быть входным (синий кружок)");
                return;
            }
            graphStartParam = { rectId, paramName: param, isOutput: false };
            selectingStart = false;
            selectingEnd = true;
            modeStatusSpan.innerText = 'Режим графика: выберите КОНЕЧНЫЙ параметр (любой кружок)';
        } else if (selectingEnd) {
            graphEndParam = { rectId, paramName: param, isOutput: isOutput };
            // Оба параметра выбраны – строим график
            buildGraph(graphStartParam, graphEndParam);
            deactivateGraphMode();
        }
        return;
    }
    
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
};

/**
 * Удаляет блок формулы и все связанные с ним соединения.
 * @param {number} rectId - ID удаляемого блока.
 */
function deleteRectangle(rectId) {
    const rect = rectangles.get(rectId);
    if (!rect) return;

    connectionForDelete = [];
    paramConnections.reverse().forEach((conn, idx) => {
        if (conn.sourceRectId === rectId || conn.targetRectId === rectId)
            removeParamConnection(idx);
    });
    rect.element.remove();
    rectangles.delete(rectId);

    for (let r of rectangles.values()){
        rebuildParamsList(r);
        updateParamConnectionsList();
        redrawParamLines();
    }
    paramConnections = paramConnections.filter(c => c.sourceRectId !== rectId && c.targetRectId !== rectId);
    if (pendingSource?.rectId === rectId) pendingSource = null;
    updateParamConnectionsList();
    redrawParamLines();
}

/**
 * Удаляет блок графика и освобождает ресурсы.
 * @param {number} blockId 
 */
function deleteGraphBlock(blockId) {
    const data = graphBlocks.get(blockId);
    if (!data) return;
    if (data.observer) data.observer.disconnect();
    data.element.remove();
    graphBlocks.delete(blockId);
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
 * Делает элемент перетаскиваемым, но игнорирует события на canvas (для зума).
 * @param {HTMLElement} element 
 */
function makeGraphBlockDraggable(element) {
    let dragging = false, startX, startY, startLeft, startTop;
    element.addEventListener('mousedown', (e) => {
        // Не начинаем перетаскивание при клике на canvas, кнопках удаления и т.п.
        if (e.target.closest('canvas') ||
            e.target.closest('.delete-card')) {
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
    }

    function onMouseUp() {
        dragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
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
            if (data.eq.includes('+')) {
                createCustomBlock(x, y, null, '+');
            } else if (data.eq.includes('-')) {
                createCustomBlock(x, y, null, '-');
            } else if (data.eq.includes('*')) {
                createCustomBlock(x, y, null, '*');
            } else if (data.eq.includes('/')) {
                createCustomBlock(x, y, null, '/');
            }
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
                "formulaEq": "F = m*a",
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
                "formulaEq": "P = ρ*g*h",
                "formulaName": "Давление жидкости",
                "vars": ["P", "ρ", "g", "h"],
                "left": 870.024,
                "top": 351.073,
                "targetVar": "ρ",
                "manualValues": { "ρ": "", "g": "", "h": "15" }
            },
            {
                "id": 1012,
                "formulaEq": "Fт = m*g",
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
    deactivateGraphMode();
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
                block.operation,
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
                <li>саму формулу (например, <code>F = m*a</code>);</li>
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
        <li><strong>Важно:</strong> выходной параметр может быть связан только с одним входом. Если параметр уже связан, связь нужно сначала удалить.</li>
        <li>Все созданные связи отображаются в нижней панели «Активные связи параметров». Там их можно удалять по отдельности или все сразу кнопкой «Удалить все».</li>
        <li>Чтобы выйти из режима связи, нажмите кнопку «Режим связи» вновь.</li>
    </ul>

    <h3>4. Ввод чисел</h3>
    <ul>
        <li>У каждого входного параметра есть поле ввода. Введите туда числовое значение (можно дробное, разделитель – точка).</li>
        <li>Если параметр связан с другим блоком, его поле становится неактивным и отображает переданное значение.</li>
    </ul>

    <h3>5. Смена целевой переменной (что вычисляем)</h3>
    <ul>
        <li>По умолчанию формула решается относительно первого параметра (например, в <code>F = m*a</code> вычисляется <code>F</code>).</li>
        <li>Кликните по области с названием выходного параметра (серая зона) – целевая переменная будет циклически переключаться на следующий параметр из формулы.</li>
        <li>Соответственно, поля ввода для остальных параметров станут доступными, а выходной параметр изменится.</li>
        <li>При решении уравнений алгоритм отдаёт предпочтение положительным корням (например, для скорости <code>υ</code> будет выбрано положительное значение).</li>
    </ul>

    <h3>6. Вычисление</h3>
    <ul>
        <li>После того как все необходимые входные данные заданы (вручную или через связи), нажмите кнопку <strong>«ВЫЧИСЛИТЬ»</strong>.</li>
        <li>Программа автоматически решит уравнения, если входные данные вписаны или связаны.</li>
        <li>Результат появится в серой зоне (рядом с выходным параметром) и будет передан во все связанные блоки.</li>
        <li>Если данных недостаточно или решение не найдено, то в значении параметра отобразится знак вопроса: «?».</li>
    </ul>

    <h3>7. Построение графиков</h3>
    <ul>
        <li>Нажмите кнопку <strong>«График»</strong> на панели инструментов – активируется режим построения графиков. Далее можно выбрать параметры для графика:</li>
        <li>Сначала кликните на <strong>синий кружок</strong> (входной параметр), который будет играть роль <strong>X</strong> (независимая переменная).</li>
        <li>Затем кликните на <strong>оранжевый кружок</strong> (входной или выходной), который будет играть роль <strong>Y</strong> (зависимая переменная).</li>
        <li>Программа автоматически построит график зависимости <strong>Y от X</strong> в диапазоне <strong>X ∈ [-50, +50]</strong>, <strong>Y ∈ [-50, +50]</strong> с центром координат в (0,0).</li>
        <li>Для выхода из режима построения графика повторно нажмите кнопку «График» или выберите другой режим.</li>
    </ul>

    <h3>8. Сохранение и загрузка проекта</h3>
    <ul>
        <li>Кнопка <strong>«СОХРАНИТЬ»</strong> – средствами браузера скачивает в "Загрузки" JSON-файл текущую рабочую область.</li>
        <li>Кнопка <strong>«ЗАГРУЗИТЬ»</strong> – позволяет выбрать ранее сохранённый файл и восстановить рабочую область.</li>
    </ul>

    <h3>9. Советы</h3>
    <ul>
        <li>Если блок не вычисляется – проверьте, что все входные параметры имеют числовые значения (или связаны с вычисленными блоками), а также проверьте схему на отсутствие зацикливания блоков.</li>
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

// Деактивация режима графика
function deactivateGraphMode() {
    graphModeActive = false;
    selectingStart = false;
    selectingEnd = false;
    graphStartParam = null;
    graphEndParam = null;
    modeStatusSpan.innerText = graphModeActive ? '' : 'Режим: перемещение';
    graphBtn.classList.remove('active');
}

// Функция построения графика
async function buildGraph(startSpec, endSpec) {
    const startRect = rectangles.get(startSpec.rectId);
    const endRect = rectangles.get(endSpec.rectId);
    if (!startRect || !endRect) {
        alert("Ошибка: блок не найден");
        return;
    }

    if (!startRect.vars.includes(startSpec.paramName)) {
        alert(`Параметр ${startSpec.paramName} не найден в блоке "${startRect.formulaName}"`);
        return;
    }
    if (!endRect.vars.includes(endSpec.paramName)) {
        alert(`Параметр ${endSpec.paramName} не найден в блоке "${endRect.formulaName}"`);
        return;
    }

    // Попытка аналитического вывода
    let expr = deriveExpression(startSpec, endSpec);
    let analyticMode = (expr !== null);
    let fn = null;
    if (analyticMode) {
        try {
            fn = new Function('x', `'use strict'; return (${expr});`);
        } catch (e) {
            console.warn("Ошибка создания функции, переходим в численный режим", e);
            analyticMode = false;
        }
    }

    const graphContext = {
        mode: analyticMode ? 'analytic' : 'numeric',
        analyticFn: fn,
        startSpec: startSpec,
        endSpec: endSpec,
        xLabel: startSpec.paramName,
        yLabel: endSpec.paramName,
    };

    createGraphBlock(graphContext);
}

/**
 * Генерирует массив точек для всего диапазона X от -50 до 50.
 * Вызывается ОДИН раз при открытии окна графика.
 */
function generateInitialPoints(graphContext, pointsCount = 100) {
    const points = [];
    const xMin = -100, xMax = 100;
    if (graphContext.mode === 'analytic' && graphContext.analyticFn) {
        for (let i = 0; i <= pointsCount; i++) {
            const x = xMin + (i / pointsCount) * (xMax - xMin);
            let y;
            try {
                y = graphContext.analyticFn(x);
            } catch (e) {
                y = null;
            }
            points.push({ x, y: (y !== null && isFinite(y) && !isNaN(y)) ? y : null });
        }
    } else {
        // Численный режим – используем computeYForX для каждой точки
        for (let i = 0; i <= pointsCount; i++) {
            const x = xMin + (i / pointsCount) * (xMax - xMin);
            const y = computeYForX(x, graphContext.startSpec, graphContext.endSpec);
            points.push({ x, y });
        }
    }
    return points;
}

/**
 * Отрисовка графика внутри готового блока (с учётом текущего масштаба).
 * @param {Object} blockData - объект блока из graphBlocks
 */
function drawGraphInBlock(blockData) {
    const { canvas, graphContext, state } = blockData;
    const { xMin, xMax, yMin, yMax, points } = state;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const padding = { left: 50, right: 30, top: 20, bottom: 40 };
    const graphWidth = width - padding.left - padding.right;
    const graphHeight = height - padding.top - padding.bottom;

    const xToPixel = (x) => padding.left + ((x - xMin) / (xMax - xMin)) * graphWidth;
    const yToPixel = (y) => padding.top + graphHeight - ((y - yMin) / (yMax - yMin)) * graphHeight;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // Сетка
    ctx.font = '10px monospace';
    ctx.fillStyle = '#555';
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

    const niceStep = (range, targetSteps = 10) => {
        const step = range / targetSteps;
        const magnitude = 10 ** Math.floor(Math.log10(step));
        const residual = step / magnitude;
        let nice;
        if (residual < 1.5) nice = 1 * magnitude;
        else if (residual < 3.5) nice = 2 * magnitude;
        else if (residual < 7.5) nice = 5 * magnitude;
        else nice = 10 * magnitude;
        return nice;
    };

    const xStep = niceStep(xMax - xMin, 8);
    const yStep = niceStep(yMax - yMin, 6);

    let firstX = Math.ceil(xMin / xStep) * xStep;
    for (let x = firstX; x <= xMax; x += xStep) {
        const px = xToPixel(x);
        if (px < padding.left || px > padding.left + graphWidth) continue;
        ctx.beginPath();
        ctx.moveTo(px, padding.top);
        ctx.lineTo(px, padding.top + graphHeight);
        ctx.stroke();
        ctx.fillText(x.toFixed(2), px - 10, padding.top + graphHeight + 15);
    }

    let firstY = Math.ceil(yMin / yStep) * yStep;
    for (let y = firstY; y <= yMax; y += yStep) {
        const py = yToPixel(y);
        if (py < padding.top || py > padding.top + graphHeight) continue;
        ctx.beginPath();
        ctx.moveTo(padding.left, py);
        ctx.lineTo(padding.left + graphWidth, py);
        ctx.stroke();
        ctx.fillText(y.toFixed(2), padding.left - 30, py + 3);
    }

    // Оси
    ctx.beginPath();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    if (xMin <= 0 && xMax >= 0) {
        const xZero = xToPixel(0);
        ctx.moveTo(xZero, padding.top);
        ctx.lineTo(xZero, padding.top + graphHeight);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(xZero - 5, padding.top);
        ctx.lineTo(xZero + 5, padding.top);
        ctx.lineTo(xZero, padding.top - 8);
        ctx.fill();
    }
    if (yMin <= 0 && yMax >= 0) {
        const yZero = yToPixel(0);
        ctx.moveTo(padding.left, yZero);
        ctx.lineTo(padding.left + graphWidth, yZero);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(padding.left + graphWidth, yZero - 5);
        ctx.lineTo(padding.left + graphWidth, yZero + 5);
        ctx.lineTo(padding.left + graphWidth - 8, yZero);
        ctx.fill();
    }

    // Подписи осей
    ctx.font = '12px "Segoe UI"';
    ctx.fillStyle = '#2c3e50';
    ctx.fillText(graphContext.xLabel, padding.left + graphWidth + 5, yToPixel(0) + 4);
    ctx.fillText(graphContext.yLabel, xToPixel(0) - 6, padding.top - 5);

    // Кривая
    ctx.beginPath();
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 2;
    let firstPoint = true;
    for (const p of points) {
        if (p.y === null) {
            firstPoint = true;
            continue;
        }
        const px = xToPixel(p.x);
        const py = yToPixel(p.y);
        if (px < padding.left || px > padding.left + graphWidth ||
            py < padding.top || py > padding.top + graphHeight) {
            firstPoint = true;
            continue;
        }
        if (firstPoint) {
            ctx.moveTo(px, py);
            firstPoint = false;
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();
    ctx.restore();
}

/**
 * Проверяет, можно ли строку интерпретировать как число (константу).
 */
function isNumeric(str) {
    if (typeof str === 'number') return true;
    if (typeof str !== 'string') return false;
    return !isNaN(parseFloat(str)) && isFinite(str);
}

/**
 * Упрощает строку математического выражения (базовые замены).
 * Удаляет лишние скобки вокруг одиночного токена, заменяет 1*var, 0+var и т.д.
 */
function simplifyExpression(expr) {
    expr = expr.trim();
    // Убираем скобки, если внутри просто число или переменная
    if (expr.startsWith('(') && expr.endsWith(')')) {
        const inner = expr.slice(1, -1);
        if (!inner.includes('+') && !inner.includes('-') && !inner.includes('*') && !inner.includes('/') && !inner.includes('Math.')) {
            expr = inner;
        }
    }
    // Замены вида 1*x -> x, 0+x -> x, x+0 -> x, x*1 -> x
    expr = expr.replace(/(?:^|\*|\+|\-|\/|\()1\*(\w+)/g, '$1');
    expr = expr.replace(/(\w+)\*1(?:\)|$|\+|\-)/g, '$1');
    expr = expr.replace(/(?:^|\+|\-|\(|\*)0\+(\w+)/g, '$1');
    expr = expr.replace(/(\w+)\+0(?:\)|$|\+|\-)/g, '$1');
    expr = expr.replace(/(\w+)\-0/g, '$1');
    expr = expr.replace(/0\+(\w+)/g, '$1');
    // Обработка Math.pow(x,2) -> x*x (для читаемости, но не обязательно)
    expr = expr.replace(/Math\.pow\((\w+),\s*2\)/g, '($1*$1)');
    return expr;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Возвращает выражение для выходного параметра блока.
 * Для обычного блока: out = правая часть формулы, где вместо переменных подставлены их выражения.
 * Для арифметического блока: out = in op coeff.
 */
function getOutputExpression(rect, sourceRect, sourceParam, visited) {
    if (rect.isCustom) {
        const inExpr = getInputExpression(rect, 'in', sourceRect, sourceParam, visited);
        const coeffVal = rect.manualValues.coeff;
        if (coeffVal === undefined || coeffVal === '') return null;
        const coeffExpr = isNumeric(coeffVal) ? coeffVal : `(${coeffVal})`;
        let op = rect.operation;
        if (op === '+') return `(${inExpr} + ${coeffExpr})`;
        if (op === '-') return `(${inExpr} - ${coeffExpr})`;
        if (op === '*') return `(${inExpr} * ${coeffExpr})`;
        if (op === '/') return `(${inExpr} / ${coeffExpr})`;
        return null;
    } else {
        // Стандартная формула: left = right
        let [left, right] = rect.formulaEq.split('=').map(s => s.trim());
        if (!right) return null;
        // Целевая переменная – rect.targetVar (левая часть может быть другой, но мы берём targetVar)
        // Поэтому нам нужно выражение именно для rect.targetVar. В формуле оно уже стоит слева.
        // Если rect.targetVar не совпадает с левой частью, нужно переставить уравнение.
        let exprForTarget;
        if (left === rect.targetVar) {
            exprForTarget = right;
        } else if (right.includes(rect.targetVar)) {
            // Целевая переменная находится справа – нужно решить уравнение относительно неё.
            // В текущей реализации мы всегда решаем уравнение относительно targetVar через solveEquation.
            // Для аналитического вывода это сложно. Поэтому если targetVar не слева, используем старый метод.
            return null;
        } else {
            return null;
        }
        // Нормализуем выражение (замена ^2 и пр.)
        let normalized = normalizeExpression(exprForTarget);
        // Находим все переменные, входящие в normalized (кроме уже известных)
        const varsInExpr = rect.vars.filter(v => v !== rect.targetVar);
        // Подставляем вместо каждой переменной её выражение (через источник x)
        let substituted = normalized;
        for (let v of varsInExpr) {
            const vExpr = getInputExpression(rect, v, sourceRect, sourceParam, visited);
            if (vExpr === null) return null;
            // Заменяем все вхождения переменной v на её выражение
            
            const regex = new RegExp(
                `(?<![\\p{L}\\p{N}_])${escapeRegExp(v)}(?![\\p{L}\\p{N}_])`, 'gu' // флаг 'u' включает Unicode-режим
            );
            substituted = substituted.replace(regex, `(${vExpr})`);
        }
        return simplifyExpression(substituted);
    }
}

/**
 * Возвращает выражение для входного параметра paramName блока rect.
 * Если параметр связан с выходом другого блока – рекурсивно получаем выражение того выхода.
 * Если параметр имеет ручное числовое значение – возвращает его как строку.
 * Иначе возвращает null.
 */
function getInputExpression(rect, paramName, sourceRect, sourceParam, visited) {
    // Проверка на цикл
    const key = `${rect.id}:${paramName}`;
    if (visited.has(key)) return null;
    visited.add(key);

    // Нет связи – берём ручное значение
    const manual = rect.manualValues[paramName];
    // Особый случай: если этот параметр и есть искомая независимая переменная (x)
    if (rect.id === sourceRect?.id && paramName === sourceParam) {
        visited.delete(key);
        return 'x';
    }
    if (manual !== undefined && manual !== '' && !isNaN(parseFloat(manual))) {
        visited.delete(key);
        return manual;
    }
    visited.delete(key);
    return null;
}

/**
 * Главная функция вывода аналитического выражения y = f(x).
 * @param {Object} startSpec - { rectId, paramName, isOutput: false } (всегда false, т.к. x – входной)
 * @param {Object} endSpec   - { rectId, paramName, isOutput } – может быть выходной или входной
 * @returns {string|null} Строка выражения, зависящая от 'x', или null, если вывести не удалось.
 */
function deriveExpression(startSpec, endSpec) {
    const sourceRect = rectangles.get(startSpec.rectId);
    const targetRect = rectangles.get(endSpec.rectId);
    if (!sourceRect || !targetRect) return null;

    const visited = new Set();
    let finalExpr = null;

    if (endSpec.isOutput) {
        // Конечный параметр – выходной (целевая переменная блока)
        finalExpr = getOutputExpression(targetRect, sourceRect, startSpec.paramName, visited);
    } else {
        // Конечный параметр – входной
        finalExpr = getInputExpression(targetRect, endSpec.paramName, sourceRect, startSpec.paramName, visited);
    }

    if (finalExpr && typeof finalExpr === 'string') {
        // Заменяем все вхождения независимой переменной 'x' (она может называться иначе, но мы её обозначаем 'x')
        // ВАЖНО: внутри выражений переменная 'x' может быть переименована. Упростим: оставим как есть.
        // Для безопасности убедимся, что в выражении нет неопределённых переменных (кроме 'x')
        const possibleVars = finalExpr.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
        for (let v of possibleVars) {
            if (v !== 'x' && !isNumeric(v) && !v.startsWith('Math.') && !['PI','E','sin','cos','tan','sqrt','log','abs'].includes(v)) {
                console.warn(`Неопределённая переменная в выражении: ${v}`);
                return null; // неизвестная переменная – не можем вычислить
            }
        }
        return simplifyExpression(finalExpr);
    }
    return null;
}

/**
 * Вычисляет значение параметра endSpec для заданного x, временно подставляя x во входной параметр startSpec.
 * Используется только в численном режиме (когда нет аналитического выражения).
 * @param {number} x - значение независимой переменной
 * @param {Object} startSpec - спецификация начального параметра (X)
 * @param {Object} endSpec - спецификация конечного параметра (Y)
 * @returns {number|null} вычисленное значение Y или null
 */
function computeYForX(x, startSpec, endSpec) {
    const startRect = rectangles.get(startSpec.rectId);
    const endRect = rectangles.get(endSpec.rectId);
    if (!startRect || !endRect) return null;

    // Сохраняем исходное состояние
    let originalManualValue = startRect.manualValues[startSpec.paramName];
    let originalConnection = paramConnections.find(c => c.targetRectId === startSpec.rectId && c.targetParam === startSpec.paramName);
    let originalConnectionIndex = originalConnection ? paramConnections.indexOf(originalConnection) : -1;

    // Отключаем перерисовку для скорости
    const originalRedraw = redrawParamLines;
    const originalUpdateList = updateParamConnectionsList;
    window.redrawParamLines = () => {};
    window.updateParamConnectionsList = () => {};

    try {
        // Убираем связь, если была
        if (originalConnection) {
            paramConnections.splice(originalConnectionIndex, 1);
        }
        // Устанавливаем ручное значение X
        startRect.manualValues[startSpec.paramName] = String(x);
        rebuildParamsList(startRect);
        computeAll();

        let y = null;
        if (endSpec.isOutput) {
            if (endRect.computedValue !== null && isFinite(endRect.computedValue)) {
                y = endRect.computedValue;
            }
        } else {
            const endConn = paramConnections.find(c => c.targetRectId === endSpec.rectId && c.targetParam === endSpec.paramName);
            if (endConn) {
                const srcRect = rectangles.get(endConn.sourceRectId);
                if (srcRect && srcRect.computedValue !== null && isFinite(srcRect.computedValue)) {
                    y = srcRect.computedValue;
                }
            } else {
                const manualVal = endRect.manualValues[endSpec.paramName];
                if (manualVal !== undefined && manualVal !== '' && !isNaN(parseFloat(manualVal))) {
                    y = parseFloat(manualVal);
                }
            }
        }
        return (y !== null && isFinite(y)) ? y : null;
    } finally {
        // Восстанавливаем исходное состояние
        if (originalConnection) {
            if (!paramConnections.includes(originalConnection)) {
                paramConnections.push(originalConnection);
            }
        } else {
            if (originalManualValue === undefined) {
                delete startRect.manualValues[startSpec.paramName];
            } else {
                startRect.manualValues[startSpec.paramName] = originalManualValue;
            }
        }
        rebuildParamsList(startRect);
        computeAll();
        window.redrawParamLines = originalRedraw;
        window.updateParamConnectionsList = originalUpdateList;
        redrawParamLines();
        updateParamConnectionsList();
    }
}

saveBtn.addEventListener('click', () => saveToFile());
loadBtn.addEventListener('click', () => loadFromFile());
connModeBtn.addEventListener('click', () => setConnectMode(!connectModeActive));
helpBtn.addEventListener('click', () => showHelp() );
graphBtn.addEventListener('click', () => {
    if (graphModeActive) {
        // Если режим уже активен – выключаем
        deactivateGraphMode();
        return;
    }
    // Выходим из режима соединения, если он активен
    if (connectModeActive) setConnectMode(false);
    // Активируем режим выбора графика
    graphModeActive = true;
    selectingStart = true;
    selectingEnd = false;
    graphStartParam = null;
    graphEndParam = null;
    modeStatusSpan.innerText = 'Режим графика: выберите НАЧАЛЬНЫЙ параметр (синий кружок)';
    graphBtn.classList.add('active');
});
computeBtn.addEventListener('click', computeAll);
clearAllParamsConnBtn.addEventListener('click', () => {
    paramConnections = [];
    for (let rect of rectangles.values())
        rebuildParamsList(rect);
    updateParamConnectionsList();
    redrawParamLines();
});
clearAllBtn.addEventListener('click', () => {
    paramConnections = [];
    for (let rect of rectangles.values()){
        rebuildParamsList(rect);
        deleteRectangle(rect.id);
    }
    updateParamConnectionsList();
    redrawParamLines();
});
window.addEventListener('resize', () => redrawParamLines());
new ResizeObserver(() => redrawParamLines()).observe(graphArea);
setupDragDrop();
initDemo();
setConnectMode(false);