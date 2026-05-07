//--- БАЗА ФОРМУЛ ---
const formulasLibrary = [
    // ==================== Дополнительно ====================
    { name: "Сложение",  eq: "out = in1 + in2", vars: ["out", "in1", "in2"], category: "Дополнительно", swappable: 0 },
    { name: "Вычитание", eq: "out = in1 - in2", vars: ["out", "in1", "in2"], category: "Дополнительно", swappable: 0 },
    { name: "Умножение", eq: "out = in1 * in2", vars: ["out", "in1", "in2"], category: "Дополнительно", swappable: 0 },
    { name: "Деление",   eq: "out = in1 / in2", vars: ["out", "in1", "in2"], category: "Дополнительно", swappable: 0 },
    { name: "Степень",   eq: "out = in1 ^ in2", vars: ["out", "in1", "in2"], category: "Дополнительно", swappable: 0 },
    { name: "Равно",   eq: "out = in", vars: ["out", "in"], category: "Дополнительно", swappable: 0 },

    // ==================== МЕХАНИКА ====================
    { name: "Давление", eq: "P = F/S", vars: ["P", "F", "S"], category: "Механика", swappable: 1 },
    { name: "Плотность", eq: "ρ = m/V", vars: ["ρ", "m", "V"], category: "Механика", swappable: 1 },
    { name: "Давление жидкости", eq: "P = ρ*g*h", vars: ["P", "ρ", "g", "h"], category: "Механика", swappable: 1 },
    { name: "Сила тяжести", eq: "Fт = m*g", vars: ["Fт", "m", "g"], category: "Механика", swappable: 1 },
    { name: "Архимедова сила", eq: "Fₐ = ρж*g*Vт", vars: ["Fₐ", "ρж", "g", "Vт"], category: "Механика", swappable: 1 },
    { name: "II закон Ньютона", eq: "F = m*a", vars: ["F", "m", "a"], category: "Механика", swappable: 1 },
    { name: "Закон Гука", eq: "Fy = -k*x", vars: ["Fy", "k", "x"], category: "Механика", swappable: 1 },
    { name: "Кинетическая энергия", eq: "Ek = m*υ^2/2", vars: ["Ek", "m", "υ"], category: "Механика", swappable: 1 },
    { name: "Работа", eq: "A = F*S*cos(α)", vars: ["A", "F", "S", "α"], category: "Механика", swappable: 1 },
    { name: "Мощность", eq: "N = A/t", vars: ["N", "A", "t"], category: "Механика", swappable: 1 },
    { name: "Координата при равноускоренном движении", eq: "X = X0 + υ0*t + (a*t^2)/2", vars: ["X", "X0", "υ0", "t", "a"], category: "Механика", swappable: 1 },
    { name: "Перемещение при равноускоренном движении (без времени)", eq: "S = (υ2^2 - υ0^2)/(2*a)", vars: ["S", "υ2", "υ0", "a"], category: "Механика", swappable: 1 },
    { name: "Перемещение при равноускоренном движении (средняя скорость)", eq: "S = (υ + υ0)*t/2", vars: ["S", "υ", "υ0", "t"], category: "Механика", swappable: 1 },
    { name: "Уравнение скорости при равноускоренном движении", eq: "υ = υ0 + a*t", vars: ["υ", "υ0", "a", "t"], category: "Механика", swappable: 1 },
    { name: "Ускорение", eq: "a = (υ - υ0)/t", vars: ["a", "υ", "υ0", "t"], category: "Механика", swappable: 1 },
    { name: "Скорость при движении по окружности", eq: "υ = 2*π*R/T", vars: ["υ", "R", "T"], category: "Механика", swappable: 1 },
    { name: "Центростремительное ускорение", eq: "a = υ^2/R", vars: ["a", "υ", "R"], category: "Механика", swappable: 1 },
    { name: "Частота через период", eq: "ν = 1/T", vars: ["ν", "T"], category: "Механика", swappable: 1 },
    { name: "Частота через циклическую частоту", eq: "ν = ω/(2*π)", vars: ["ν", "ω"], category: "Механика", swappable: 1 },
    { name: "Циклическая частота через частоту", eq: "ω = 2*π*ν", vars: ["ω", "ν"], category: "Механика", swappable: 1 },
    { name: "Закон Всемирного тяготения", eq: "F = G*M*m/R^2", vars: ["F", "G", "M", "m", "R"], category: "Механика", swappable: 1 },
    { name: "Вес тела при движении вверх с ускорением", eq: "P = m*(g + a)", vars: ["P", "m", "g", "a"], category: "Механика", swappable: 1 },
    { name: "Вес тела при движении вниз с ускорением", eq: "P = m*(g - a)", vars: ["P", "m", "g", "a"], category: "Механика", swappable: 1 },
    { name: "Сила трения", eq: "Fтр = μ*N", vars: ["Fтр", "μ", "N"], category: "Механика", swappable: 1 },
    { name: "Импульс тела", eq: "p = m*υ", vars: ["p", "m", "υ"], category: "Механика", swappable: 1 },
    { name: "Импульс силы", eq: "Δp = F*t", vars: ["Δp", "F", "t"], category: "Механика", swappable: 1 },
    { name: "Момент силы", eq: "M = F*ℓ", vars: ["M", "F", "ℓ"], category: "Механика", swappable: 1 },
    { name: "Потенциальная энергия тела, поднятого над землей", eq: "Eп = m*g*h", vars: ["Eп", "m", "g", "h"], category: "Механика", swappable: 1 },
    { name: "Потенциальная энергия упруго деформированного тела", eq: "Eп = k*x^2/2", vars: ["Eп", "k", "x"], category: "Механика", swappable: 1 },
    { name: "Мощность через силу и скорость", eq: "N = F*υ", vars: ["N", "F", "υ"], category: "Механика", swappable: 1 },
    { name: "Коэффициент полезного действия", eq: "η = Aп/Aз", vars: ["η", "Aп", "Aз"], category: "Механика", swappable: 1 },

    // ==================== МОЛЕКУЛЯРНАЯ ФИЗИКА И ТЕРМОДИНАМИКА ====================
    { name: "Количество вещества", eq: "ν = N/Na", vars: ["ν", "N", "Na"], category: "Молекулярная физика", swappable: 1 },
    { name: "Молярная масса", eq: "M = m/ν", vars: ["M", "m", "ν"], category: "Молекулярная физика", swappable: 1 },
    { name: "Средняя кинетическая энергия молекул одноатомного газа", eq: "Ek = (3/2)*k*T", vars: ["Ek", "k", "T"], category: "Молекулярная физика", swappable: 1 },
    { name: "Давление газа через концентрацию и температуру", eq: "P = n*k*T", vars: ["P", "n", "k", "T"], category: "Молекулярная физика", swappable: 1 },
    { name: "Давление газа через концентрацию, массу молекулы и скорость", eq: "P = (1/3)*n*m0*υ^2", vars: ["P", "n", "m0", "υ"], category: "Молекулярная физика", swappable: 1 },
    { name: "Закон Гей-Люссака (изобарный процесс)", eq: "V2 = V1*T2/T1", vars: ["V2", "V1", "T2", "T1"], category: "Молекулярная физика", swappable: 1 },
    { name: "Закон Шарля (изохорный процесс)", eq: "P2 = P1*T2/T1", vars: ["P2", "P1", "T2", "T1"], category: "Молекулярная физика", swappable: 1 },
    { name: "Относительная влажность", eq: "φ = P/P0", vars: ["φ", "P", "P0"], category: "Молекулярная физика", swappable: 1 },
    { name: "Внутренняя энергия идеального одноатомного газа", eq: "U = (3/2)*(M/µ)*R*T", vars: ["U", "M", "µ", "R", "T"], category: "Молекулярная физика", swappable: 1 },
    { name: "Работа газа", eq: "A = P*ΔV", vars: ["A", "P", "ΔV"], category: "Молекулярная физика", swappable: 1 },
    { name: "Закон Бойля-Мариотта (изотермический процесс)", eq: "P2 = P1*V1/V2", vars: ["P2", "P1", "V1", "V2"], category: "Молекулярная физика", swappable: 1 },
    { name: "Количество теплоты при нагревании", eq: "Q = C*m*(T2 - T1)", vars: ["Q", "C", "m", "T2", "T1"], category: "Молекулярная физика", swappable: 1 },
    { name: "Количество теплоты при плавлении", eq: "Q = λ*m", vars: ["Q", "λ", "m"], category: "Молекулярная физика", swappable: 1 },
    { name: "Количество теплоты при парообразовании", eq: "Q = L*m", vars: ["Q", "L", "m"], category: "Молекулярная физика", swappable: 1 },
    { name: "Количество теплоты при сгорании топлива", eq: "Q = q*m", vars: ["Q", "q", "m"], category: "Молекулярная физика", swappable: 1 },
    { name: "Уравнение состояния идеального газа", eq: "P*V = (m/M)*R*T", vars: ["P", "V", "m", "M", "R", "T"], category: "Молекулярная физика", swappable: 1 },
    { name: "Первый закон термодинамики", eq: "ΔU = A + Q", vars: ["ΔU", "A", "Q"], category: "Молекулярная физика", swappable: 1 },
    { name: "КПД тепловых двигателей", eq: "η = (Q1 - Q2)/Q1", vars: ["η", "Q1", "Q2"], category: "Молекулярная физика", swappable: 1 },
    { name: "КПД идеального двигателя (цикл Карно)", eq: "η = (T1 - T2)/T1", vars: ["η", "T1", "T2"], category: "Молекулярная физика", swappable: 1 },

    // ==================== ЭЛЕКТРОДИНАМИКА ====================
    { name: "Закон Ома", eq: "I = U/R", vars: ["I", "U", "R"], category: "Электродинамика", swappable: 1 },
    { name: "Закон Кулона", eq: "F = k*q1*q2/R^2", vars: ["F", "k", "q1", "q2", "R"], category: "Электродинамика", swappable: 1 },
    { name: "Напряженность электрического поля", eq: "E = F/q", vars: ["E", "F", "q"], category: "Электродинамика", swappable: 1 },
    { name: "Напряженность поля точечного заряда", eq: "E = k*q/R^2", vars: ["E", "k", "q", "R"], category: "Электродинамика", swappable: 1 },
    { name: "Поверхностная плотность зарядов", eq: "σ = q/S", vars: ["σ", "q", "S"], category: "Электродинамика", swappable: 1 },
    { name: "Напряженность поля бесконечной плоскости", eq: "E = 2*π*k*σ", vars: ["E", "k", "σ"], category: "Электродинамика", swappable: 1 },
    { name: "Диэлектрическая проницаемость", eq: "ε = E0/E", vars: ["ε", "E0", "E"], category: "Электродинамика", swappable: 1 },
    { name: "Потенциальная энергия взаимодействия зарядов", eq: "W = k*q1*q2/R", vars: ["W", "k", "q1", "q2", "R"], category: "Электродинамика", swappable: 1 },
    { name: "Потенциал", eq: "φ = W/q", vars: ["φ", "W", "q"], category: "Электродинамика", swappable: 1 },
    { name: "Потенциал точечного заряда", eq: "φ = k*q/R", vars: ["φ", "k", "q", "R"], category: "Электродинамика", swappable: 1 },
    { name: "Напряжение", eq: "U = A/q", vars: ["U", "A", "q"], category: "Электродинамика", swappable: 1 },
    { name: "Для однородного электрического поля", eq: "U = E*d", vars: ["U", "E", "d"], category: "Электродинамика", swappable: 1 },
    { name: "Электроемкость", eq: "C = q/U", vars: ["C", "q", "U"], category: "Электродинамика", swappable: 1 },
    { name: "Электроемкость плоского конденсатора", eq: "C = S*ε*ε0/d", vars: ["C", "S", "ε", "ε0", "d"], category: "Электродинамика", swappable: 1 },
    { name: "Энергия заряженного конденсатора", eq: "W = C*U^2/2", vars: ["W", "C", "U"], category: "Электродинамика", swappable: 1 },
    { name: "Сила тока", eq: "I = q/t", vars: ["I", "q", "t"], category: "Электродинамика", swappable: 1 },
    { name: "Сопротивление проводника", eq: "R = ρ*ℓ/S", vars: ["R", "ρ", "ℓ", "S"], category: "Электродинамика", swappable: 1 },
    { name: "Общее сопротивление при последовательном соединении", eq: "R = R1 + R2", vars: ["R", "R1", "R2"], category: "Электродинамика", swappable: 1 },
    { name: "Общее напряжение при последовательном соединении", eq: "U = U1 + U2", vars: ["U", "U1", "U2"], category: "Электродинамика", swappable: 1 },
    { name: "Сила тока при последовательном соединении", eq: "I1 = I2", vars: ["I1", "I2"], category: "Электродинамика", swappable: 1 },
    { name: "Общее сопротивление при параллельном соединении", eq: "R = 1/(1/R1 + 1/R2)", vars: ["R", "R1", "R2"], category: "Электродинамика", swappable: 1 },
    { name: "Напряжение при параллельном соединении", eq: "U1 = U2", vars: ["U1", "U2"], category: "Электродинамика", swappable: 1 },
    { name: "Сила тока при параллельном соединении", eq: "I = I1 + I2", vars: ["I", "I1", "I2"], category: "Электродинамика", swappable: 1 },
    { name: "Мощность электрического тока", eq: "P = I*U", vars: ["P", "I", "U"], category: "Электродинамика", swappable: 1 },
    { name: "Закон Джоуля-Ленца", eq: "Q = I^2*R*t", vars: ["Q", "I", "R", "t"], category: "Электродинамика", swappable: 1 },
    { name: "Закон Ома для полной цепи", eq: "I = ε/(R + r)", vars: ["I", "ε", "R", "r"], category: "Электродинамика", swappable: 1 },
    { name: "Ток короткого замыкания", eq: "I = ε/r", vars: ["I", "ε", "r"], category: "Электродинамика", swappable: 1 },
    { name: "Вектор магнитной индукции", eq: "B = Fmax/(I*ℓ)", vars: ["B", "Fmax", "I", "ℓ"], category: "Электродинамика", swappable: 1 },
    { name: "Сила Ампера", eq: "Fa = I*B*ℓ*sin(α)", vars: ["Fa", "I", "B", "ℓ", "α"], category: "Электродинамика", swappable: 1 },
    { name: "Сила Лоренца", eq: "Fл = B*q*υ*sin(α)", vars: ["Fл", "B", "q", "υ", "α"], category: "Электродинамика", swappable: 1 },
    { name: "Магнитный поток", eq: "Ф = B*S*cos(α)", vars: ["Ф", "B", "S", "α"], category: "Электродинамика", swappable: 1 },
    { name: "Магнитный поток через индуктивность", eq: "Ф = L*I", vars: ["Ф", "L", "I"], category: "Электродинамика", swappable: 1 },
    { name: "Закон электромагнитной индукции", eq: "Ei = ΔФ/Δt", vars: ["Ei", "ΔФ", "Δt"], category: "Электродинамика", swappable: 1 },
    { name: "ЭДС индукции в движущемся проводнике", eq: "Ei = B*ℓ*υ*sin(α)", vars: ["Ei", "B", "ℓ", "υ", "α"], category: "Электродинамика", swappable: 1 },
    { name: "ЭДС самоиндукции", eq: "Esi = -L*ΔI/Δt", vars: ["Esi", "L", "ΔI", "Δt"], category: "Электродинамика", swappable: 1 },
    { name: "Энергия магнитного поля катушки", eq: "Wм = L*I^2/2", vars: ["Wм", "L", "I"], category: "Электродинамика", swappable: 1 },

    // ==================== КОЛЕБАНИЯ И ВОЛНЫ ====================
    { name: "Период колебаний математического маятника", eq: "T = 2*π*√(ℓ/g)", vars: ["T", "ℓ", "g"], category: "Колебания и волны", swappable: 1 },
    { name: "Период колебаний пружинного маятника", eq: "T = 2*π*√(m/k)", vars: ["T", "m", "k"], category: "Колебания и волны", swappable: 1 },
    { name: "Уравнение гармонических колебаний", eq: "X = Xmax*cos(ω*t)", vars: ["X", "Xmax", "ω", "t"], category: "Колебания и волны", swappable: 1 },
    { name: "Связь длины волны, скорости и периода", eq: "λ = υ*T", vars: ["λ", "υ", "T"], category: "Колебания и волны", swappable: 1 },
    { name: "Период колебаний колебательного контура", eq: "T = 2*π*√(L*C)", vars: ["T", "L", "C"], category: "Колебания и волны", swappable: 1 },
    { name: "Индуктивное сопротивление", eq: "XL = 2*π*L*ν", vars: ["XL", "L", "ν"], category: "Колебания и волны", swappable: 1 },
    { name: "Емкостное сопротивление", eq: "Xc = 1/(2*π*ν*C)", vars: ["Xc", "ν", "C"], category: "Колебания и волны", swappable: 1 },
    { name: "Действующее значение силы тока", eq: "Iд = Imax/√(2)", vars: ["Iд", "Imax"], category: "Колебания и волны", swappable: 1 },
    { name: "Действующее значение напряжения", eq: "Uд = Umax/√(2)", vars: ["Uд", "Umax"], category: "Колебания и волны", swappable: 1 },
    { name: "Полное сопротивление", eq: "Z = √((Xc - XL)^2 + R^2)", vars: ["Z", "Xc", "XL", "R"], category: "Колебания и волны", swappable: 1 },

    // ==================== ОПТИКА ====================
    { name: "Закон преломления света", eq: "n21 = n2/n1", vars: ["n21", "n2", "n1"], category: "Оптика", swappable: 1 },
    { name: "Показатель преломления", eq: "n21 = sin(α)/sin(γ)", vars: ["n21", "α", "γ"], category: "Оптика", swappable: 1 },
    { name: "Формула тонкой линзы", eq: "1/F = 1/d + 1/f", vars: ["F", "d", "f"], category: "Оптика", swappable: 1 },
    { name: "Оптическая сила линзы", eq: "D = 1/F", vars: ["D", "F"], category: "Оптика", swappable: 1 },
    { name: "Максимум интерференции", eq: "Δd = k*λ", vars: ["Δd", "k", "λ"], category: "Оптика", swappable: 1 },
    { name: "Минимум интерференции", eq: "Δd = (2k+1)*λ/2", vars: ["Δd", "k", "λ"], category: "Оптика", swappable: 1 },
    { name: "Дифракционная решетка", eq: "d*sin(φ) = k*λ", vars: ["d", "φ", "k", "λ"], category: "Оптика", swappable: 1 },

    // ==================== КВАНТОВАЯ ФИЗИКА ====================
    { name: "Формула Эйнштейна для фотоэффекта", eq: "h*ν = Aвых + Ek", vars: ["h", "ν", "Aвых", "Ek"], category: "Квантовая физика", swappable: 1 },
    { name: "Красная граница фотоэффекта", eq: "νк = Aвых/h", vars: ["νк", "Aвых", "h"], category: "Квантовая физика", swappable: 1 },
    { name: "Импульс фотона (через длину волны)", eq: "P = h/λ", vars: ["P", "h", "λ"], category: "Квантовая физика", swappable: 1 },
    { name: "Импульс фотона (через энергию)", eq: "P = E/c", vars: ["P", "E", "c"], category: "Квантовая физика", swappable: 1 },
    { name: "Закон радиоактивного распада", eq: "N = N0*2^(-t/T)", vars: ["N", "N0", "t", "T"], category: "Квантовая физика", swappable: 1 },
    { name: "Энергия связи атомных ядер", eq: "Eсв = (Z*mp + N*mn - Mя)*c^2", vars: ["Eсв", "Z", "mp", "N", "mn", "Mя", "c"], category: "Квантовая физика", swappable: 1 },

    // ==================== СПЕЦИАЛЬНАЯ ТЕОРИЯ ОТНОСИТЕЛЬНОСТИ ====================
    { name: "Релятивистское замедление времени", eq: "t = t1/√(1 - υ^2/c^2)", vars: ["t", "t1", "υ", "c"], category: "СТО", swappable: 1 },
    { name: "Релятивистское сокращение длины", eq: "ℓ = ℓ0*√(1 - υ^2/c^2)", vars: ["ℓ", "ℓ0", "υ", "c"], category: "СТО", swappable: 1 },
    { name: "Релятивистское сложение скоростей", eq: "υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)", vars: ["υ2", "υ1", "υ", "c"], category: "СТО", swappable: 1 },
    { name: "Эквивалентность массы и энергии", eq: "E = m*c^2", vars: ["E", "m", "c"], category: "СТО", swappable: 1 }
];


// ==================== РЕЕСТР АНАЛИТИЧЕСКИХ ФУНКЦИЙ ====================
// Структура: formulaEq -> targetVar -> функция(knownValues)
const formulaSolverRegistry = new Map();

function registerFormulaSolver(formulaEq, targetVar, func) {
    if (!formulaSolverRegistry.has(formulaEq)) formulaSolverRegistry.set(formulaEq, new Map());
    formulaSolverRegistry.get(formulaEq).set(targetVar, func);
}
// ==================== ПОЛНАЯ РЕГИСТРАЦИЯ ФОРМУЛ ====================
// Вспомогательная функция для квадратных уравнений (возвращает корень с учётом rootSign)
function solveQuadratic(a, b, c, rootSign = 1) {
    const D = b*b - 4*a*c;
    if (D < 0) return null;
    const sqrtD = Math.sqrt(D);
    const x1 = (-b + sqrtD) / (2*a);
    const x2 = (-b - sqrtD) / (2*a);
    // rootSign: 1 -> больший корень, -1 -> меньший
    return (rootSign === 1) ? Math.max(x1, x2) : Math.min(x1, x2);
}


//Регистрация вариантов использования функций. Переключение происходит по смене выходного параметра
{

    // ---------- Арифметические операторы ----------
    // Сложение
    registerFormulaSolver("out = in1 + in2", "out", (known) => known.in1 + known.in2);
    registerFormulaSolver("out = in1 + in2", "in1", (known) => known.out - known.in2);
    registerFormulaSolver("out = in1 + in2", "in2", (known) => known.out - known.in1);
    // Вычитание
    registerFormulaSolver("out = in1 - in2", "out", (known) => known.in1 - known.in2);
    registerFormulaSolver("out = in1 - in2", "in1", (known) => known.out + known.in2);
    registerFormulaSolver("out = in1 - in2", "in2", (known) => known.in1 - known.out);
    // Умножение
    registerFormulaSolver("out = in1 * in2", "out", (known) => known.in1 * known.in2);
    registerFormulaSolver("out = in1 * in2", "in1", (known) => known.out / known.in2);
    registerFormulaSolver("out = in1 * in2", "in2", (known) => known.out / known.in1);
    // Деление
    registerFormulaSolver("out = in1 / in2", "out", (known) => known.in1 / known.in2);
    registerFormulaSolver("out = in1 / in2", "in1", (known) => known.out * known.in2);
    registerFormulaSolver("out = in1 / in2", "in2", (known) => known.in1 / known.out);
    //Степень
    registerFormulaSolver("out = in1 ^ in2", "out", (known) => known.in1 ** known.in2);
    registerFormulaSolver("out = in1 ^ in2", "in1", (known) => known.out **(1 / known.in2));
    registerFormulaSolver("out = in1 ^ in2", "in2", (known) => Math.log(known.out) / Math.log(known.in1));
    //Равно
    registerFormulaSolver("out = in", "out", (known) => known.in);
    registerFormulaSolver("out = in", "in", (known) => known.out);

    // ---------- Механика ----------
    registerFormulaSolver("P = F/S", "P", (known) => known.F / known.S);
    registerFormulaSolver("P = F/S", "F", (known) => known.P * known.S);
    registerFormulaSolver("P = F/S", "S", (known) => known.F / known.P);

    registerFormulaSolver("ρ = m/V", "ρ", (known) => known.m / known.V);
    registerFormulaSolver("ρ = m/V", "m", (known) => known.ρ * known.V);
    registerFormulaSolver("ρ = m/V", "V", (known) => known.m / known.ρ);

    registerFormulaSolver("P = ρ*g*h", "P", (known) => known.ρ * known.g * known.h);
    registerFormulaSolver("P = ρ*g*h", "ρ", (known) => known.P / (known.g * known.h));
    registerFormulaSolver("P = ρ*g*h", "g", (known) => known.P / (known.ρ * known.h));
    registerFormulaSolver("P = ρ*g*h", "h", (known) => known.P / (known.ρ * known.g));

    registerFormulaSolver("Fт = m*g", "Fт", (known) => known.m * known.g);
    registerFormulaSolver("Fт = m*g", "m", (known) => known.Fт / known.g);
    registerFormulaSolver("Fт = m*g", "g", (known) => known.Fт / known.m);

    registerFormulaSolver("Fₐ = ρж*g*Vт", "Fₐ", (known) => known.ρж * known.g * known.Vт);
    registerFormulaSolver("Fₐ = ρж*g*Vт", "ρж", (known) => known.Fₐ / (known.g * known.Vт));
    registerFormulaSolver("Fₐ = ρж*g*Vт", "g", (known) => known.Fₐ / (known.ρж * known.Vт));
    registerFormulaSolver("Fₐ = ρж*g*Vт", "Vт", (known) => known.Fₐ / (known.ρж * known.g));

    registerFormulaSolver("F = m*a", "F", (known) => known.m * known.a);
    registerFormulaSolver("F = m*a", "m", (known) => known.F / known.a);
    registerFormulaSolver("F = m*a", "a", (known) => known.F / known.m);

    registerFormulaSolver("Fy = -k*x", "Fy", (known) => -known.k * known.x);
    registerFormulaSolver("Fy = -k*x", "k", (known) => -known.Fy / known.x);
    registerFormulaSolver("Fy = -k*x", "x", (known) => -known.Fy / known.k);

    registerFormulaSolver("Ek = m*υ^2/2", "Ek", (known) => known.m * Math.pow(known.υ, 2) / 2);
    registerFormulaSolver("Ek = m*υ^2/2", "m", (known) => 2 * known.Ek / Math.pow(known.υ, 2));
    registerFormulaSolver("Ek = m*υ^2/2", "υ", (known) => Math.sqrt(2 * known.Ek / known.m) * (known.rootSign || 1));

    registerFormulaSolver("A = F*S*cos(α)", "A", (known) => known.F * known.S * Math.cos(known.α));
    registerFormulaSolver("A = F*S*cos(α)", "F", (known) => known.A / (known.S * Math.cos(known.α)));
    registerFormulaSolver("A = F*S*cos(α)", "S", (known) => known.A / (known.F * Math.cos(known.α)));
    registerFormulaSolver("A = F*S*cos(α)", "α", (known) => Math.acos(known.A / (known.F * known.S)));

    registerFormulaSolver("N = A/t", "N", (known) => known.A / known.t);
    registerFormulaSolver("N = A/t", "A", (known) => known.N * known.t);
    registerFormulaSolver("N = A/t", "t", (known) => known.A / known.N);

    // X = X0 + υ0*t + (a*t^2)/2
    registerFormulaSolver("X = X0 + υ0*t + (a*t^2)/2", "X", (known) => known.X0 + known.υ0 * known.t + known.a * Math.pow(known.t, 2) / 2);
    registerFormulaSolver("X = X0 + υ0*t + (a*t^2)/2", "X0", (known) => known.X - known.υ0 * known.t - known.a * Math.pow(known.t, 2) / 2);
    registerFormulaSolver("X = X0 + υ0*t + (a*t^2)/2", "υ0", (known) => (known.X - known.X0 - known.a * Math.pow(known.t, 2) / 2) / known.t);
    registerFormulaSolver("X = X0 + υ0*t + (a*t^2)/2", "t", (known) => {
        const a2 = known.a / 2;
        const b = known.υ0;
        const c = known.X0 - known.X;
        return solveQuadratic(a2, b, c, known.rootSign);
    });
    registerFormulaSolver("X = X0 + υ0*t + (a*t^2)/2", "a", (known) => 2 * (known.X - known.X0 - known.υ0 * known.t) / Math.pow(known.t, 2));

    // S = (υ2^2 - υ0^2)/(2*a)
    registerFormulaSolver("S = (υ2^2 - υ0^2)/(2*a)", "S", (known) => (Math.pow(known.υ2, 2) - Math.pow(known.υ0, 2)) / (2 * known.a));
    registerFormulaSolver("S = (υ2^2 - υ0^2)/(2*a)", "υ2", (known) => Math.sqrt(2 * known.a * known.S + Math.pow(known.υ0, 2)) * (known.rootSign || 1));
    registerFormulaSolver("S = (υ2^2 - υ0^2)/(2*a)", "υ0", (known) => Math.sqrt(Math.pow(known.υ2, 2) - 2 * known.a * known.S) * (known.rootSign || 1));
    registerFormulaSolver("S = (υ2^2 - υ0^2)/(2*a)", "a", (known) => (Math.pow(known.υ2, 2) - Math.pow(known.υ0, 2)) / (2 * known.S));

    // S = (υ + υ0)*t/2
    registerFormulaSolver("S = (υ + υ0)*t/2", "S", (known) => (known.υ + known.υ0) * known.t / 2);
    registerFormulaSolver("S = (υ + υ0)*t/2", "υ", (known) => 2 * known.S / known.t - known.υ0);
    registerFormulaSolver("S = (υ + υ0)*t/2", "υ0", (known) => 2 * known.S / known.t - known.υ);
    registerFormulaSolver("S = (υ + υ0)*t/2", "t", (known) => 2 * known.S / (known.υ + known.υ0));

    // υ = υ0 + a*t
    registerFormulaSolver("υ = υ0 + a*t", "υ", (known) => known.υ0 + known.a * known.t);
    registerFormulaSolver("υ = υ0 + a*t", "υ0", (known) => known.υ - known.a * known.t);
    registerFormulaSolver("υ = υ0 + a*t", "a", (known) => (known.υ - known.υ0) / known.t);
    registerFormulaSolver("υ = υ0 + a*t", "t", (known) => (known.υ - known.υ0) / known.a);

    // a = (υ - υ0)/t
    registerFormulaSolver("a = (υ - υ0)/t", "a", (known) => (known.υ - known.υ0) / known.t);
    registerFormulaSolver("a = (υ - υ0)/t", "υ", (known) => known.a * known.t + known.υ0);
    registerFormulaSolver("a = (υ - υ0)/t", "υ0", (known) => known.υ - known.a * known.t);
    registerFormulaSolver("a = (υ - υ0)/t", "t", (known) => (known.υ - known.υ0) / known.a);

    // υ = 2*π*R/T
    registerFormulaSolver("υ = 2*π*R/T", "υ", (known) => 2 * Math.PI * known.R / known.T);
    registerFormulaSolver("υ = 2*π*R/T", "R", (known) => known.υ * known.T / (2 * Math.PI));
    registerFormulaSolver("υ = 2*π*R/T", "T", (known) => 2 * Math.PI * known.R / known.υ);

    // a = υ^2/R
    registerFormulaSolver("a = υ^2/R", "a", (known) => Math.pow(known.υ, 2) / known.R);
    registerFormulaSolver("a = υ^2/R", "υ", (known) => Math.sqrt(known.a * known.R) * (known.rootSign || 1));
    registerFormulaSolver("a = υ^2/R", "R", (known) => Math.pow(known.υ, 2) / known.a);

    // ν = 1/T
    registerFormulaSolver("ν = 1/T", "ν", (known) => 1 / known.T);
    registerFormulaSolver("ν = 1/T", "T", (known) => 1 / known.ν);

    // ν = ω/(2*π)
    registerFormulaSolver("ν = ω/(2*π)", "ν", (known) => known.ω / (2 * Math.PI));
    registerFormulaSolver("ν = ω/(2*π)", "ω", (known) => known.ν * 2 * Math.PI);

    // ω = 2*π*ν
    registerFormulaSolver("ω = 2*π*ν", "ω", (known) => 2 * Math.PI * known.ν);
    registerFormulaSolver("ω = 2*π*ν", "ν", (known) => known.ω / (2 * Math.PI));

    // F = G*M*m/R^2
    registerFormulaSolver("F = G*M*m/R^2", "F", (known) => known.G * known.M * known.m / Math.pow(known.R, 2));
    registerFormulaSolver("F = G*M*m/R^2", "G", (known) => known.F * Math.pow(known.R, 2) / (known.M * known.m));
    registerFormulaSolver("F = G*M*m/R^2", "M", (known) => known.F * Math.pow(known.R, 2) / (known.G * known.m));
    registerFormulaSolver("F = G*M*m/R^2", "m", (known) => known.F * Math.pow(known.R, 2) / (known.G * known.M));
    registerFormulaSolver("F = G*M*m/R^2", "R", (known) => Math.sqrt(known.G * known.M * known.m / known.F) * (known.rootSign || 1));

    // P = m*(g + a)
    registerFormulaSolver("P = m*(g + a)", "P", (known) => known.m * (known.g + known.a));
    registerFormulaSolver("P = m*(g + a)", "m", (known) => known.P / (known.g + known.a));
    registerFormulaSolver("P = m*(g + a)", "g", (known) => known.P / known.m - known.a);
    registerFormulaSolver("P = m*(g + a)", "a", (known) => known.P / known.m - known.g);

    // P = m*(g - a)
    registerFormulaSolver("P = m*(g - a)", "P", (known) => known.m * (known.g - known.a));
    registerFormulaSolver("P = m*(g - a)", "m", (known) => known.P / (known.g - known.a));
    registerFormulaSolver("P = m*(g - a)", "g", (known) => known.P / known.m + known.a);
    registerFormulaSolver("P = m*(g - a)", "a", (known) => known.g - known.P / known.m);

    // Fтр = μ*N
    registerFormulaSolver("Fтр = μ*N", "Fтр", (known) => known.μ * known.N);
    registerFormulaSolver("Fтр = μ*N", "μ", (known) => known.Fтр / known.N);
    registerFormulaSolver("Fтр = μ*N", "N", (known) => known.Fтр / known.μ);

    // p = m*υ
    registerFormulaSolver("p = m*υ", "p", (known) => known.m * known.υ);
    registerFormulaSolver("p = m*υ", "m", (known) => known.p / known.υ);
    registerFormulaSolver("p = m*υ", "υ", (known) => known.p / known.m);

    // Δp = F*t
    registerFormulaSolver("Δp = F*t", "Δp", (known) => known.F * known.t);
    registerFormulaSolver("Δp = F*t", "F", (known) => known.Δp / known.t);
    registerFormulaSolver("Δp = F*t", "t", (known) => known.Δp / known.F);

    // M = F*ℓ
    registerFormulaSolver("M = F*ℓ", "M", (known) => known.F * known.ℓ);
    registerFormulaSolver("M = F*ℓ", "F", (known) => known.M / known.ℓ);
    registerFormulaSolver("M = F*ℓ", "ℓ", (known) => known.M / known.F);

    // Eп = m*g*h
    registerFormulaSolver("Eп = m*g*h", "Eп", (known) => known.m * known.g * known.h);
    registerFormulaSolver("Eп = m*g*h", "m", (known) => known.Eп / (known.g * known.h));
    registerFormulaSolver("Eп = m*g*h", "g", (known) => known.Eп / (known.m * known.h));
    registerFormulaSolver("Eп = m*g*h", "h", (known) => known.Eп / (known.m * known.g));

    // Eп = k*x^2/2
    registerFormulaSolver("Eп = k*x^2/2", "Eп", (known) => known.k * Math.pow(known.x, 2) / 2);
    registerFormulaSolver("Eп = k*x^2/2", "k", (known) => 2 * known.Eп / Math.pow(known.x, 2));
    registerFormulaSolver("Eп = k*x^2/2", "x", (known) => Math.sqrt(2 * known.Eп / known.k) * (known.rootSign || 1));

    // N = F*υ
    registerFormulaSolver("N = F*υ", "N", (known) => known.F * known.υ);
    registerFormulaSolver("N = F*υ", "F", (known) => known.N / known.υ);
    registerFormulaSolver("N = F*υ", "υ", (known) => known.N / known.F);

    // η = Aп/Aз
    registerFormulaSolver("η = Aп/Aз", "η", (known) => known.Aп / known.Aз);
    registerFormulaSolver("η = Aп/Aз", "Aп", (known) => known.η * known.Aз);
    registerFormulaSolver("η = Aп/Aз", "Aз", (known) => known.Aп / known.η);

    // ---------- Молекулярная физика ----------
    // ν = N/Na
    registerFormulaSolver("ν = N/Na", "ν", (known) => known.N / known.Na);
    registerFormulaSolver("ν = N/Na", "N", (known) => known.ν * known.Na);
    registerFormulaSolver("ν = N/Na", "Na", (known) => known.N / known.ν);

    // M = m/ν
    registerFormulaSolver("M = m/ν", "M", (known) => known.m / known.ν);
    registerFormulaSolver("M = m/ν", "m", (known) => known.M * known.ν);
    registerFormulaSolver("M = m/ν", "ν", (known) => known.m / known.M);

    // Ek = (3/2)*k*T
    registerFormulaSolver("Ek = (3/2)*k*T", "Ek", (known) => 1.5 * known.k * known.T);
    registerFormulaSolver("Ek = (3/2)*k*T", "k", (known) => known.Ek / (1.5 * known.T));
    registerFormulaSolver("Ek = (3/2)*k*T", "T", (known) => known.Ek / (1.5 * known.k));

    // P = n*k*T
    registerFormulaSolver("P = n*k*T", "P", (known) => known.n * known.k * known.T);
    registerFormulaSolver("P = n*k*T", "n", (known) => known.P / (known.k * known.T));
    registerFormulaSolver("P = n*k*T", "k", (known) => known.P / (known.n * known.T));
    registerFormulaSolver("P = n*k*T", "T", (known) => known.P / (known.n * known.k));

    // P = (1/3)*n*m0*υ^2
    registerFormulaSolver("P = (1/3)*n*m0*υ^2", "P", (known) => known.n * known.m0 * Math.pow(known.υ, 2) / 3);
    registerFormulaSolver("P = (1/3)*n*m0*υ^2", "n", (known) => 3 * known.P / (known.m0 * Math.pow(known.υ, 2)));
    registerFormulaSolver("P = (1/3)*n*m0*υ^2", "m0", (known) => 3 * known.P / (known.n * Math.pow(known.υ, 2)));
    registerFormulaSolver("P = (1/3)*n*m0*υ^2", "υ", (known) => Math.sqrt(3 * known.P / (known.n * known.m0)) * (known.rootSign || 1));

    // V2 = V1*T2/T1
    registerFormulaSolver("V2 = V1*T2/T1", "V2", (known) => known.V1 * known.T2 / known.T1);
    registerFormulaSolver("V2 = V1*T2/T1", "V1", (known) => known.V2 * known.T1 / known.T2);
    registerFormulaSolver("V2 = V1*T2/T1", "T2", (known) => known.V2 * known.T1 / known.V1);
    registerFormulaSolver("V2 = V1*T2/T1", "T1", (known) => known.V1 * known.T2 / known.V2);

    // P2 = P1*T2/T1
    registerFormulaSolver("P2 = P1*T2/T1", "P2", (known) => known.P1 * known.T2 / known.T1);
    registerFormulaSolver("P2 = P1*T2/T1", "P1", (known) => known.P2 * known.T1 / known.T2);
    registerFormulaSolver("P2 = P1*T2/T1", "T2", (known) => known.P2 * known.T1 / known.P1);
    registerFormulaSolver("P2 = P1*T2/T1", "T1", (known) => known.P1 * known.T2 / known.P2);

    // φ = P/P0
    registerFormulaSolver("φ = P/P0", "φ", (known) => known.P / known.P0);
    registerFormulaSolver("φ = P/P0", "P", (known) => known.φ * known.P0);
    registerFormulaSolver("φ = P/P0", "P0", (known) => known.P / known.φ);

    // U = (3/2)*(M/µ)*R*T
    registerFormulaSolver("U = (3/2)*(M/µ)*R*T", "U", (known) => 1.5 * (known.M / known.µ) * known.R * known.T);
    registerFormulaSolver("U = (3/2)*(M/µ)*R*T", "M", (known) => (known.U * known.µ) / (1.5 * known.R * known.T));
    registerFormulaSolver("U = (3/2)*(M/µ)*R*T", "µ", (known) => (1.5 * known.M * known.R * known.T) / known.U);
    registerFormulaSolver("U = (3/2)*(M/µ)*R*T", "R", (known) => (known.U * known.µ) / (1.5 * known.M * known.T));
    registerFormulaSolver("U = (3/2)*(M/µ)*R*T", "T", (known) => (known.U * known.µ) / (1.5 * known.M * known.R));

    // A = P*ΔV
    registerFormulaSolver("A = P*ΔV", "A", (known) => known.P * known.ΔV);
    registerFormulaSolver("A = P*ΔV", "P", (known) => known.A / known.ΔV);
    registerFormulaSolver("A = P*ΔV", "ΔV", (known) => known.A / known.P);

    // P2 = P1*V1/V2
    registerFormulaSolver("P2 = P1*V1/V2", "P2", (known) => known.P1 * known.V1 / known.V2);
    registerFormulaSolver("P2 = P1*V1/V2", "P1", (known) => known.P2 * known.V2 / known.V1);
    registerFormulaSolver("P2 = P1*V1/V2", "V1", (known) => known.P2 * known.V2 / known.P1);
    registerFormulaSolver("P2 = P1*V1/V2", "V2", (known) => known.P1 * known.V1 / known.P2);

    // Q = C*m*(T2 - T1)
    registerFormulaSolver("Q = C*m*(T2 - T1)", "Q", (known) => known.C * known.m * (known.T2 - known.T1));
    registerFormulaSolver("Q = C*m*(T2 - T1)", "C", (known) => known.Q / (known.m * (known.T2 - known.T1)));
    registerFormulaSolver("Q = C*m*(T2 - T1)", "m", (known) => known.Q / (known.C * (known.T2 - known.T1)));
    registerFormulaSolver("Q = C*m*(T2 - T1)", "T2", (known) => known.T1 + known.Q / (known.C * known.m));
    registerFormulaSolver("Q = C*m*(T2 - T1)", "T1", (known) => known.T2 - known.Q / (known.C * known.m));

    // Q = λ*m
    registerFormulaSolver("Q = λ*m", "Q", (known) => known.λ * known.m);
    registerFormulaSolver("Q = λ*m", "λ", (known) => known.Q / known.m);
    registerFormulaSolver("Q = λ*m", "m", (known) => known.Q / known.λ);

    // Q = L*m
    registerFormulaSolver("Q = L*m", "Q", (known) => known.L * known.m);
    registerFormulaSolver("Q = L*m", "L", (known) => known.Q / known.m);
    registerFormulaSolver("Q = L*m", "m", (known) => known.Q / known.L);

    // Q = q*m
    registerFormulaSolver("Q = q*m", "Q", (known) => known.q * known.m);
    registerFormulaSolver("Q = q*m", "q", (known) => known.Q / known.m);
    registerFormulaSolver("Q = q*m", "m", (known) => known.Q / known.q);

    // P*V = (m/M)*R*T
    registerFormulaSolver("P*V = (m/M)*R*T", "P", (known) => (known.m / known.M) * known.R * known.T / known.V);
    registerFormulaSolver("P*V = (m/M)*R*T", "V", (known) => (known.m / known.M) * known.R * known.T / known.P);
    registerFormulaSolver("P*V = (m/M)*R*T", "m", (known) => known.P * known.V * known.M / (known.R * known.T));
    registerFormulaSolver("P*V = (m/M)*R*T", "M", (known) => known.m * known.R * known.T / (known.P * known.V));
    registerFormulaSolver("P*V = (m/M)*R*T", "R", (known) => known.P * known.V * known.M / (known.m * known.T));
    registerFormulaSolver("P*V = (m/M)*R*T", "T", (known) => known.P * known.V * known.M / (known.m * known.R));

    // ΔU = A + Q
    registerFormulaSolver("ΔU = A + Q", "ΔU", (known) => known.A + known.Q);
    registerFormulaSolver("ΔU = A + Q", "A", (known) => known.ΔU - known.Q);
    registerFormulaSolver("ΔU = A + Q", "Q", (known) => known.ΔU - known.A);

    // η = (Q1 - Q2)/Q1
    registerFormulaSolver("η = (Q1 - Q2)/Q1", "η", (known) => (known.Q1 - known.Q2) / known.Q1);
    registerFormulaSolver("η = (Q1 - Q2)/Q1", "Q1", (known) => known.Q2 / (1 - known.η));
    registerFormulaSolver("η = (Q1 - Q2)/Q1", "Q2", (known) => known.Q1 * (1 - known.η));

    // η = (T1 - T2)/T1
    registerFormulaSolver("η = (T1 - T2)/T1", "η", (known) => (known.T1 - known.T2) / known.T1);
    registerFormulaSolver("η = (T1 - T2)/T1", "T1", (known) => known.T2 / (1 - known.η));
    registerFormulaSolver("η = (T1 - T2)/T1", "T2", (known) => known.T1 * (1 - known.η));

    // ---------- Электродинамика ----------
    // I = U/R
    registerFormulaSolver("I = U/R", "I", (known) => known.U / known.R);
    registerFormulaSolver("I = U/R", "U", (known) => known.I * known.R);
    registerFormulaSolver("I = U/R", "R", (known) => known.U / known.I);

    // F = k*q1*q2/R^2
    registerFormulaSolver("F = k*q1*q2/R^2", "F", (known) => known.k * known.q1 * known.q2 / Math.pow(known.R, 2));
    registerFormulaSolver("F = k*q1*q2/R^2", "k", (known) => known.F * Math.pow(known.R, 2) / (known.q1 * known.q2));
    registerFormulaSolver("F = k*q1*q2/R^2", "q1", (known) => known.F * Math.pow(known.R, 2) / (known.k * known.q2));
    registerFormulaSolver("F = k*q1*q2/R^2", "q2", (known) => known.F * Math.pow(known.R, 2) / (known.k * known.q1));
    registerFormulaSolver("F = k*q1*q2/R^2", "R", (known) => Math.sqrt(known.k * known.q1 * known.q2 / known.F) * (known.rootSign || 1));

    // E = F/q
    registerFormulaSolver("E = F/q", "E", (known) => known.F / known.q);
    registerFormulaSolver("E = F/q", "F", (known) => known.E * known.q);
    registerFormulaSolver("E = F/q", "q", (known) => known.F / known.E);

    // E = k*q/R^2
    registerFormulaSolver("E = k*q/R^2", "E", (known) => known.k * known.q / Math.pow(known.R, 2));
    registerFormulaSolver("E = k*q/R^2", "k", (known) => known.E * Math.pow(known.R, 2) / known.q);
    registerFormulaSolver("E = k*q/R^2", "q", (known) => known.E * Math.pow(known.R, 2) / known.k);
    registerFormulaSolver("E = k*q/R^2", "R", (known) => Math.sqrt(known.k * known.q / known.E) * (known.rootSign || 1));

    // σ = q/S
    registerFormulaSolver("σ = q/S", "σ", (known) => known.q / known.S);
    registerFormulaSolver("σ = q/S", "q", (known) => known.σ * known.S);
    registerFormulaSolver("σ = q/S", "S", (known) => known.q / known.σ);

    // E = 2*π*k*σ
    registerFormulaSolver("E = 2*π*k*σ", "E", (known) => 2 * Math.PI * known.k * known.σ);
    registerFormulaSolver("E = 2*π*k*σ", "k", (known) => known.E / (2 * Math.PI * known.σ));
    registerFormulaSolver("E = 2*π*k*σ", "σ", (known) => known.E / (2 * Math.PI * known.k));

    // ε = E0/E
    registerFormulaSolver("ε = E0/E", "ε", (known) => known.E0 / known.E);
    registerFormulaSolver("ε = E0/E", "E0", (known) => known.ε * known.E);
    registerFormulaSolver("ε = E0/E", "E", (known) => known.E0 / known.ε);

    // W = k*q1*q2/R
    registerFormulaSolver("W = k*q1*q2/R", "W", (known) => known.k * known.q1 * known.q2 / known.R);
    registerFormulaSolver("W = k*q1*q2/R", "k", (known) => known.W * known.R / (known.q1 * known.q2));
    registerFormulaSolver("W = k*q1*q2/R", "q1", (known) => known.W * known.R / (known.k * known.q2));
    registerFormulaSolver("W = k*q1*q2/R", "q2", (known) => known.W * known.R / (known.k * known.q1));
    registerFormulaSolver("W = k*q1*q2/R", "R", (known) => known.k * known.q1 * known.q2 / known.W);

    // φ = W/q
    registerFormulaSolver("φ = W/q", "φ", (known) => known.W / known.q);
    registerFormulaSolver("φ = W/q", "W", (known) => known.φ * known.q);
    registerFormulaSolver("φ = W/q", "q", (known) => known.W / known.φ);

    // φ = k*q/R
    registerFormulaSolver("φ = k*q/R", "φ", (known) => known.k * known.q / known.R);
    registerFormulaSolver("φ = k*q/R", "k", (known) => known.φ * known.R / known.q);
    registerFormulaSolver("φ = k*q/R", "q", (known) => known.φ * known.R / known.k);
    registerFormulaSolver("φ = k*q/R", "R", (known) => known.k * known.q / known.φ);

    // U = A/q
    registerFormulaSolver("U = A/q", "U", (known) => known.A / known.q);
    registerFormulaSolver("U = A/q", "A", (known) => known.U * known.q);
    registerFormulaSolver("U = A/q", "q", (known) => known.A / known.U);

    // U = E*d
    registerFormulaSolver("U = E*d", "U", (known) => known.E * known.d);
    registerFormulaSolver("U = E*d", "E", (known) => known.U / known.d);
    registerFormulaSolver("U = E*d", "d", (known) => known.U / known.E);

    // C = q/U
    registerFormulaSolver("C = q/U", "C", (known) => known.q / known.U);
    registerFormulaSolver("C = q/U", "q", (known) => known.C * known.U);
    registerFormulaSolver("C = q/U", "U", (known) => known.q / known.C);

    // C = S*ε*ε0/d
    registerFormulaSolver("C = S*ε*ε0/d", "C", (known) => known.S * known.ε * known.ε0 / known.d);
    registerFormulaSolver("C = S*ε*ε0/d", "S", (known) => known.C * known.d / (known.ε * known.ε0));
    registerFormulaSolver("C = S*ε*ε0/d", "ε", (known) => known.C * known.d / (known.S * known.ε0));
    registerFormulaSolver("C = S*ε*ε0/d", "ε0", (known) => known.C * known.d / (known.S * known.ε));
    registerFormulaSolver("C = S*ε*ε0/d", "d", (known) => known.S * known.ε * known.ε0 / known.C);

    // W = C*U^2/2
    registerFormulaSolver("W = C*U^2/2", "W", (known) => known.C * Math.pow(known.U, 2) / 2);
    registerFormulaSolver("W = C*U^2/2", "C", (known) => 2 * known.W / Math.pow(known.U, 2));
    registerFormulaSolver("W = C*U^2/2", "U", (known) => Math.sqrt(2 * known.W / known.C) * (known.rootSign || 1));

    // I = q/t
    registerFormulaSolver("I = q/t", "I", (known) => known.q / known.t);
    registerFormulaSolver("I = q/t", "q", (known) => known.I * known.t);
    registerFormulaSolver("I = q/t", "t", (known) => known.q / known.I);

    // R = ρ*ℓ/S
    registerFormulaSolver("R = ρ*ℓ/S", "R", (known) => known.ρ * known.ℓ / known.S);
    registerFormulaSolver("R = ρ*ℓ/S", "ρ", (known) => known.R * known.S / known.ℓ);
    registerFormulaSolver("R = ρ*ℓ/S", "ℓ", (known) => known.R * known.S / known.ρ);
    registerFormulaSolver("R = ρ*ℓ/S", "S", (known) => known.ρ * known.ℓ / known.R);

    // R = R1 + R2
    registerFormulaSolver("R = R1 + R2", "R", (known) => known.R1 + known.R2);
    registerFormulaSolver("R = R1 + R2", "R1", (known) => known.R - known.R2);
    registerFormulaSolver("R = R1 + R2", "R2", (known) => known.R - known.R1);

    // U = U1 + U2
    registerFormulaSolver("U = U1 + U2", "U", (known) => known.U1 + known.U2);
    registerFormulaSolver("U = U1 + U2", "U1", (known) => known.U - known.U2);
    registerFormulaSolver("U = U1 + U2", "U2", (known) => known.U - known.U1);

    // I1 = I2
    registerFormulaSolver("I1 = I2", "I1", (known) => known.I2);
    registerFormulaSolver("I1 = I2", "I2", (known) => known.I1);

    // R = 1/(1/R1 + 1/R2)
    registerFormulaSolver("R = 1/(1/R1 + 1/R2)", "R", (known) => 1 / (1/known.R1 + 1/known.R2));
    registerFormulaSolver("R = 1/(1/R1 + 1/R2)", "R1", (known) => 1 / (1/known.R - 1/known.R2));
    registerFormulaSolver("R = 1/(1/R1 + 1/R2)", "R2", (known) => 1 / (1/known.R - 1/known.R1));

    // U1 = U2
    registerFormulaSolver("U1 = U2", "U1", (known) => known.U2);
    registerFormulaSolver("U1 = U2", "U2", (known) => known.U1);

    // I = I1 + I2
    registerFormulaSolver("I = I1 + I2", "I", (known) => known.I1 + known.I2);
    registerFormulaSolver("I = I1 + I2", "I1", (known) => known.I - known.I2);
    registerFormulaSolver("I = I1 + I2", "I2", (known) => known.I - known.I1);

    // P = I*U
    registerFormulaSolver("P = I*U", "P", (known) => known.I * known.U);
    registerFormulaSolver("P = I*U", "I", (known) => known.P / known.U);
    registerFormulaSolver("P = I*U", "U", (known) => known.P / known.I);

    // Q = I^2*R*t
    registerFormulaSolver("Q = I^2*R*t", "Q", (known) => Math.pow(known.I, 2) * known.R * known.t);
    registerFormulaSolver("Q = I^2*R*t", "I", (known) => Math.sqrt(known.Q / (known.R * known.t)) * (known.rootSign || 1));
    registerFormulaSolver("Q = I^2*R*t", "R", (known) => known.Q / (Math.pow(known.I, 2) * known.t));
    registerFormulaSolver("Q = I^2*R*t", "t", (known) => known.Q / (Math.pow(known.I, 2) * known.R));

    // I = ε/(R + r)
    registerFormulaSolver("I = ε/(R + r)", "I", (known) => known.ε / (known.R + known.r));
    registerFormulaSolver("I = ε/(R + r)", "ε", (known) => known.I * (known.R + known.r));
    registerFormulaSolver("I = ε/(R + r)", "R", (known) => known.ε / known.I - known.r);
    registerFormulaSolver("I = ε/(R + r)", "r", (known) => known.ε / known.I - known.R);

    // I = ε/r
    registerFormulaSolver("I = ε/r", "I", (known) => known.ε / known.r);
    registerFormulaSolver("I = ε/r", "ε", (known) => known.I * known.r);
    registerFormulaSolver("I = ε/r", "r", (known) => known.ε / known.I);

    // B = Fmax/(I*ℓ)
    registerFormulaSolver("B = Fmax/(I*ℓ)", "B", (known) => known.Fmax / (known.I * known.ℓ));
    registerFormulaSolver("B = Fmax/(I*ℓ)", "Fmax", (known) => known.B * known.I * known.ℓ);
    registerFormulaSolver("B = Fmax/(I*ℓ)", "I", (known) => known.Fmax / (known.B * known.ℓ));
    registerFormulaSolver("B = Fmax/(I*ℓ)", "ℓ", (known) => known.Fmax / (known.B * known.I));

    // Fa = I*B*ℓ*sin(α)
    registerFormulaSolver("Fa = I*B*ℓ*sin(α)", "Fa", (known) => known.I * known.B * known.ℓ * Math.sin(known.α));
    registerFormulaSolver("Fa = I*B*ℓ*sin(α)", "I", (known) => known.Fa / (known.B * known.ℓ * Math.sin(known.α)));
    registerFormulaSolver("Fa = I*B*ℓ*sin(α)", "B", (known) => known.Fa / (known.I * known.ℓ * Math.sin(known.α)));
    registerFormulaSolver("Fa = I*B*ℓ*sin(α)", "ℓ", (known) => known.Fa / (known.I * known.B * Math.sin(known.α)));
    registerFormulaSolver("Fa = I*B*ℓ*sin(α)", "α", (known) => Math.asin(known.Fa / (known.I * known.B * known.ℓ)));

    // Fл = B*q*υ*sin(α)
    registerFormulaSolver("Fл = B*q*υ*sin(α)", "Fл", (known) => known.B * known.q * known.υ * Math.sin(known.α));
    registerFormulaSolver("Fл = B*q*υ*sin(α)", "B", (known) => known.Fл / (known.q * known.υ * Math.sin(known.α)));
    registerFormulaSolver("Fл = B*q*υ*sin(α)", "q", (known) => known.Fл / (known.B * known.υ * Math.sin(known.α)));
    registerFormulaSolver("Fл = B*q*υ*sin(α)", "υ", (known) => known.Fл / (known.B * known.q * Math.sin(known.α)));
    registerFormulaSolver("Fл = B*q*υ*sin(α)", "α", (known) => Math.asin(known.Fл / (known.B * known.q * known.υ)));

    // Ф = B*S*cos(α)
    registerFormulaSolver("Ф = B*S*cos(α)", "Ф", (known) => known.B * known.S * Math.cos(known.α));
    registerFormulaSolver("Ф = B*S*cos(α)", "B", (known) => known.Ф / (known.S * Math.cos(known.α)));
    registerFormulaSolver("Ф = B*S*cos(α)", "S", (known) => known.Ф / (known.B * Math.cos(known.α)));
    registerFormulaSolver("Ф = B*S*cos(α)", "α", (known) => Math.acos(known.Ф / (known.B * known.S)));

    // Ф = L*I
    registerFormulaSolver("Ф = L*I", "Ф", (known) => known.L * known.I);
    registerFormulaSolver("Ф = L*I", "L", (known) => known.Ф / known.I);
    registerFormulaSolver("Ф = L*I", "I", (known) => known.Ф / known.L);

    // Ei = ΔФ/Δt
    registerFormulaSolver("Ei = ΔФ/Δt", "Ei", (known) => known.ΔФ / known.Δt);
    registerFormulaSolver("Ei = ΔФ/Δt", "ΔФ", (known) => known.Ei * known.Δt);
    registerFormulaSolver("Ei = ΔФ/Δt", "Δt", (known) => known.ΔФ / known.Ei);

    // Ei = B*ℓ*υ*sin(α)
    registerFormulaSolver("Ei = B*ℓ*υ*sin(α)", "Ei", (known) => known.B * known.ℓ * known.υ * Math.sin(known.α));
    registerFormulaSolver("Ei = B*ℓ*υ*sin(α)", "B", (known) => known.Ei / (known.ℓ * known.υ * Math.sin(known.α)));
    registerFormulaSolver("Ei = B*ℓ*υ*sin(α)", "ℓ", (known) => known.Ei / (known.B * known.υ * Math.sin(known.α)));
    registerFormulaSolver("Ei = B*ℓ*υ*sin(α)", "υ", (known) => known.Ei / (known.B * known.ℓ * Math.sin(known.α)));
    registerFormulaSolver("Ei = B*ℓ*υ*sin(α)", "α", (known) => Math.asin(known.Ei / (known.B * known.ℓ * known.υ)));

    // Esi = -L*ΔI/Δt
    registerFormulaSolver("Esi = -L*ΔI/Δt", "Esi", (known) => -known.L * known.ΔI / known.Δt);
    registerFormulaSolver("Esi = -L*ΔI/Δt", "L", (known) => -known.Esi * known.Δt / known.ΔI);
    registerFormulaSolver("Esi = -L*ΔI/Δt", "ΔI", (known) => -known.Esi * known.Δt / known.L);
    registerFormulaSolver("Esi = -L*ΔI/Δt", "Δt", (known) => -known.L * known.ΔI / known.Esi);

    // Wм = L*I^2/2
    registerFormulaSolver("Wм = L*I^2/2", "Wм", (known) => known.L * Math.pow(known.I, 2) / 2);
    registerFormulaSolver("Wм = L*I^2/2", "L", (known) => 2 * known.Wм / Math.pow(known.I, 2));
    registerFormulaSolver("Wм = L*I^2/2", "I", (known) => Math.sqrt(2 * known.Wм / known.L) * (known.rootSign || 1));

    // ---------- Колебания и волны ----------
    // T = 2*π*√(ℓ/g)
    registerFormulaSolver("T = 2*π*√(ℓ/g)", "T", (known) => 2 * Math.PI * Math.sqrt(known.ℓ / known.g));
    registerFormulaSolver("T = 2*π*√(ℓ/g)", "ℓ", (known) => Math.pow(known.T / (2 * Math.PI), 2) * known.g);
    registerFormulaSolver("T = 2*π*√(ℓ/g)", "g", (known) => Math.pow(2 * Math.PI / known.T, 2) * known.ℓ);

    // T = 2*π*√(m/k)
    registerFormulaSolver("T = 2*π*√(m/k)", "T", (known) => 2 * Math.PI * Math.sqrt(known.m / known.k));
    registerFormulaSolver("T = 2*π*√(m/k)", "m", (known) => Math.pow(known.T / (2 * Math.PI), 2) * known.k);
    registerFormulaSolver("T = 2*π*√(m/k)", "k", (known) => Math.pow(2 * Math.PI / known.T, 2) * known.m);

    // X = Xmax*cos(ω*t)
    registerFormulaSolver("X = Xmax*cos(ω*t)", "X", (known) => known.Xmax * Math.cos(known.ω * known.t));
    registerFormulaSolver("X = Xmax*cos(ω*t)", "Xmax", (known) => known.X / Math.cos(known.ω * known.t));
    registerFormulaSolver("X = Xmax*cos(ω*t)", "ω", (known) => Math.acos(known.X / known.Xmax) / known.t);
    registerFormulaSolver("X = Xmax*cos(ω*t)", "t", (known) => Math.acos(known.X / known.Xmax) / known.ω);

    // λ = υ*T
    registerFormulaSolver("λ = υ*T", "λ", (known) => known.υ * known.T);
    registerFormulaSolver("λ = υ*T", "υ", (known) => known.λ / known.T);
    registerFormulaSolver("λ = υ*T", "T", (known) => known.λ / known.υ);

    // T = 2*π*√(L*C)
    registerFormulaSolver("T = 2*π*√(L*C)", "T", (known) => 2 * Math.PI * Math.sqrt(known.L * known.C));
    registerFormulaSolver("T = 2*π*√(L*C)", "L", (known) => Math.pow(known.T / (2 * Math.PI), 2) / known.C);
    registerFormulaSolver("T = 2*π*√(L*C)", "C", (known) => Math.pow(known.T / (2 * Math.PI), 2) / known.L);

    // XL = 2*π*L*ν
    registerFormulaSolver("XL = 2*π*L*ν", "XL", (known) => 2 * Math.PI * known.L * known.ν);
    registerFormulaSolver("XL = 2*π*L*ν", "L", (known) => known.XL / (2 * Math.PI * known.ν));
    registerFormulaSolver("XL = 2*π*L*ν", "ν", (known) => known.XL / (2 * Math.PI * known.L));

    // Xc = 1/(2*π*ν*C)
    registerFormulaSolver("Xc = 1/(2*π*ν*C)", "Xc", (known) => 1 / (2 * Math.PI * known.ν * known.C));
    registerFormulaSolver("Xc = 1/(2*π*ν*C)", "ν", (known) => 1 / (2 * Math.PI * known.Xc * known.C));
    registerFormulaSolver("Xc = 1/(2*π*ν*C)", "C", (known) => 1 / (2 * Math.PI * known.ν * known.Xc));

    // Iд = Imax/√(2)
    registerFormulaSolver("Iд = Imax/√(2)", "Iд", (known) => known.Imax / Math.sqrt(2));
    registerFormulaSolver("Iд = Imax/√(2)", "Imax", (known) => known.Iд * Math.sqrt(2));

    // Uд = Umax/√(2)
    registerFormulaSolver("Uд = Umax/√(2)", "Uд", (known) => known.Umax / Math.sqrt(2));
    registerFormulaSolver("Uд = Umax/√(2)", "Umax", (known) => known.Uд * Math.sqrt(2));

    // Z = √((Xc - XL)^2 + R^2)
    registerFormulaSolver("Z = √((Xc - XL)^2 + R^2)", "Z", (known) => Math.sqrt(Math.pow(known.Xc - known.XL, 2) + Math.pow(known.R, 2)));
    registerFormulaSolver("Z = √((Xc - XL)^2 + R^2)", "Xc", (known) => known.XL + Math.sqrt(Math.pow(known.Z, 2) - Math.pow(known.R, 2)));
    registerFormulaSolver("Z = √((Xc - XL)^2 + R^2)", "XL", (known) => known.Xc - Math.sqrt(Math.pow(known.Z, 2) - Math.pow(known.R, 2)));
    registerFormulaSolver("Z = √((Xc - XL)^2 + R^2)", "R", (known) => Math.sqrt(Math.pow(known.Z, 2) - Math.pow(known.Xc - known.XL, 2)));

    // ---------- Оптика ----------
    // n21 = n2/n1
    registerFormulaSolver("n21 = n2/n1", "n21", (known) => known.n2 / known.n1);
    registerFormulaSolver("n21 = n2/n1", "n2", (known) => known.n21 * known.n1);
    registerFormulaSolver("n21 = n2/n1", "n1", (known) => known.n2 / known.n21);

    // n21 = sin(α)/sin(γ)
    registerFormulaSolver("n21 = sin(α)/sin(γ)", "n21", (known) => Math.sin(known.α) / Math.sin(known.γ));
    registerFormulaSolver("n21 = sin(α)/sin(γ)", "α", (known) => Math.asin(known.n21 * Math.sin(known.γ)));
    registerFormulaSolver("n21 = sin(α)/sin(γ)", "γ", (known) => Math.asin(Math.sin(known.α) / known.n21));

    // 1/F = 1/d + 1/f
    registerFormulaSolver("1/F = 1/d + 1/f", "F", (known) => 1 / (1/known.d + 1/known.f));
    registerFormulaSolver("1/F = 1/d + 1/f", "d", (known) => 1 / (1/known.F - 1/known.f));
    registerFormulaSolver("1/F = 1/d + 1/f", "f", (known) => 1 / (1/known.F - 1/known.d));

    // D = 1/F
    registerFormulaSolver("D = 1/F", "D", (known) => 1 / known.F);
    registerFormulaSolver("D = 1/F", "F", (known) => 1 / known.D);

    // Δd = k*λ
    registerFormulaSolver("Δd = k*λ", "Δd", (known) => known.k * known.λ);
    registerFormulaSolver("Δd = k*λ", "k", (known) => known.Δd / known.λ);
    registerFormulaSolver("Δd = k*λ", "λ", (known) => known.Δd / known.k);

    // Δd = (2k+1)*λ/2
    registerFormulaSolver("Δd = (2k+1)*λ/2", "Δd", (known) => (2*known.k + 1) * known.λ / 2);
    registerFormulaSolver("Δd = (2k+1)*λ/2", "k", (known) => (2*known.Δd / known.λ - 1) / 2);
    registerFormulaSolver("Δd = (2k+1)*λ/2", "λ", (known) => 2 * known.Δd / (2*known.k + 1));

    // d*sin(φ) = k*λ
    registerFormulaSolver("d*sin(φ) = k*λ", "d", (known) => known.k * known.λ / Math.sin(known.φ));
    registerFormulaSolver("d*sin(φ) = k*λ", "sin(φ)", (known) => known.k * known.λ / known.d);
    registerFormulaSolver("d*sin(φ) = k*λ", "k", (known) => known.d * Math.sin(known.φ) / known.λ);
    registerFormulaSolver("d*sin(φ) = k*λ", "λ", (known) => known.d * Math.sin(known.φ) / known.k);
    registerFormulaSolver("d*sin(φ) = k*λ", "φ", (known) => Math.asin(known.k * known.λ / known.d));

    // ---------- Квантовая физика ----------
    // h*ν = Aвых + Ek
    registerFormulaSolver("h*ν = Aвых + Ek", "h", (known) => (known.Aвых + known.Ek) / known.ν);
    registerFormulaSolver("h*ν = Aвых + Ek", "ν", (known) => (known.Aвых + known.Ek) / known.h);
    registerFormulaSolver("h*ν = Aвых + Ek", "Aвых", (known) => known.h * known.ν - known.Ek);
    registerFormulaSolver("h*ν = Aвых + Ek", "Ek", (known) => known.h * known.ν - known.Aвых);

    // νк = Aвых/h
    registerFormulaSolver("νк = Aвых/h", "νк", (known) => known.Aвых / known.h);
    registerFormulaSolver("νк = Aвых/h", "Aвых", (known) => known.νк * known.h);
    registerFormulaSolver("νк = Aвых/h", "h", (known) => known.Aвых / known.νк);

    // P = h/λ
    registerFormulaSolver("P = h/λ", "P", (known) => known.h / known.λ);
    registerFormulaSolver("P = h/λ", "h", (known) => known.P * known.λ);
    registerFormulaSolver("P = h/λ", "λ", (known) => known.h / known.P);

    // P = E/c
    registerFormulaSolver("P = E/c", "P", (known) => known.E / known.c);
    registerFormulaSolver("P = E/c", "E", (known) => known.P * known.c);
    registerFormulaSolver("P = E/c", "c", (known) => known.E / known.P);

    // N = N0*2^(-t/T)
    registerFormulaSolver("N = N0*2^(-t/T)", "N", (known) => known.N0 * Math.pow(2, -known.t / known.T));
    registerFormulaSolver("N = N0*2^(-t/T)", "N0", (known) => known.N / Math.pow(2, -known.t / known.T));
    registerFormulaSolver("N = N0*2^(-t/T)", "t", (known) => -known.T * Math.log2(known.N / known.N0));
    registerFormulaSolver("N = N0*2^(-t/T)", "T", (known) => -known.t / Math.log2(known.N / known.N0));

    // Eсв = (Z*mp + N*mn - Mя)*c^2
    registerFormulaSolver("Eсв = (Z*mp + N*mn - Mя)*c^2", "Eсв", (known) => (known.Z * known.mp + known.N * known.mn - known.Mя) * Math.pow(known.c, 2));
    registerFormulaSolver("Eсв = (Z*mp + N*mn - Mя)*c^2", "Z", (known) => (known.Eсв / Math.pow(known.c, 2) - known.N * known.mn + known.Mя) / known.mp);
    registerFormulaSolver("Eсв = (Z*mp + N*mn - Mя)*c^2", "N", (known) => (known.Eсв / Math.pow(known.c, 2) - known.Z * known.mp + known.Mя) / known.mn);
    registerFormulaSolver("Eсв = (Z*mp + N*mn - Mя)*c^2", "Mя", (known) => known.Z * known.mp + known.N * known.mn - known.Eсв / Math.pow(known.c, 2));
    registerFormulaSolver("Eсв = (Z*mp + N*mn - Mя)*c^2", "c", (known) => Math.sqrt(known.Eсв / (known.Z * known.mp + known.N * known.mn - known.Mя)));

    // ---------- СТО ----------
    // t = t1/√(1 - υ^2/c^2)
    registerFormulaSolver("t = t1/√(1 - υ^2/c^2)", "t", (known) => known.t1 / Math.sqrt(1 - Math.pow(known.υ, 2) / Math.pow(known.c, 2)));
    registerFormulaSolver("t = t1/√(1 - υ^2/c^2)", "t1", (known) => known.t * Math.sqrt(1 - Math.pow(known.υ, 2) / Math.pow(known.c, 2)));
    registerFormulaSolver("t = t1/√(1 - υ^2/c^2)", "υ", (known) => known.c * Math.sqrt(1 - Math.pow(known.t1 / known.t, 2)));
    registerFormulaSolver("t = t1/√(1 - υ^2/c^2)", "c", (known) => known.υ / Math.sqrt(1 - Math.pow(known.t1 / known.t, 2)));

    // ℓ = ℓ0*√(1 - υ^2/c^2)
    registerFormulaSolver("ℓ = ℓ0*√(1 - υ^2/c^2)", "ℓ", (known) => known.ℓ0 * Math.sqrt(1 - Math.pow(known.υ, 2) / Math.pow(known.c, 2)));
    registerFormulaSolver("ℓ = ℓ0*√(1 - υ^2/c^2)", "ℓ0", (known) => known.ℓ / Math.sqrt(1 - Math.pow(known.υ, 2) / Math.pow(known.c, 2)));
    registerFormulaSolver("ℓ = ℓ0*√(1 - υ^2/c^2)", "υ", (known) => known.c * Math.sqrt(1 - Math.pow(known.ℓ / known.ℓ0, 2)));
    registerFormulaSolver("ℓ = ℓ0*√(1 - υ^2/c^2)", "c", (known) => known.υ / Math.sqrt(1 - Math.pow(known.ℓ / known.ℓ0, 2)));

    // υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)
    registerFormulaSolver("υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)", "υ2", (known) => (known.υ1 + known.υ) / (1 + known.υ1 * known.υ / Math.pow(known.c, 2)));
    registerFormulaSolver("υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)", "υ1", (known) => (known.υ2 - known.υ) / (1 - known.υ2 * known.υ / Math.pow(known.c, 2)));
    registerFormulaSolver("υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)", "υ", (known) => (known.υ2 - known.υ1) / (1 - known.υ2 * known.υ1 / Math.pow(known.c, 2)));
    registerFormulaSolver("υ2 = (υ1 + υ)/(1 + υ1*υ/c^2)", "c", (known) => Math.sqrt(Math.abs(known.υ1 * known.υ * (known.υ2 - known.υ1 - known.υ) / (known.υ2 - known.υ1 - known.υ + 1))));

    // E = m*c^2
    registerFormulaSolver("E = m*c^2", "E", (known) => known.m * Math.pow(known.c, 2));
    registerFormulaSolver("E = m*c^2", "m", (known) => known.E / Math.pow(known.c, 2));
    registerFormulaSolver("E = m*c^2", "c", (known) => Math.sqrt(known.E / known.m));

}

// ---------- Функция получения решателя для блока ----------
function getSolverFunction(formulaEq, targetVar) {
    const forEq = formulaSolverRegistry.get(formulaEq);
    if (forEq?.has(targetVar)) return forEq.get(targetVar);
    let warned = false;
    return (known) => {
        if (!warned) {
            console.warn(`Функция для формулы "${formulaEq}" и переменной "${targetVar}" не реализована. Блок не будет вычислен.`);
            warned = true;
        }
        return null;
    };
}

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
        item.dataset.swappable = f.swappable;
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
let fixedValues = null; // для фиксации внешних блоков при обратном графике
let demoMenu = null;

let current = 0;
let tokensLocal = [];

const graphArea = document.getElementById('graphArea');
const rectLayer = document.getElementById('rectLayer');
const svg = document.getElementById('linesSvg');
const graphLayer = document.getElementById('graphLayer');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const connModeBtn = document.getElementById('connModeBtn');
const computeBtn = document.getElementById('computeBtn');
const helpBtn = document.getElementById('helpBtn');
const graphBtn = document.getElementById('graphBtn');
const demoBtn = document.getElementById('demoBtn');
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
                    <div class="param-output">🔒 связано</div>
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
 * Строит граф зависимостей между блоками на основе связей параметров.
 * Возвращает массив ID блоков в порядке вычисления: от источников к потребителям.
 * Если обнаружен цикл, возвращает null и выводит предупреждение.
 * @returns {number[]|null} - упорядоченный массив ID блоков или null при цикле.
 */
function getTopologicalOrder() {
    // Строим граф: для каждого блока список блоков, от которых он зависит (входные связи)
    const dependents = new Map(); // key: rectId, value: Set(rectId блоков, от которых зависит данный блок)
    const allBlocks = Array.from(rectangles.keys());
    for (let rect of rectangles.values()) {
        dependents.set(rect.id, new Set());
    }
    // Заполняем зависимости: если есть связь sourceRectId -> targetRectId (targetParam),
    // то targetRectId зависит от sourceRectId.
    for (let conn of paramConnections) {
        const src = conn.sourceRectId;
        const tgt = conn.targetRectId;
        if (src !== tgt) {
            dependents.get(tgt).add(src);
        }
    }
    
    // Алгоритм Кана (Kahn's algorithm) для топологической сортировки
    const inDegree = new Map(); // количество входящих рёбер (зависимостей, которые ещё не обработаны)
    for (let id of allBlocks) {
        inDegree.set(id, dependents.get(id).size);
    }
    // Очередь из блоков, не имеющих непроцессорных зависимостей (inDegree === 0)
    const queue = [];
    for (let id of allBlocks) {
        if (inDegree.get(id) === 0) queue.push(id);
    }
    const order = [];
    while (queue.length > 0) {
        const current = queue.shift();
        order.push(current);
        // Находим все блоки, которые зависят от current (т.е. для которых current есть в dependents)
        // Для этого нужно знать обратные связи. Можно построить отдельную карту: кто зависит от меня.
        // Построим "reverse" карту при первом проходе.
    }
    // сначала построим reverse граф (ведёт от src к списку tgt)
    const reverseGraph = new Map(); // key: srcId, value: Set(tgtId, которые зависят от srcId)
    for (let rect of rectangles.values()) {
        reverseGraph.set(rect.id, new Set());
    }
    for (let conn of paramConnections) {
        const src = conn.sourceRectId;
        const tgt = conn.targetRectId;
        if (src !== tgt) {
            reverseGraph.get(src).add(tgt);
        }
    }
    // Пересчитаем inDegree заново с учётом только рёбер, не ведущих к себе
    const inDegree2 = new Map();
    for (let id of allBlocks) {
        inDegree2.set(id, 0);
    }
    for (let conn of paramConnections) {
        if (conn.sourceRectId !== conn.targetRectId) {
            inDegree2.set(conn.targetRectId, inDegree2.get(conn.targetRectId) + 1);
        }
    }
    const queue2 = [];
    for (let id of allBlocks) {
        if (inDegree2.get(id) === 0) queue2.push(id);
    }
    const order2 = [];
    while (queue2.length > 0) {
        const current = queue2.shift();
        order2.push(current);
        const children = reverseGraph.get(current) || new Set();
        for (let child of children) {
            const newDeg = inDegree2.get(child) - 1;
            inDegree2.set(child, newDeg);
            if (newDeg === 0) queue2.push(child);
        }
    }
    if (order2.length !== allBlocks.length) {
        console.warn("Обнаружен цикл в зависимостях блоков");
        return null; // цикл
    }
    return order2;
}

/**
 * Вычисляет все блоки, используя предварительно вычисленный порядок (топологическую сортировку).
 * Если порядок не может быть построен (цикл), выводит сообщение и возвращает false.
 * @returns {boolean} - true, если все доступные блоки успешно вычислены (или вычислены частично при константах), false при цикле.
 */
function computeAll() {
    // Сброс значений
    for (let rect of rectangles.values()) {
        rect.computedValue = null;
        const targetSpan = rect.element.querySelector('.target-value');
        if (targetSpan) targetSpan.innerText = '?';
    }
    
    const order = getTopologicalOrder();
    if (order === null) {
        alert("Ошибка: обнаружена циклическая зависимость между блоками. Исправьте связи.");
        return false;
    }
    
    // Вычисляем в топологическом порядке
    for (let rectId of order) {
        const rect = rectangles.get(rectId);
        if (!rect) continue;
        
        let allInputsReady = true;
        const inputValues = {};
        for (let v of rect.vars) {
            if (v === rect.targetVar) continue;
            const conn = paramConnections.find(c => c.targetRectId === rect.id && c.targetParam === v);
            if (conn) {
                const sourceRect = rectangles.get(conn.sourceRectId);
                if (sourceRect && sourceRect.computedValue !== null) {
                    inputValues[v] = sourceRect.computedValue;
                } else {
                    allInputsReady = false;
                    break;
                }
            } else {
                const manualVal = rect.manualValues[v];
                if (manualVal !== undefined && manualVal.trim() !== '' && !isNaN(parseFloat(manualVal))) {
                    inputValues[v] = parseFloat(manualVal);
                } else {
                    allInputsReady = false;
                    break;
                }
            }
        }
        if (!allInputsReady) continue;
        
        try {
            if (rect.solverFunc) {
                inputValues.rootSign = rect.rootSign;
                const result = rect.solverFunc(inputValues);
                if (result !== null && isFinite(result)) {
                    rect.computedValue = result;
                    const targetSpan = rect.element.querySelector('.target-value');
                    if (targetSpan) targetSpan.innerText = result.toFixed(4);
                }
            }
        } catch(e) {
            console.warn(`Ошибка вычисления блока ${rect.id}:`, e);
        }
    }
    
    // Обновляем отображение связанных входов
    for (let rect of rectangles.values()) {
        for (let v of rect.vars) {
            if (v === rect.targetVar) continue;
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
    return true;
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
function createFormulaBlock(formulaEq, formulaName, varsArray, isSwappable, left, top, id = null, targetVarOverride = null, manualValuesOverride = null) {
    const rectId = id === null ? nextRectId++ : id;
    
    let targetVar = targetVarOverride;
    if (!targetVar || !varsArray.includes(targetVar)) {
        targetVar = varsArray[0];
    }
    
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
                    <div class="param-value"><div class="param-output">🔒 связано</div></div>
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
    
    const isQuadratic = formulaEq.includes('^2') || formulaEq.includes('**2');
    const extraControls = isQuadratic ? `
        <div class="root-sign-control">
            <a class="root-sign-btn" data-sign="1">ВЕТКА ➕</a>
            <a class="root-sign-btn" data-sign="-1">ВЕТКА ➖</a>
        </div>
    ` : '';
    
    rectDiv.innerHTML = `
        <div class="card-header">
            <div class="formula-text">${escapeHtml(formulaEq)}</div>
            <div class="delete-card">❌</div>
        </div>
        <div class="params-list" id="params-${rectId}">
            ${paramsHtml}
        </div>
        <div class="target-area" data-target-var="${targetVar}">
            <div class="target-output">
                <div class="target-symbol">${targetVar}</div>
                <div class="target-value">?</div>
            </div>
            ${extraControls}
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
        swappable: isSwappable,
        targetVar: targetVar,
        manualValues: manualValues,
        connections: {},
        computedValue: null,
        rootSign: 1,
        solverFunc: getSolverFunction(formulaEq, targetVar, false, null)
    };
    rectangles.set(rectId, rectData);
    
    // Обработчики
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
    if (rectData.swappable === 1){
        targetArea.addEventListener('click', (e) => {
            if (paramConnections.some(c => c.sourceRectId === rectData.id)) {
                alert("Смена параметров невозможна при наличии исходящих соединений!");
                return;
            }
            if (paramConnections.some(c => c.targetRectId === rectData.id)) {
                alert("Смена параметров невозможна при наличии входящих соединений!");
                return;
            }
            if (e.target === targetPort) return;
            const idx = rectData.vars.indexOf(rectData.targetVar);
            const nextIdx = (idx + 1) % rectData.vars.length;
            const newTarget = rectData.vars[nextIdx];
            const newSolver = getSolverFunction(rectData.formulaEq, newTarget, false, null);
            if (newSolver === null || newSolver.toString().includes('заглушка')) {
                alert(`Функция для переменной ${newTarget} в формуле ${rectData.formulaEq} ещё не реализована.`);
                return;
            }
            rectData.targetVar = newTarget;
            rectData.solverFunc = newSolver;
            const symSpan = targetArea.querySelector('.target-symbol');
            if (symSpan) symSpan.innerText = newTarget;
            rebuildParamsList(rectData);
        });
    } else {
        targetArea.style.cursor = 'default';
        targetArea.style.backgroundColor = '#e2e8f0';
    }
    
    // Ручной ввод
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
    
    // Переключатель знака для квадратных уравнений
    if (isQuadratic) {
        const signBtns = rectDiv.querySelectorAll('.root-sign-btn');
        signBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const sign = parseInt(btn.dataset.sign);
                rectData.rootSign = sign;
                signBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                console.log(`Выбран знак ${sign} для блока ${rectId}`);
                computeAll();
            });
        });
        const defaultBtn = rectDiv.querySelector(`.root-sign-btn[data-sign="${rectData.rootSign}"]`);
        if (defaultBtn) defaultBtn.classList.add('active');
    }
    
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
    const blockData = graphBlocks.get(blockId);
    if (!blockData) return;
    if (blockData.observer) blockData.observer.disconnect();
    if (blockData.element) blockData.element.remove();
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
                vars: JSON.parse(el.dataset.vars),
                swappable: parseInt(el.dataset.swappable)
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
        // Все блоки создаём одинаково
        createFormulaBlock(data.eq, data.name, data.vars, data.swappable, x, y);
        redrawParamLines();
    });
}

function closeDemoMenu() {
    if (demoMenu && demoMenu.parentNode) demoMenu.remove();
    demoMenu = null;
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
    paramConnections = [];
    for (let rect of rectangles.values()){
        rebuildParamsList(rect);
        deleteRectangle(rect.id);
    }
    for (let block of graphBlocks.values()){
        deleteGraphBlock(block.id);
    }
    updateParamConnectionsList();
    redrawParamLines();
}

function serializeState() {
    const blocks = [];
    for (let rect of rectangles.values()) {
        const rectEl = rect.element;
        blocks.push({
            id: rect.id,
            formulaEq: rect.formulaEq || '',
            formulaName: rect.formulaName,
            vars: rect.vars,
            swappable: rect.swappable,
            left: Number.parseFloat(rectEl.style.left),
            top: Number.parseFloat(rectEl.style.top),
            targetVar: rect.targetVar,
            manualValues: rect.manualValues,
            rootSign: rect.rootSign
        });
    }
    
    const graphs = [];
    for (let [id, blockData] of graphBlocks.entries()) {
        if (blockData.startSpec && blockData.endSpec) {
            graphs.push({
                startSpec: blockData.startSpec,
                endSpec: blockData.endSpec,
                left: parseFloat(blockData.element.style.left),
                top: parseFloat(blockData.element.style.top),
                xMin: blockData.state.xMin,
                xMax: blockData.state.xMax,
                yMin: blockData.state.yMin,
                yMax: blockData.state.yMax,
                isInverse: blockData.isInverse || false
            });
        }
    }
    
    return {
        version: "2.0",
        blocks: blocks,
        paramConnections: paramConnections,
        nextRectId: nextRectId,
        graphs: graphs
    };
}

async function deserializeState(state) {
    if (!state?.blocks || !state.paramConnections) {
        alert("Неверный формат файла");
        return false;
    }
    
    clearWorkspace();
    nextRectId = state.nextRectId || 1000;
    
    // Создаём блоки формул
    for (let block of state.blocks) {
        createFormulaBlock(
            block.formulaEq,
            block.formulaName,
            block.vars,
            block.swappable,
            block.left,
            block.top,
            block.id,
            block.targetVar,
            block.manualValues
        );
        const rect = rectangles.get(block.id);
        if (rect && block.rootSign !== undefined) {
            rect.rootSign = block.rootSign;
            const signBtns = rect.element.querySelectorAll('.root-sign-btn');
            signBtns.forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.dataset.sign) === block.rootSign) btn.classList.add('active');
            });
        }
    }
    
    // Восстанавливаем связи
    for (let conn of state.paramConnections) {
        if (rectangles.has(conn.sourceRectId) && rectangles.has(conn.targetRectId)) {
            paramConnections.push({ ...conn });
            const targetRect = rectangles.get(conn.targetRectId);
            if (targetRect) rebuildParamsList(targetRect);
        } else {
            console.warn("Пропущена связь", conn);
        }
    }
    updateParamConnectionsList();
    redrawParamLines();
    computeAll();
    
    // Небольшая задержка для полного обновления DOM перед созданием графиков
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Восстанавливаем графики
    if (state.graphs?.length) {
        for (let g of state.graphs) {
            const { startSpec, endSpec, left, top, xMin, xMax, yMin, yMax, isInverse } = g;
            if (rectangles.has(startSpec.rectId) && rectangles.has(endSpec.rectId)) {
                let newBlockId;
                if (isInverse) {
                    const targetMap = getInversePath(startSpec, endSpec);
                    if (!targetMap) {
                        console.warn("Не удалось восстановить обратный график, путь не найден");
                        continue;
                    }
                    newBlockId = await buildInverseGraph(startSpec, endSpec, targetMap, left, top);
                } else {
                    newBlockId = await buildGraph(startSpec, endSpec, left, top);
                }
                const blockData = graphBlocks.get(newBlockId);
                if (blockData) {
                    blockData.state.xMin = xMin;
                    blockData.state.xMax = xMax;
                    blockData.state.yMin = yMin;
                    blockData.state.yMax = yMax;
                    blockData.redraw();
                }
            } else {
                console.warn("График не восстановлен: отсутствуют блоки", startSpec, endSpec);
            }
        }
    }
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
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (ev) => {
            try {
                const state = JSON.parse(ev.target.result);
                await deserializeState(state);
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
    let content = `
        <p><strong>Конструктор формул</strong> – интерактивная среда для сборки, вычисления и визуализации физических формул. Программа использует аналитические вычисления (без численных методов), поддерживает многозначные зависимости (квадратные корни, обратные тригонометрические функции) и позволяет строить графики для любых цепочек блоков в прямом и обратном направлении.</p>

        <h3>1. Добавление блоков</h3>
        <ul>
            <li>Библиотека формул слева разбита на разделы (Механика, Термодинамика, Электродинамика и т.д.).</li>
            <li>Перетащите нужную формулу мышкой на рабочую область – появится карточка с параметрами.</li>
            <li>Карточка содержит:
                <ul>
                    <li>строку формулы (например, <code>F = m * a</code>);</li>
                    <li>синие кружки – входные параметры (можно задать число или связать с другим блоком);</li>
                    <li>оранжевый кружок – выходной (вычисляемый) параметр;</li>
                    <li>для квадратных уравнений – переключатель <strong>«+ ветка» / «- ветка»</strong> (выбор знака корня).</li>
                </ul>
            </li>
        </ul>

        <h3>2. Перемещение и удаление блоков</h3>
        <ul>
            <li><strong>Перетаскивание:</strong> зажмите левую кнопку на свободной области карточки (не на кружках и не на полях ввода).</li>
            <li><strong>Удаление:</strong> нажмите крестик (❌) в заголовке карточки.</li>
        </ul>

        <h3>3. Связывание параметров (передача данных)</h3>
        <ul>
            <li>Нажмите кнопку <strong>«Режим связи (OFF→ON)»</strong>.</li>
            <li>Сначала кликните на <strong>оранжевый кружок</strong> (выход) в одном блоке, затем на <strong>синий кружок</strong> (вход) в другом.</li>
            <li>Между блоками появится пунктирная линия → значение из выходного параметра будет автоматически передаваться во входной.</li>
            <li><strong>Важно:</strong> выходной параметр может быть связан только с одним входом. Если параметр уже связан, удалите связь в нижней панели.</li>
            <li>Все активные связи отображаются внизу слева – их можно удалять по отдельности или все сразу кнопкой «Удалить все».</li>
            <li>Для выхода из режима связи нажмите кнопку ещё раз (станет OFF).</li>
        </ul>

        <h3>4. Ввод чисел</h3>
        <ul>
            <li>У каждого входного параметра есть поле ввода. Введите число (разделитель – точка).</li>
            <li>Если параметр связан с выходом другого блока, поле становится недоступным и отображает переданное значение.</li>
        </ul>

        <h3>5. Смена целевой переменной (что вычисляет блок)</h3>
        <ul>
            <li>По умолчанию блок решает уравнение относительно первого параметра (например, <code>F = m*a</code> вычисляет <code>F</code>).</li>
            <li><strong>Кликните по серой области</strong> с названием выходного параметра – целевая переменная циклически переключится на следующий параметр формулы (если для него зарегистрирована аналитическая функция).</li>
            <li>Поля ввода для остальных переменных автоматически обновятся.</li>
        </ul>

        <h3>6. Вычисление всех блоков</h3>
        <ul>
            <li>Нажмите кнопку <strong>«ВЫЧИСЛИТЬ»</strong>. Программа определит порядок вычислений (топологическую сортировку), подставит известные значения и мгновенно получит результаты.</li>
            <li>Вычисленное значение отображается рядом с выходным параметром (оранжевый кружок).</li>
            <li>Если данных недостаточно или возникает ошибка, отображается «?».</li>
        </ul>

        <h3>7. Построение графиков</h3>
        <ul>
            <li>Нажмите кнопку <strong>«График»</strong>. Активируется режим выбора параметров.</li>
            <li><strong>Сначала кликните на синий кружок</strong> – это будет независимая переменная (X).</li>
            <li><strong>Затем кликните на любой кружок (синий или оранжевый)</strong> – это будет зависимая переменная (Y).</li>
            <li>Программа автоматически построит график <strong>Y = f(X)</strong>. Для неоднозначных зависимостей (квадратные корни, квадратные уравнения) будут нарисованы <strong>все возможные ветки</strong> разными цветами.</li>
            <li>В блоке графика доступны:
                <ul>
                    <li><strong>Панорамирование:</strong> зажмите правую кнопку мыши и двигайте.</li>
                    <li><strong>Масштабирование:</strong> крутите колёсико мыши.</li>
                    <li><strong>Смена зависимости:</strong> нажмите кнопку 🔄 инверсия – график перестроится в обратную сторону: <strong>X = g(Y)</strong> (если аналитически возможно).</li>
                    <li><strong>Закрытие:</strong> крестик в заголовке.</li>
                </ul>
            </li>
            <li>Если обратная зависимость не существует (нет пути в графе связей), программа покажет предупреждение.</li>
            <li>Чтобы выйти из режима выбора параметров, снова нажмите кнопку «График» (она станет неактивной).</li>
        </ul>

        <h3>8. Сохранение и загрузка проекта</h3>
        <ul>
            <li><strong>«СОХРАНИТЬ»:</strong> скачивает JSON‑файл со всеми блоками формул, связями, графиками (включая их позицию, масштаб и тип зависимости).</li>
            <li><strong>«ЗАГРУЗИТЬ»:</strong> позволяет выбрать ранее сохранённый файл и полностью восстановить рабочую среду.</li>
        </ul>

        <h3>9. Демо‑примеры</h3>
        <ul>
            <li>Нажмите кнопку <strong>«ДЕМО»</strong> – откроется список предустановленных конфигураций.</li>
            <li>Выберите любой пункт – программа загрузит соответствующие блоки, связи и графики.</li>
            <li>Это удобный способ изучить возможности программы и быстро начать работу.</li>
        </ul>

        <h3>10. Советы и ограничения</h3>
        <ul>
            <li>Все формулы решаются аналитически – если для выбранной переменной нет явной функции, блок не вычислится (появится сообщение в консоли).</li>
            <li>Для квадратных уравнений доступен выбор ветки (переключатель в блоке) – он влияет как на вычисления, так и на форму графика.</li>
            <li>При обратной зависимости блоки, не лежащие на главном пути, фиксируются один раз и не пересчитываются – это обеспечивает корректность и быстроту.</li>
            <li>Если график содержит выбросы (бесконечные значения), линии автоматически разрываются.</li>
            <li>Рекомендуем использовать современный браузер (Chrome, Firefox, Edge) для лучшей производительности.</li>
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
        width: 200%;
        max-height: 90vh;
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

function getInversePath(startSpec, endSpec) {
    const startRect = rectangles.get(startSpec.rectId);
    const endRect = rectangles.get(endSpec.rectId);
    if (!startRect || !endRect) return null;
    
    // Строим граф: узлы – (rectId, paramName)
    const nodes = new Map();
    for (let rect of rectangles.values()) {
        for (let v of rect.vars) {
            const key = `${rect.id}:${v}`;
            nodes.set(key, { rect, param: v });
        }
    }
    const edges = new Map();
    for (let key of nodes.keys()) edges.set(key, new Set());
    
    // 1. Рёбра по связям paramConnections
    for (let conn of paramConnections) {
        const fromKey = `${conn.sourceRectId}:${conn.sourceParam}`;
        const toKey = `${conn.targetRectId}:${conn.targetParam}`;
        if (nodes.has(fromKey) && nodes.has(toKey)) {
            edges.get(fromKey).add(toKey);
            edges.get(toKey).add(fromKey);
        }
    }
    
    // 2. Рёбра внутри каждого блока (все переменные блока связаны, т.к. формула связывает их)
    for (let rect of rectangles.values()) {
        const keys = rect.vars.map(v => `${rect.id}:${v}`);
        for (let i = 0; i < keys.length; i++) {
            for (let j = i + 1; j < keys.length; j++) {
                if (nodes.has(keys[i]) && nodes.has(keys[j])) {
                    edges.get(keys[i]).add(keys[j]);
                    edges.get(keys[j]).add(keys[i]);
                }
            }
        }
    }
    
    const startKey = `${startSpec.rectId}:${startSpec.paramName}`;
    const endKey = `${endSpec.rectId}:${endSpec.paramName}`;
    if (!nodes.has(startKey) || !nodes.has(endKey)) return null;
    
    // BFS от startKey до endKey
    const queue = [startKey];
    const cameFrom = new Map();
    cameFrom.set(startKey, null);
    let found = false;
    while (queue.length && !found) {
        const curr = queue.shift();
        if (curr === endKey) {
            found = true;
            break;
        }
        for (let nb of edges.get(curr)) {
            if (!cameFrom.has(nb)) {
                cameFrom.set(nb, curr);
                queue.push(nb);
            }
        }
    }
    if (!found) return null;
    
    // Восстанавливаем путь
    const pathKeys = [];
    let currKey = endKey;
    while (currKey) {
        pathKeys.unshift(currKey);
        currKey = cameFrom.get(currKey);
    }
    
    // Для каждого блока определяем целевую переменную (последний параметр этого блока в пути)
    const targetMap = new Map(); // rectId -> targetVar
    for (const element of pathKeys) {
        const [rectId, param] = element.split(':');
        const idNum = parseInt(rectId);
        // Если следующий ключ принадлежит тому же блоку, то этот параметр – промежуточный, но в итоге для блока нужна та переменная, которая будет вычислена.
        // Упростим: запоминаем последний параметр для каждого блока в пути.
        targetMap.set(idNum, param);
    }
    
    const result = [];
    for (let [rectId, targetVar] of targetMap.entries()) {
        result.push({ rectId, targetVar });
    }
    return result;
}

/**
 * Анализирует граф для построения графика между startSpec (X) и endSpec (Y).
 * Возвращает объект:
 *   - canCompute: boolean
 *   - evalFunction: function(x) – быстро вычисляет Y по X (если canCompute true)
 *   - errorMessage: строка с ошибкой
 */
function prepareGraphEvaluation(startSpec, endSpec) {
    const startRect = rectangles.get(startSpec.rectId);
    const endRect = rectangles.get(endSpec.rectId);
    if (!startRect || !endRect) return { canCompute: false, errorMessage: "Блок не найден" };
    
    // Неориентированный граф
    const neighbors = new Map();
    for (let rect of rectangles.values()) neighbors.set(rect.id, new Set());
    for (let conn of paramConnections) {
        neighbors.get(conn.sourceRectId).add(conn.targetRectId);
        neighbors.get(conn.targetRectId).add(conn.sourceRectId);
    }
    
    // BFS от end к start
    const queue = [endRect.id];
    const cameFrom = new Map();
    cameFrom.set(endRect.id, null);
    let found = false;
    while (queue.length && !found) {
        const curr = queue.shift();
        if (curr === startRect.id) { found = true; break; }
        for (let nb of neighbors.get(curr)) {
            if (!cameFrom.has(nb)) {
                cameFrom.set(nb, curr);
                queue.push(nb);
            }
        }
    }
    if (!found) return { canCompute: false, errorMessage: "Нет пути между блоками" };
    
    // Восстанавливаем путь от start до end
    const path = [];
    let step = startRect.id;
    while (step !== null) {
        path.unshift(step);
        step = cameFrom.get(step);
    }
    const pathSet = new Set(path);
    
    // Все блоки, связанные с путём (неориентированно)
    const needed = new Set(path);
    const queueAll = [...path];
    const visitedAll = new Set(path);
    while (queueAll.length) {
        const curr = queueAll.shift();
        for (let nb of neighbors.get(curr)) {
            if (!visitedAll.has(nb)) {
                visitedAll.add(nb);
                needed.add(nb);
                queueAll.push(nb);
            }
        }
    }
    
    // Внешние блоки (не на пути)
    const externalBlocks = Array.from(needed).filter(id => !pathSet.has(id)).map(id => rectangles.get(id));
    
    // Топологический порядок для всех нужных блоков (можно BFS по уровням)
    const levels = new Map();
    const queueLevel = [startRect.id];
    levels.set(startRect.id, 0);
    while (queueLevel.length) {
        const curr = queueLevel.shift();
        for (let nb of neighbors.get(curr)) {
            if (needed.has(nb) && !levels.has(nb)) {
                levels.set(nb, levels.get(curr) + 1);
                queueLevel.push(nb);
            }
        }
    }
    
    // Неоднозначные блоки (sqrt, ^2)
    const ambiguousBlocks = [];
    for (let id of needed) {
        const rect = rectangles.get(id);
        if (rect.formulaEq && (rect.formulaEq.includes('√') || rect.formulaEq.includes('^2') || rect.formulaEq.includes('**2'))) {
            ambiguousBlocks.push(rect);
        }
    }
    
    return {
        canCompute: true,
        needed: needed,
        pathSet: pathSet,
        externalBlocks: externalBlocks,
        ambiguousBlocks: ambiguousBlocks,
        startRect: startRect,
        endRect: endRect,
        startParam: startSpec.paramName,
        endParam: endSpec.paramName
    };
}

async function buildGraph(startSpec, endSpec, leftX = 100, topY = 100) {
    const preparation = prepareGraphEvaluation(startSpec, endSpec);
    if (!preparation.canCompute) {
        alert(preparation.errorMessage);
        return;
    }
    const { needed, ambiguousBlocks, startRect, endRect } = preparation;
    
    const blockId = nextRectId++;
    const blockDiv = document.createElement('div');
    blockDiv.className = 'formula-card graph-card';
    blockDiv.style.left = (typeof leftX === 'number' ? leftX.toString() + 'px' : leftX);
    blockDiv.style.top = (typeof topY === 'number' ? topY.toString() + 'px' : topY);
    blockDiv.style.width = '550px';
    blockDiv.style.height = '550px';
    blockDiv.dataset.id = blockId;
    
    const k = ambiguousBlocks.length;
    const totalBranches = k === 0 ? 1 : (1 << k);
    const branchInfo = k > 0 ? `<span style="font-size:10px;">(${totalBranches} веток)</span>` : '';
    
    blockDiv.innerHTML = `
        <div class="card-header" style="cursor:move;">
            <div class="formula-text">График ${endSpec.paramName}(${startSpec.paramName})${branchInfo}</div>
            <div style="display:flex; gap:5px;">
                <button class="swap-dep-btn" style="background: white; border-radius: 60px; border: 1px solid #e2e8f0; border-color: black; color: black; cursor:pointer; font-size:16px;">🔄 инверсия</button>
                <div class="delete-card">❌</div>
            </div>
        </div>
        <div class="graph-canvas-wrapper" style="overflow:hidden; position:relative; height:calc(100% - 40px);">
            <canvas style="width:100%; height:100%; display:block;"></canvas>
        </div>
    `;
    graphLayer.appendChild(blockDiv);
    
    const canvas = blockDiv.querySelector('canvas');
    const wrapper = blockDiv.querySelector('.graph-canvas-wrapper');
    const pointsCount = 20000;
    const xMin = -100, xMax = 100;
    const xValues = Array.from({ length: pointsCount + 1 }, (_, i) => xMin + (i / pointsCount) * (xMax - xMin));
    
    const allSignCombinations = [];
    if (k === 0) allSignCombinations.push(new Map());
    else for (let mask = 0; mask < totalBranches; mask++) {
        const signs = new Map();
        for (let i = 0; i < k; i++) signs.set(ambiguousBlocks[i], (mask & (1 << i)) ? 1 : -1);
        allSignCombinations.push(signs);
    }
    
    const color = ['#10b981'];
    const datasets = [];
    for (const element of allSignCombinations) {
        const signs = element;
        const points = [];
        for (let x of xValues) {
            let y;
            try {
                y = computeSubgraph(startRect, startSpec.paramName, x, signs, needed, endRect, endSpec);
                if (Math.abs(y) > 1e6)
                    y = null; // разрыв при слишком больших значениях
                points.push({ x, y: (y !== null && isFinite(y)) ? y : null });
            } catch(e) { y = null; }
            points.push({ x, y: (y !== null && isFinite(y)) ? y : null });
        }
        datasets.push({ points, color });
    }
    
    const state = { xMin, xMax, yMin: -100, yMax: 100, datasets };
    const redraw = () => drawGraphInBlock(blockData);
    const blockData = {
        id: blockId, element: blockDiv, canvas, wrapper, state,
        graphContext: { xLabel: startSpec.paramName, yLabel: endSpec.paramName },
        redraw: redraw
    };
    graphBlocks.set(blockId, blockData);
    
    const resizeObserver = new ResizeObserver(() => {
        const w = wrapper.clientWidth, h = wrapper.clientHeight;
        if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
        redraw();
    });
    resizeObserver.observe(wrapper);
    blockData.observer = resizeObserver;
    setupGraphPanZoom(canvas, blockData);
    
    // Кнопка смены зависимости
    const swapBtn = blockDiv.querySelector('.swap-dep-btn');
    if (swapBtn) {
        swapBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newStart = { rectId: endSpec.rectId, paramName: endSpec.paramName, isOutput: false };
            const newEnd   = { rectId: startSpec.rectId, paramName: startSpec.paramName, isOutput: true };
            const targetMap = getInversePath(newStart, newEnd);
            if (!targetMap) {
                alert("Не удалось построить обратную зависимость (нет пути)");
                return;
            }
            const currentLeft = blockDiv.style.left;
            const currentTop = blockDiv.style.top;
            deleteGraphBlock(blockId);
            buildInverseGraph(newStart, newEnd, targetMap, currentLeft, currentTop);
        });
    }
    
    blockDiv.querySelector('.delete-card').addEventListener('click', () => deleteGraphBlock(blockId));
    makeGraphBlockDraggable(blockDiv);
    setTimeout(redraw, 20);
    blockData.startSpec = startSpec;
    blockData.endSpec = endSpec;
    blockData.isInverse = false;
    return blockId;
}

async function buildInverseGraph(startSpec, endSpec, targetMap, leftX = 100, topY = 100) {
    const preparation = prepareGraphEvaluation(startSpec, endSpec);
    if (!preparation.canCompute) {
        alert(preparation.errorMessage);
        return;
    }
    const { needed, ambiguousBlocks, startRect, endRect } = preparation;
    
    const blockId = nextRectId++;
    const blockDiv = document.createElement('div');
    blockDiv.className = 'formula-card graph-card';
    blockDiv.style.left = (typeof leftX === 'number' ? leftX.toString() + 'px' : leftX);
    blockDiv.style.top = (typeof topY === 'number' ? topY.toString() + 'px' : topY);
    blockDiv.style.width = '550px';
    blockDiv.style.height = '550px';
    blockDiv.dataset.id = blockId;
    
    const k = ambiguousBlocks.length;
    const totalBranches = k === 0 ? 1 : (1 << k);
    const branchInfo = k > 0 ? `<span style="font-size:10px;">(${totalBranches} веток)</span>` : '';
    
    blockDiv.innerHTML = `
        <div class="card-header" style="cursor:move;">
            <div class="formula-text">График ${endSpec.paramName}(${startSpec.paramName})${branchInfo}</div>
            <div style="display:flex; gap:5px;">
                <button class="swap-dep-btn" style="background: white; border-radius: 60px; border: 1px solid #e2e8f0; border-color: black; color: black; cursor:pointer; font-size:16px;">🔄 инверсия</button>
                <div class="delete-card">❌</div>
            </div>
        </div>
        <div class="graph-canvas-wrapper" style="overflow:hidden; position:relative; height:calc(100% - 40px);">
            <canvas style="width:100%; height:100%; display:block;"></canvas>
        </div>
    `;
    graphLayer.appendChild(blockDiv);
    
    const canvas = blockDiv.querySelector('canvas');
    const wrapper = blockDiv.querySelector('.graph-canvas-wrapper');
    const pointsCount = 20000;
    const xMin = -100, xMax = 100;
    const xValues = Array.from({ length: pointsCount + 1 }, (_, i) => xMin + (i / pointsCount) * (xMax - xMin));
    
    const allSignCombinations = [];
    if (k === 0) allSignCombinations.push(new Map());
    else for (let mask = 0; mask < totalBranches; mask++) {
        const signs = new Map();
        for (let i = 0; i < k; i++) signs.set(ambiguousBlocks[i], (mask & (1 << i)) ? 1 : -1);
        allSignCombinations.push(signs);
    }
    
    const color = ['#ef4444'];
    const datasets = [];
    for (const element of allSignCombinations) {
        const signs = element;
        const points = [];
        for (let x of xValues) {
            let y;
            try {
                y = computeSubgraph(startRect, startSpec.paramName, x, signs, needed, endRect, endSpec, targetMap, preparation.pathSet);

                if (Math.abs(y) > 1e6)
                    y = null; // разрыв при слишком больших значениях
                points.push({ x, y: (y !== null && isFinite(y)) ? y : null });
            } catch(e) { y = null; }
            points.push({ x, y: (y !== null && isFinite(y)) ? y : null });
        }
        datasets.push({ points, color });
    }
    
    const state = { xMin, xMax, yMin: -100, yMax: 100, datasets };
    const redraw = () => drawGraphInBlock(blockData);
    const blockData = {
        id: blockId, element: blockDiv, canvas, wrapper, state,
        graphContext: { xLabel: startSpec.paramName, yLabel: endSpec.paramName },
        redraw: redraw
    };
    graphBlocks.set(blockId, blockData);
    
    const resizeObserver = new ResizeObserver(() => {
        const w = wrapper.clientWidth, h = wrapper.clientHeight;
        if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
        redraw();
    });
    resizeObserver.observe(wrapper);
    blockData.observer = resizeObserver;
    setupGraphPanZoom(canvas, blockData);
    
    const swapBtn = blockDiv.querySelector('.swap-dep-btn');
    if (swapBtn) {
        swapBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newStart = { rectId: endSpec.rectId, paramName: endSpec.paramName, isOutput: false };
            const newEnd   = { rectId: startSpec.rectId, paramName: startSpec.paramName, isOutput: false };
            const currentLeft = blockDiv.style.left;
            const currentTop = blockDiv.style.top;
            deleteGraphBlock(blockId);
            buildGraph(newStart, newEnd, currentLeft, currentTop);
        });
    }
    
    blockDiv.querySelector('.delete-card').addEventListener('click', () => deleteGraphBlock(blockId));
    makeGraphBlockDraggable(blockDiv);
    setTimeout(redraw, 20);
    blockData.startSpec = startSpec;
    blockData.endSpec = endSpec;
    blockData.isInverse = true;
    blockData.targetMap = targetMap;
    return blockId;
}

function setupGraphPanZoom(canvas, blockData) {
    let isPanning = false;
    let panStartX, panStartY;
    let startXMin, startXMax, startYMin, startYMax;
    
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Правая кнопка (код 2) для панорамирования
    canvas.addEventListener('mousedown', (e) => {
        if (e.button === 2) {
            e.preventDefault();
            isPanning = true;
            panStartX = e.clientX;
            panStartY = e.clientY;
            const s = blockData.state;
            startXMin = s.xMin;
            startXMax = s.xMax;
            startYMin = s.yMin;
            startYMax = s.yMax;
        }
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        const dx = e.clientX - panStartX;
        const dy = e.clientY - panStartY;
        const rangeX = startXMax - startXMin;
        const rangeY = startYMax - startYMin;
        const scaleX = rangeX / canvas.clientWidth;
        const scaleY = rangeY / canvas.clientHeight;
        let newXMin = startXMin - dx * scaleX;
        let newXMax = startXMax - dx * scaleX;
        let newYMin = startYMin + dy * scaleY;
        let newYMax = startYMax + dy * scaleY;
        
        // Ограничения
        if (newXMin < -100) { newXMax += (-100 - newXMin); newXMin = -100; }
        if (newXMax > 100) { newXMin -= (newXMax - 100); newXMax = 100; }
        if (newYMin < -100) { newYMax += (-100 - newYMin); newYMin = -100; }
        if (newYMax > 100) { newYMin -= (newYMax - 100); newYMax = 100; }
        
        blockData.state.xMin = newXMin;
        blockData.state.xMax = newXMax;
        blockData.state.yMin = newYMin;
        blockData.state.yMax = newYMax;
        blockData.redraw();   // теперь работает
    });
    
    window.addEventListener('mouseup', (e) => {
        if (e.button === 2) isPanning = false;
    });
    
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        const factor = delta < 0 ? 0.9 : 1.1;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const padding = { left: 50, right: 30, top: 20, bottom: 40 };
        const graphWidth = canvas.width - padding.left - padding.right;
        const graphHeight = canvas.height - padding.top - padding.bottom;
        const state = blockData.state;
        const centerX = state.xMin + ((mouseX - padding.left) / graphWidth) * (state.xMax - state.xMin);
        const centerY = state.yMin + ((graphHeight - (mouseY - padding.top)) / graphHeight) * (state.yMax - state.yMin);
        let newXRange = (state.xMax - state.xMin) * factor;
        let newYRange = (state.yMax - state.yMin) * factor;
        const ratioX = (centerX - state.xMin) / (state.xMax - state.xMin);
        const ratioY = (centerY - state.yMin) / (state.yMax - state.yMin);
        state.xMin = Math.max(-100, Math.min(-1, centerX - newXRange * ratioX));
        state.xMax = Math.min( 100, Math.max( 1, centerX + newXRange * (1 - ratioX)));
        state.yMin = Math.max(-100, Math.min(-1, centerY - newYRange * ratioY));
        state.yMax = Math.min( 100, Math.max( 1, centerY + newYRange * (1 - ratioY)));
        blockData.redraw();
    });
}

/**
 * Определяет коды для алгоритма Коэна-Сазерленда.
 */
function computeOutCode(x, y, rect) {
    let code = 0;
    if (x < rect.x) code |= 1;      // left
    if (x > rect.x + rect.w) code |= 2; // right
    if (y < rect.y) code |= 4;      // top
    if (y > rect.y + rect.h) code |= 8; // bottom
    return code;
}

// Быстрое вычисление подграфа для заданного x и комбинации знаков
function computeSubgraph(startRect, startParam, x, signsMap, needed, endRect, endSpec, targetMap = null, pathSet = null) {
    const savedTargets = [];
    let isReverseGraph = targetMap !== null;
    if (isReverseGraph) {
        for (let item of targetMap) {
            const rect = rectangles.get(item.rectId);
            if (rect && rect.targetVar !== item.targetVar) {
                savedTargets.push({ rect, oldTarget: rect.targetVar, oldSolver: rect.solverFunc });
                rect.targetVar = item.targetVar;
                rect.solverFunc = getSolverFunction(rect.formulaEq, item.targetVar);
            }
        }
    }
    
    // ---- Построение правильного порядка вычисления ----
    let computeOrder = [];
    if (isReverseGraph && pathSet) {
        // Получаем полный топологический порядок
        const fullOrder = getTopologicalOrder();
        if (!fullOrder) return null;
        // Разделяем: mainPath (блоки из pathSet) и others
        const mainBlocks = [];
        const otherBlocks = [];
        for (let id of fullOrder) {
            if (pathSet.has(id)) mainBlocks.push(id);
            else otherBlocks.push(id);
        }
        // Инвертируем mainBlocks
        mainBlocks.reverse();
        // Итоговый порядок: otherBlocks (в прямом порядке) + mainBlocks (в обратном)
        computeOrder = [...otherBlocks, ...mainBlocks];
    } else {
        // Для прямого графика – обычный топологический порядок
        const fullOrder = getTopologicalOrder();
        if (!fullOrder) return null;
        computeOrder = fullOrder.filter(id => needed.has(id));
    }
    
    // Установка X (или Y при обратной зависимости)
    const originalManual = startRect.manualValues[startParam];
    const originalConn = paramConnections.find(c => c.targetRectId === startRect.id && c.targetParam === startParam);
    let originalConnIdx = -1;
    if (originalConn) {
        originalConnIdx = paramConnections.indexOf(originalConn);
        paramConnections.splice(originalConnIdx, 1);
    }
    startRect.manualValues[startParam] = String(x);
    
    for (let [rect, sign] of signsMap.entries()) rect.tempSign = sign;
    for (let id of needed) rectangles.get(id).computedValue = null;
    
    for (let id of computeOrder) {
        if (!needed.has(id)) continue; // только нужные блоки
        const rect = rectangles.get(id);
        const inputs = {};
        let ok = true;
        for (let v of rect.vars) {
            if (v === rect.targetVar) continue;
            if (isReverseGraph) {
                const conn = paramConnections.find(c =>
                                                   (c.sourceRectId === id || c.targetRectId === id)
                                                   && (c.sourceParam === v || c.targetParam === v));
                if (conn && startParam !== v) {
                    const src = rectangles.get(conn.targetRectId === id
                                               ? conn.sourceRectId
                                               : conn.targetRectId);
                    if (src && src.computedValue !== null) inputs[v] = src.computedValue;
                    else { ok = false; break; }
                } else {
                    const man = rect.manualValues[v];
                    if (man !== undefined && man.trim() !== '' && !isNaN(parseFloat(man))) inputs[v] = parseFloat(man);
                    else { ok = false; break; }
                }
            } else {
                const conn = paramConnections.find(c => c.targetRectId === id && c.targetParam === v);
                if (conn) {
                    const src = rectangles.get(conn.sourceRectId);
                    if (src && src.computedValue !== null) inputs[v] = src.computedValue;
                    else { ok = false; break; }
                } else {
                    const man = rect.manualValues[v];
                    if (man !== undefined && man.trim() !== '' && !isNaN(parseFloat(man))) inputs[v] = parseFloat(man);
                    else { ok = false; break; }
                }
            }
        }
        if (!ok) continue;
        if (rect.tempSign !== undefined) inputs.rootSign = rect.tempSign;
        else if (rect.rootSign !== undefined) inputs.rootSign = rect.rootSign;
        if (rect.solverFunc) {
            const res = rect.solverFunc(inputs);
            if (res !== null && isFinite(res)) rect.computedValue = res;
        }
    }
    
    let y = null;
    if (endRect.targetVar === endSpec.paramName) {
        y = endRect.computedValue;
    } else {
        if (isReverseGraph) {
            const conn = paramConnections.find(c =>
                                                (c.sourceRectId === endSpec.rectId
                                                || c.targetRectId === endSpec.rectId)
                                                && (c.sourceParam === endSpec.paramName
                                                || c.targetParam === endSpec.paramName))
            if (conn) {
                const srcRect = rectangles.get(conn.targetRectId === endSpec.rectId
                                               ? conn.sourceRectId
                                               : conn.targetRectId);
                y = srcRect ? srcRect.computedValue : null;
            } else {
                const manualVal = endRect.manualValues[endSpec.paramName];
                if (manualVal !== undefined && manualVal.trim() !== '' && !isNaN(parseFloat(manualVal))) y = parseFloat(manualVal);
            }
        } else {
            const conn = paramConnections.find(c => c.sourceRectId === endSpec.rectId && c.sourceParam === endSpec.paramName);
            if (conn) {
                const srcRect = rectangles.get(conn.targetRectId);
                y = srcRect ? srcRect.computedValue : null;
            } else {
                const manualVal = endRect.manualValues[endSpec.paramName];
                if (manualVal !== undefined && manualVal.trim() !== '' && !isNaN(parseFloat(manualVal))) y = parseFloat(manualVal);
            }
        }
    }
    
    // Восстановление
    if (originalConn) paramConnections.splice(originalConnIdx, 0, originalConn);
    else delete startRect.manualValues[startParam];
    if (originalManual !== undefined) startRect.manualValues[startParam] = originalManual;
    for (let rect of signsMap.keys()) delete rect.tempSign;
    
    if (isReverseGraph) {
        for (let saved of savedTargets) {
            saved.rect.targetVar = saved.oldTarget;
            saved.rect.solverFunc = saved.oldSolver;
        }
    }
    
    if (Math.abs(y) > 1e6) y = null;
    return y;
}

/**
 * Отсекает отрезок (x1,y1)-(x2,y2) по прямоугольнику rect.
 * Возвращает { x1, y1, x2, y2 } если отрезок пересекает прямоугольник,
 * иначе null.
 */
function clipSegment(x1, y1, x2, y2, rect) {
    // Если оба конца внутри – возвращаем как есть
    const inside1 = (x1 >= rect.x && x1 <= rect.x + rect.w && y1 >= rect.y && y1 <= rect.y + rect.h);
    const inside2 = (x2 >= rect.x && x2 <= rect.x + rect.w && y2 >= rect.y && y2 <= rect.y + rect.h);
    if (inside1 && inside2) {
        return { x1, y1, x2, y2 };
    }
    
    // Если оба конца очень далеко (больше чем в 10 раз размера экрана) – не рисуем
    const farLimit = Math.max(rect.w, rect.h) * 10;
    if (Math.abs(x1) > farLimit && Math.abs(x2) > farLimit) return null;
    if (Math.abs(y1) > farLimit && Math.abs(y2) > farLimit) return null;
    
    // Стандартное отсечение Коэна-Сазерленда
    let out1 = computeOutCode(x1, y1, rect);
    let out2 = computeOutCode(x2, y2, rect);
    let accept = false;
    
    while (true) {
        if ((out1 | out2) === 0) {
            accept = true;
            break;
        }
        if (out1 & out2) {
            break;
        }
        const out = out1 !== 0 ? out1 : out2;
        let x, y;
        if (out & 1) { // left
            x = rect.x;
            y = y1 + (y2 - y1) * (rect.x - x1) / (x2 - x1);
        } else if (out & 2) { // right
            x = rect.x + rect.w;
            y = y1 + (y2 - y1) * (rect.x + rect.w - x1) / (x2 - x1);
        } else if (out & 4) { // top
            y = rect.y;
            x = x1 + (x2 - x1) * (rect.y - y1) / (y2 - y1);
        } else if (out & 8) { // bottom
            y = rect.y + rect.h;
            x = x1 + (x2 - x1) * (rect.y + rect.h - y1) / (y2 - y1);
        }
        // Проверка на NaN (если отрезок почти вертикальный/горизонтальный и деление на ноль)
        if (isNaN(x) || isNaN(y)) break;
        
        if (out === out1) {
            x1 = x; y1 = y;
            out1 = computeOutCode(x1, y1, rect);
        } else {
            x2 = x; y2 = y;
            out2 = computeOutCode(x2, y2, rect);
        }
    }
    
    if (accept) {
        // Дополнительная проверка, что точки внутри или на границе
        return { x1, y1, x2, y2 };
    }
    return null;
}

/**
 * Отрисовка графика внутри готового блока (с учётом текущего масштаба).
 * @param {Object} blockData - объект блока из graphBlocks
 */
function drawGraphInBlock(blockData) {
    const { canvas, state, graphContext } = blockData;
    const { xMin, xMax, yMin, yMax, datasets } = state;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const padding = { left: 50, right: 30, top: 20, bottom: 40 };
    const graphWidth = width - padding.left - padding.right;
    const graphHeight = height - padding.top - padding.bottom;
    const clipRect = { x: padding.left, y: padding.top, w: graphWidth, h: graphHeight };
    
    const xToPixel = (x) => padding.left + ((x - xMin) / (xMax - xMin)) * graphWidth;
    const yToPixel = (y) => padding.top + graphHeight - ((y - yMin) / (yMax - yMin)) * graphHeight;
    
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    
    // ---- Отрисовка сетки и осей (как было) ----
    ctx.font = '10px monospace';
    ctx.fillStyle = '#555';
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    
    function niceStep(range, targetSteps = 10) {
        const step = range / targetSteps;
        const magnitude = 10 ** Math.floor(Math.log10(step));
        const residual = step / magnitude;
        let nice;
        if (residual < 1.5) nice = 1 * magnitude;
        else if (residual < 3.5) nice = 2 * magnitude;
        else if (residual < 7.5) nice = 5 * magnitude;
        else nice = 10 * magnitude;
        return nice;
    }
    
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
    ctx.font = '12px "Segoe UI"';
    ctx.fillStyle = '#2c3e50';
    ctx.fillText(graphContext.xLabel, padding.left + graphWidth + 5, yToPixel(0) + 4);
    ctx.fillText(graphContext.yLabel, xToPixel(0) - 6, padding.top - 5);
    
    // ---- Отрисовка кривых (оптимизированная) ----
    for (let ds of datasets) {
        const { points, color } = ds;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        let isDrawing = false;
        let lastX = 0, lastY = 0;
        
        for (const element of points) {
            const p = element;
            if (p.y === null || !isFinite(p.y)) {
                if (isDrawing) {
                    ctx.stroke();
                    ctx.beginPath();
                    isDrawing = false;
                }
                continue;
            }
            const px = xToPixel(p.x);
            const py = yToPixel(p.y);
            
            if (!isDrawing) {
                ctx.moveTo(px, py);
                lastX = px;
                lastY = py;
                isDrawing = true;
                continue;
            }
            
            // Отсечение отрезка (lastX,lastY) -> (px,py)
            const clipped = clipSegment(lastX, lastY, px, py, clipRect);
            if (clipped) {
                
                if (isDrawing) {
                    ctx.moveTo(clipped.x1, clipped.y1);
                } else { // Если предыдущая точка была вне области, начинаем новый путь
                    ctx.beginPath();
                    ctx.moveTo(clipped.x1, clipped.y1);
                    isDrawing = true;
                }
                ctx.lineTo(clipped.x2, clipped.y2);
            } else {
                // Сегмент полностью вне экрана – прерываем линию
                if (isDrawing) {
                    ctx.stroke();
                    ctx.beginPath();
                    isDrawing = false;
                }
            }
            lastX = px;
            lastY = py;
        }
        if (isDrawing) {
            ctx.stroke();
        }
    }
    
    ctx.restore();
}

const demos = [
    {
        name: "5 нетривиальных уравнений",
        data: {
            "version": "2.0",
            "blocks": [
                {
                "id": 1017,
                "formulaEq": "N = A/t",
                "formulaName": "Мощность",
                "vars": [
                    "N",
                    "A",
                    "t"
                ],
                "swappable": 1,
                "left": 1217,
                "top": 191,
                "targetVar": "A",
                "manualValues": {
                    "t": "",
                    "N": "0.5",
                    "A": ""
                },
                "rootSign": 1
                },
                {
                "id": 1018,
                "formulaEq": "X = X0 + υ0*t + (a*t^2)/2",
                "formulaName": "Координата при равноускоренном движении",
                "vars": [
                    "X",
                    "X0",
                    "υ0",
                    "t",
                    "a"
                ],
                "swappable": 1,
                "left": 892,
                "top": 92,
                "targetVar": "t",
                "manualValues": {
                    "X0": "1",
                    "υ0": "1.4142",
                    "a": "1",
                    "t": "",
                    "X": "2"
                },
                "rootSign": 1
                },
                {
                "id": 1019,
                "formulaEq": "A = F*S*cos(α)",
                "formulaName": "Работа",
                "vars": [
                    "A",
                    "F",
                    "S",
                    "α"
                ],
                "swappable": 1,
                "left": 1562,
                "top": 166,
                "targetVar": "α",
                "manualValues": {
                    "F": "1",
                    "S": "1",
                    "A": "",
                    "α": ""
                },
                "rootSign": 1
                },
                {
                "id": 1020,
                "formulaEq": "S = (υ2^2 - υ0^2)/(2*a)",
                "formulaName": "Перемещение при равноускоренном движении (без времени)",
                "vars": [
                    "S",
                    "υ2",
                    "υ0",
                    "a"
                ],
                "swappable": 1,
                "left": 560,
                "top": 124,
                "targetVar": "υ0",
                "manualValues": {
                    "υ0": "",
                    "a": "1",
                    "υ2": "2",
                    "S": "1"
                },
                "rootSign": 1
                },
                {
                "id": 1071,
                "formulaEq": "S = (υ + υ0)*t/2",
                "formulaName": "Перемещение при равноускоренном движении (средняя скорость)",
                "vars": [
                    "S",
                    "υ",
                    "υ0",
                    "t"
                ],
                "swappable": 1,
                "left": 200.023,
                "top": 147.039,
                "targetVar": "S",
                "manualValues": {
                    "υ0": "0.2",
                    "t": "1",
                    "υ": "3"
                },
                "rootSign": 1
                }
            ],
            "paramConnections": [
                {
                "sourceRectId": 1020,
                "sourceParam": "υ0",
                "targetRectId": 1018,
                "targetParam": "υ0"
                },
                {
                "sourceRectId": 1018,
                "sourceParam": "t",
                "targetRectId": 1017,
                "targetParam": "t"
                },
                {
                "sourceRectId": 1017,
                "sourceParam": "A",
                "targetRectId": 1019,
                "targetParam": "A"
                },
                {
                "sourceRectId": 1071,
                "sourceParam": "S",
                "targetRectId": 1020,
                "targetParam": "S"
                }
            ],
            "nextRectId": 1075,
            "graphs": [
                {
                "startSpec": {
                    "rectId": 1019,
                    "paramName": "α",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1071,
                    "paramName": "υ",
                    "isOutput": true
                },
                "left": 1440,
                "top": 488,
                "xMin": -100,
                "xMax": 100,
                "yMin": -100,
                "yMax": 100,
                "isInverse": true
                },
                {
                "startSpec": {
                    "rectId": 1020,
                    "paramName": "S",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1018,
                    "paramName": "t",
                    "isOutput": true
                },
                "left": 619,
                "top": 466,
                "xMin": -33.654765177399455,
                "xMax": 29.107354040600562,
                "yMin": -25.40174221898932,
                "yMax": 37.36037699901068,
                "isInverse": false
                }
            ]
        }
    },
    {
        name: "Графики разных функций",
        data: {
            "version": "2.0",
            "blocks": [
                {
                "id": 1087,
                "formulaEq": "P = F/S",
                "formulaName": "Давление",
                "vars": [
                    "P",
                    "F",
                    "S"
                ],
                "swappable": 1,
                "left": 0,
                "top": 0,
                "targetVar": "P",
                "manualValues": {
                    "F": "1",
                    "S": "1"
                },
                "rootSign": 1
                },
                {
                "id": 1088,
                "formulaEq": "A = F*S*cos(α)",
                "formulaName": "Работа",
                "vars": [
                    "A",
                    "F",
                    "S",
                    "α"
                ],
                "swappable": 1,
                "left": 0,
                "top": 204.039,
                "targetVar": "F",
                "manualValues": {
                    "S": "1",
                    "A": "1",
                    "α": "1",
                    "F": "1"
                },
                "rootSign": 1
                },
                {
                "id": 1089,
                "formulaEq": "Fл = B*q*υ*sin(α)",
                "formulaName": "Сила Лоренца",
                "vars": [
                    "Fл",
                    "B",
                    "q",
                    "υ",
                    "α"
                ],
                "swappable": 1,
                "left": 0,
                "top": 458.039,
                "targetVar": "α",
                "manualValues": {
                    "q": "1",
                    "υ": "1",
                    "α": "1",
                    "Fл": "1",
                    "B": "1"
                },
                "rootSign": 1
                },
                {
                "id": 1090,
                "formulaEq": "N = N0*2^(-t/T)",
                "formulaName": "Закон радиоактивного распада",
                "vars": [
                    "N",
                    "N0",
                    "t",
                    "T"
                ],
                "swappable": 1,
                "left": 0,
                "top": 761.039,
                "targetVar": "N",
                "manualValues": {
                    "N0": "1",
                    "T": "1",
                    "t": "1"
                },
                "rootSign": 1
                }
            ],
            "paramConnections": [],
            "nextRectId": 1114,
            "graphs": [
                {
                "startSpec": {
                    "rectId": 1087,
                    "paramName": "S",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1087,
                    "paramName": "P",
                    "isOutput": true
                },
                "left": 306,
                "top": 0,
                "xMin": -7.544121292358543,
                "xMax": 8.167827244073841,
                "yMin": -7.464025852136031,
                "yMax": 8.247922684296359,
                "isInverse": false
                },
                {
                "startSpec": {
                    "rectId": 1088,
                    "paramName": "α",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1088,
                    "paramName": "F",
                    "isOutput": true
                },
                "left": 864,
                "top": 0,
                "xMin": -34.74461812955019,
                "xMax": 34.991069890449836,
                "yMin": -36.22952183173575,
                "yMax": 33.506166188264274,
                "isInverse": false
                },
                {
                "startSpec": {
                    "rectId": 1089,
                    "paramName": "Fл",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1089,
                    "paramName": "α",
                    "isOutput": false
                },
                "left": 307,
                "top": 553,
                "xMin": -3.56021232166743,
                "xMax": 4.0701961678714875,
                "yMin": -4.158915344746592,
                "yMax": 3.4714931447923267,
                "isInverse": false
                },
                {
                "startSpec": {
                    "rectId": 1089,
                    "paramName": "B",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1089,
                    "paramName": "α",
                    "isOutput": true
                },
                "left": 866,
                "top": 552,
                "xMin": -5.815925569080105,
                "xMax": 6.35003511564237,
                "yMin": -6.733742954064429,
                "yMax": 5.43221773065804,
                "isInverse": false
                },
                {
                "startSpec": {
                    "rectId": 1090,
                    "paramName": "t",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1090,
                    "paramName": "N",
                    "isOutput": false
                },
                "left": 1420.03,
                "top": 553,
                "xMin": -38.23792708448787,
                "xMax": 39.24617071551214,
                "yMin": -36.6636176278332,
                "yMax": 40.82048017216683,
                "isInverse": false
                },
                {
                "startSpec": {
                    "rectId": 1090,
                    "paramName": "N",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1090,
                    "paramName": "T",
                    "isOutput": true
                },
                "left": 1973,
                "top": 551,
                "xMin": -8.323796375739512,
                "xMax": 8.875603613381905,
                "yMin": -8.045145742525314,
                "yMax": 9.154254246596096,
                "isInverse": true
                },
                {
                "startSpec": {
                    "rectId": 1088,
                    "paramName": "F",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1088,
                    "paramName": "α",
                    "isOutput": true
                },
                "left": 1421,
                "top": 0,
                "xMin": -11.654995269399837,
                "xMax": 12.660335648714026,
                "yMin": -9.541119635202994,
                "yMax": 14.774211282910874,
                "isInverse": true
                }
            ]
        }
    },
    {
        name: "Параллельное подключение",
        data: {
            "version": "2.0",
            "blocks": [
                {
                "id": 1077,
                "formulaEq": "F = m*a",
                "formulaName": "II закон Ньютона",
                "vars": [
                    "F",
                    "m",
                    "a"
                ],
                "swappable": 1,
                "left": 318,
                "top": 174.039,
                "targetVar": "F",
                "manualValues": {
                    "a": "9800",
                    "m": "1"
                },
                "rootSign": 1
                },
                {
                "id": 1078,
                "formulaEq": "P = F/S",
                "formulaName": "Давление",
                "vars": [
                    "P",
                    "F",
                    "S"
                ],
                "swappable": 1,
                "left": 650.023,
                "top": 215.039,
                "targetVar": "P",
                "manualValues": {
                    "F": "",
                    "S": "3"
                },
                "rootSign": 1
                },
                {
                "id": 1079,
                "formulaEq": "Fт = m*g",
                "formulaName": "Сила тяжести",
                "vars": [
                    "Fт",
                    "m",
                    "g"
                ],
                "swappable": 1,
                "left": 311.023,
                "top": 414.039,
                "targetVar": "g",
                "manualValues": {
                    "m": "5",
                    "g": "",
                    "Fт": "98"
                },
                "rootSign": 1
                },
                {
                "id": 1080,
                "formulaEq": "P = ρ*g*h",
                "formulaName": "Давление жидкости",
                "vars": [
                    "P",
                    "ρ",
                    "g",
                    "h"
                ],
                "swappable": 1,
                "left": 906.02,
                "top": 462.039,
                "targetVar": "ρ",
                "manualValues": {
                    "g": "",
                    "h": "15",
                    "P": "",
                    "ρ": ""
                },
                "rootSign": 1
                },
                {
                "id": 1091,
                "formulaEq": "out = in",
                "formulaName": "Равно",
                "vars": [
                    "out",
                    "in"
                ],
                "swappable": 0,
                "left": 0,
                "top": 251.039,
                "targetVar": "out",
                "manualValues": {
                    "in": "10"
                },
                "rootSign": 1
                }
            ],
            "paramConnections": [
                {
                "sourceRectId": 1077,
                "sourceParam": "F",
                "targetRectId": 1078,
                "targetParam": "F"
                },
                {
                "sourceRectId": 1078,
                "sourceParam": "P",
                "targetRectId": 1080,
                "targetParam": "P"
                },
                {
                "sourceRectId": 1079,
                "sourceParam": "g",
                "targetRectId": 1080,
                "targetParam": "g"
                },
                {
                "sourceRectId": 1091,
                "sourceParam": "out",
                "targetRectId": 1077,
                "targetParam": "m"
                },
                {
                "sourceRectId": 1091,
                "sourceParam": "out",
                "targetRectId": 1079,
                "targetParam": "m"
                }
            ],
            "nextRectId": 1093,
            "graphs": [
                {
                "startSpec": {
                    "rectId": 1091,
                    "paramName": "in",
                    "isOutput": false
                },
                "endSpec": {
                    "rectId": 1080,
                    "paramName": "ρ",
                    "isOutput": true
                },
                "left": 1273,
                "top": 117,
                "xMin": -30.85301534788833,
                "xMax": 30.619680446647454,
                "yMin": -25.0758548268624,
                "yMax": 31.492333120917994,
                "isInverse": false
                }
            ]
        }
    },
    {
        name: "Несколько вхождений параметров",
        data: {
            "version": "2.0",
            "blocks": [
                {
                "id": 1008,
                "formulaEq": "F = m*a",
                "formulaName": "II закон Ньютона",
                "vars": [
                    "F",
                    "m",
                    "a"
                ],
                "swappable": 1,
                "left": 88.024,
                "top": 61.0729,
                "targetVar": "F",
                "manualValues": {
                    "m": "10",
                    "a": "9.8"
                },
                "rootSign": 1
                },
                {
                "id": 1009,
                "formulaEq": "P = F/S",
                "formulaName": "Давление",
                "vars": [
                    "P",
                    "F",
                    "S"
                ],
                "swappable": 1,
                "left": 496.024,
                "top": 145.073,
                "targetVar": "P",
                "manualValues": {
                    "F": "",
                    "S": "3"
                },
                "rootSign": 1
                },
                {
                "id": 1010,
                "formulaEq": "P = ρ*g*h",
                "formulaName": "Давление жидкости",
                "vars": [
                    "P",
                    "ρ",
                    "g",
                    "h"
                ],
                "swappable": 1,
                "left": 870.024,
                "top": 351.073,
                "targetVar": "ρ",
                "manualValues": {
                    "ρ": "",
                    "g": "",
                    "h": "15",
                    "P": ""
                },
                "rootSign": 1
                },
                {
                "id": 1012,
                "formulaEq": "Fт = m*g",
                "formulaName": "Сила тяжести",
                "vars": [
                    "Fт",
                    "m",
                    "g"
                ],
                "swappable": 1,
                "left": 495.024,
                "top": 396.073,
                "targetVar": "g",
                "manualValues": {
                    "m": "5",
                    "g": "",
                    "Fт": "98"
                },
                "rootSign": 1
                }
            ],
            "paramConnections": [
                {
                "sourceRectId": 1008,
                "sourceParam": "F",
                "targetRectId": 1009,
                "targetParam": "F"
                },
                {
                "sourceRectId": 1009,
                "sourceParam": "P",
                "targetRectId": 1010,
                "targetParam": "P"
                },
                {
                "sourceRectId": 1012,
                "sourceParam": "g",
                "targetRectId": 1010,
                "targetParam": "g"
                }
            ],
            "nextRectId": 1013,
            "graphs": []
        }
    }
];

saveBtn.addEventListener('click', () => saveToFile());
loadBtn.addEventListener('click', () => loadFromFile());
connModeBtn.addEventListener('click', () => setConnectMode(!connectModeActive));
computeBtn.addEventListener('click', computeAll);
helpBtn.addEventListener('click', () => showHelp() );
graphBtn.addEventListener('click', () => {
    if (graphModeActive) {
        deactivateGraphMode();
        return;
    }
    if (connectModeActive) setConnectMode(false);
    graphModeActive = true;
    selectingStart = true;
    selectingEnd = false;
    graphStartParam = null;
    graphEndParam = null;
    modeStatusSpan.innerText = 'Режим графика: выберите НАЧАЛЬНЫЙ параметр (синий кружок)';
    graphBtn.classList.add('active');
});
demoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (demoMenu) {
        closeDemoMenu();
        return;
    }
    // Создаём выпадающий список
    const menu = document.createElement('div');
    menu.className = 'demo-menu';
    menu.style.position = 'absolute';
    menu.style.backgroundColor = '#fff';
    menu.style.border = '1px solid #ccc';
    menu.style.borderRadius = '8px';
    menu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    menu.style.zIndex = '10000';
    menu.style.minWidth = '180px';
    
    // Позиционируем под кнопкой
    const rect = demoBtn.getBoundingClientRect();
    menu.style.left = rect.left + 'px';
    menu.style.top = (rect.bottom + 5) + 'px';
    
    // Заполняем пунктами
    demos.forEach(demo => {
        const item = document.createElement('div');
        item.className = 'demo-item';
        item.textContent = demo.name;
        item.style.padding = '8px 12px';
        item.style.cursor = 'pointer';
        item.style.borderBottom = '1px solid #eee';
        item.addEventListener('mouseover', () => item.style.backgroundColor = '#f0f0f0');
        item.addEventListener('mouseout', () => item.style.backgroundColor = '');
        item.addEventListener('click', async (ev) => {
            ev.stopPropagation();
            closeDemoMenu();
            // Загружаем JSON
            try {
                let state;
                if (demo.file) {
                    const response = await fetch(demo.file);
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    state = await response.json();
                } else if (demo.data) {
                    state = demo.data;
                } else {
                    throw new Error('Нет данных для загрузки');
                }
                await deserializeState(state);
            } catch (err) {
                alert('Ошибка загрузки демо: ' + err.message);
            }
        });
        menu.appendChild(item);
    });
    
    document.body.appendChild(menu);
    demoMenu = menu;
    
    // Закрытие при клике вне меню
    const closeHandler = (e) => {
        if (!menu.contains(e.target) && e.target !== demoBtn) {
            closeDemoMenu();
            document.removeEventListener('click', closeHandler);
        }
    };
    setTimeout(() => document.addEventListener('click', closeHandler), 0);
});
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
    for (let block of graphBlocks.values()){
        deleteGraphBlock(block.id);
    }
    updateParamConnectionsList();
    redrawParamLines();
});
window.addEventListener('resize', () => redrawParamLines());
new ResizeObserver(() => redrawParamLines()).observe(graphArea);
setupDragDrop();
setConnectMode(false);
