// Решение уравнения
let titles = document.querySelectorAll(".title") //заголовок и названия областей формы
let inputs = document.querySelectorAll("input"); //коллекция полей (поля ввода и кнопки)

let inputPageBgColor = document.getElementById("page_bgcolor");

let inputParamA = document.getElementById("param_a");
let inputParamB = document.getElementById("param_b");
let inputParamC = document.getElementById("param_c");

let paramA; //значение коэф. а
let paramB; //значение коэф. b
let paramC; //значение коэф. c

let rangeParamA = document.getElementById("range_a");
let rangeParamB = document.getElementById("range_b");
let rangeParamC = document.getElementById("range_c");

let buttons = document.querySelectorAll(".btn");
let btnCalc = document.getElementById("btn_calc"); //кнопка расчёта
let btnReset = document.getElementById("btn_reset"); //кнопка очистки
let btnPlay = document.getElementById("btn_play"); //кнопка включения плеера

let player;
let playerAttributes = {
    "id": "player",
    "src": "media/sample.mp3",
    "controls": "",
    "autoplay": "",
    "class": "player"
};

let result; //результат вычисления
let solution; //объект для вывода результата

// обработчик события "change" при изменении цвета фона 
inputPageBgColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputPageBgColor.value;

    for(let title of titles) {
        title.style.color = "#ff0000";
    }
})

// обработчик события "input" при вводе в поле коэф. a 
inputParamA.addEventListener("input", () => {
    paramA = updateParam(inputParamA, rangeParamA);
    unBlocked(inputParamB, rangeParamB, buttons);
})

// обработчик события "input" при вводе в поле коэф. b
inputParamB.addEventListener("input", () => {
    paramB = updateParam(inputParamB, rangeParamB);
    unBlocked(inputParamC, rangeParamC);
})

// обработчик события "input" при вводе в поле коэф. c
inputParamC.addEventListener("input", () => {
    paramC = updateParam(inputParamC, rangeParamC);
})

// обработчик события "change" при изменении ползунка коэф. a 
rangeParamA.addEventListener("change", () => {
    paramA = updateParam(rangeParamA, inputParamA);
    unBlocked(inputParamB, rangeParamB, buttons);
})

// обработчик события "change" при изменении ползунка коэф. b 
rangeParamB.addEventListener("change", () => {
    paramB = updateParam(rangeParamB, inputParamB);
    unBlocked(inputParamC, rangeParamC);
})

// обработчик события "change" при изменении ползунка коэф. c 
rangeParamC.addEventListener("change", () => {
    paramC = updateParam(rangeParamC, inputParamC);
})

// обработчик события "click" при клике по кнопке "Произвести расчёт"
btnCalc.addEventListener("click", () => {
    result = calcSolution(paramA, paramB, paramC);
    printSolution();
})

// обработчик события "click" при клике по кнопке "Очистить"
btnReset.addEventListener("click", () => {
    for(let item of inputs) {
        if (item.getAttribute("type") == "number" || item.getAttribute("type") == "range") {
            item.value = "";
        }
        if(item.getAttribute("id") == "param_a" || item.getAttribute("id") == "range_a") {
            continue;
        }
        else {
            item.setAttribute("disabled", "disabled");
        }
    }
    document.body.removeChild(solution);
})

// обработчик события "click" при клике по кнопке "Показать/удалить плеер"
btnPlay.addEventListener("click", () => {
    if(document.getElementById("player")) {
        document.body.removeChild(player);
        btnPlay.setAttribute("value", "Показать плеер");
    }
    else {
        player = createPlayer("audio", playerAttributes);

        document.body.append(player);
        btnPlay.setAttribute("value", "Удалить плеер");
    }
})

// функция создания аудио-плеера
function createPlayer(tag, attr) {
    let player = document.createElement(tag);

    for(let key in attr) {
        player.setAttribute(key, attr[key]);
    }
    player.classList.add("player-show");

    return player;
}

// функция разблокировки полей и кнопок
function unBlocked(input, range, buttons) {
    input.removeAttribute("disabled");
    range.removeAttribute("disabled");

    if(buttons) {
        for (let btn of buttons) {
            btn.removeAttribute("disabled");
        }
    }
}

// функция установки/обновления коэфициента в поле/ползунке
function updateParam(input1, input2) {
    let param = +input1.value; //значение коэф.
    input2.value = param; //значение поля/ползунка с коэф.
    
    return param;
}

// главная функция расчёта корней (вычисление)
function calcSolution(a, b, c) {
    let D; //дискриминант
    let result; //строка с итогом

    if (typeof b == "undefined") {
        b = 0;
    }
    if (typeof c == "undefined") {
        c = 0;
    }

    if(a == 0) {
        if(b == 0) {
            result = "Корней нет!";
        }
        else {
            if(c != 0) {
                result = -c / b;
            }
            else {
                result = 0;
            }
        }
    }
    else if(b == 0) {
        if(c != 0) {
            (-c / a >= 0) ? result = Math.sqrt(-c / a) : result = "Корней нет!";
        }
        else {
            result = 0;
        }
    }
    else if(c == 0) {
        result = [0, -b / a];
    }
    else {
        D = calcD(a, b, c);
        result = calcRoots(D, a, b, c);
    }
    return result;
}

// функция для расчёта дискриминанта
function calcD(a, b, c) {
    return b ** 2 - 4 * a * c;
}

// функция для расчёта корней квадратного уравнения
function calcRoots(D, a, b, c) {
    let x1, x2; //корни квадратного уравнения

    if(D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        return [x1, x2];
    }
    else if (D == 0) {
        return -b / (2 * a);
    }
    else {
        return "Корней нет!";
    }
}

// функция вывода результа на страницу (в объект p)
function printSolution() {
    if (document.querySelector(".solution")) {
        solution.innerHTML = checkResult(result);
    }
    else {
        solution = createElem("p", checkResult(result));
        solution.innerHTML = checkResult(result);
        document.body.append(solution);
    }
}

//функция создания элемента
function createElem(tag, content) {
    let elem;

    elem = document.createElement(tag);
    elem.innerHTML = content;
    elem.classList.add("solution");

    return elem;
}

// функция проверки результата вычисления
function checkResult(result) {
    if (typeof result == "string") {
        return `<strong>${result}</strong>`;
    }
    else if (typeof result == "number") {
        return `Уравнение имеет один корень: <strong>x = ${result.toFixed(2)}</strong>`;
    }
    else {
        return `Уравнение квадратное.<br>Имеет два корня: <strong>x1 = ${result[0].toFixed(2)}; x2 = ${result[1].toFixed(2)}</strong>`;
    }
}



// let params = setParametrs();
// let solution;

// if (typeof params != "string") {
//     solution = calcSolution(params[0], params[1], params[2]);
//     getSolution(solution);
// }
// else {
//     alert(params);
// }

// function setParametrs() {
//     let a, b, c; //коэф. кв. уравнения

//     if(a = setParam("a")) {
//         if(b = setParam("b")) {
//             if(c = setParam("c"))
//             {
//                 return [a, b, c];
//             }
//         }
//     }
//     return "Вы отменили ввод!";
// }

// function setParam(nameParam) {
//     let param; //коэффициент уравнения
//     let cancel; //флаг для проверки ввода параметра

//     do {
//         param = prompt(`Коэф. ${nameParam}:`);
//         cancel = checkParametr(param);
//     } while (cancel);

//     return param;
// }

// function checkParametr(param) {
//     if (typeof param == "object") {
//         return false;
//     }
//     else if (isNaN(param) || param == "") {
//         alert("Ошибка! Введена пустая строка или не число!");
//         return true;
//     }
// }

// function getSolution(solution) {
//     if(typeof solution == "string") {
//         alert(solution);
//     }
//     else if(typeof solution == "number") {
//         alert(`Уравнение имеет один корень: x = ${solution.toFixed(2)}`);
//     }
//     else {
//         alert("Уравнение квадратное. Имеет два корня:\n" + "x1 = " + solution[0].toFixed(2) + "\nx2 = " + solution[1].toFixed(2));
//     }
// }