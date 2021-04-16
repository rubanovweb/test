/*****
 1. Программа хранит в двух переменных курс доллара и евро.В первой переменной у вас
хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
число и считаете.Результат надо вывести на страницу с помощью alert.
*****/
// let kursDollar = 76;
// let kursEuro = 90;
// let sumDollars = 0,
//     sumEuro = 0;

// let sumRubles = Number(prompt("Введите сумму в рублях:"));

// if(sumRubles.toString() !== "NaN") {
//     sumDollars = (sumRubles / kursDollar).toFixed(2);
//     sumEuro = (sumRubles / kursEuro).toFixed(2);

//     alert(`Сумма в рублях ${sumRubles} в долларах = ${sumDollars},\nв евро = ${sumEuro}`);
// }
// else {
//     alert("Неверная сумма!");
// }

/*****
2. Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь
вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.
*****/
// let a; //длина основания трапеции
// let b; //длина основания трапеции
// let h; //высота трапеции
// let S; //площадь трапеции

// a = +prompt("Длина основания (a) трапеции:", 10);
// b = +prompt("Длина основания (b) трапеции:", 7);
// h = +prompt("Высота трапеции:", 5);

// S = ((a + b) / 2) * h;

// alert(`Площадь трапеции = ${S} кв.м`);


/*****
3. Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.
*****/
// let percentYear = 0;
// let depositSumYear = 0;

// let depositAmount = +prompt("Введите годовую сумму депозита:");
// if (isNaN(depositAmount) || depositAmount == "" || depositAmount == null) {
//     alert("Неправильно заполнено поле «Сумма».\n" +
//         "(i) Поле не может быть пустым\n" +
//         "и не должно содержать текст.");
// }
// else if (depositAmount <= 0) {
//     alert("Неправильно заполнено поле «Сумма».\n" +
//         "(i) Сумма не может быть отрицательным числом или равной 0.");
// } else {
//     let DepositPercent = Number(prompt("Введите годовой % от вклада:"));
//     if (isNaN(DepositPercent) || DepositPercent == "" || DepositPercent == null) {
//         alert("Неправильно заполнено поле «Процент».\n" +
//             "(i) Поле не может быть пустым\n" +
//             "и не должно содержать текст.");
//     }
//     else if (DepositPercent <= 0) {
//         alert("Неправильно заполнено поле «Процент».\n" +
//             "(i) Процентное число не может быть отрицательным или равным 0.");
//     }
//     else {
//         // процент от суммы
//         percentYear = depositAmount * DepositPercent / 100;
//         // percentYear = depositAmount % DepositPercent;

//         // сумма за год с процентами
//         depositSumYear = depositAmount + percentYear;

//         for (let i = 1; i <= 5; i++) {
//             alert(`Годовой процент: ${percentYear}\n` +
//                 `Годовой размер вклада: ${depositSumYear}`);

//             // перезаписываем процент от годовой суммы
//             percentYear = depositSumYear * DepositPercent / 100;
//             // percentYear = depositSumYear % DepositPercent;
//             console.log(`${percentYear}`);

//             // перезаписываем сумму за год с процентами
//             depositSumYear = depositSumYear + percentYear;
//             console.log(`${depositSumYear}`);
//         }
//     }
// }
/*****

/*****
4. Запросить у пользователя ввод числа и сохранить это число в переменную a. Если
переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
*****/

// let a = +prompt("Введите число от 1 до 10:");
// if (a !== 10) {
//     alert(`a = ${a} - 'Неверно'`);
// } else {
//     alert(`a = ${a} - 'Верно'`);
// }

/*****
5. Выведите столбец чисел от 1 до 50.
*****/
// let result = "";

// for(let i = 1; i <= 50; i++) {
//     if(i % 2 != 0) {
//         console.log(`${i}\n`);
//         result = result + i + "\n";
//     }
// }
// alert(result);

/*****
6. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
*****/
// let a = 14;
// let b = 3;
// alert(`Остаток от деления a на b = ${a % b}`);

/*****
7. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
*****/
// const MAXLENGTHSTR = 50;
// let str = "";
// let symbol = "*";
// let flag = true;

// let lengthStr = Number(prompt("Длина строки:"));

// if (lengthStr.toString() != "NaN") {
//     if (lengthStr > 0 && lengthStr <= MAXLENGTHSTR) {

//         let answerUser = confirm("Заполнять цифрами?");

//         switch(answerUser) {
//             case true:  for (let i = 1; i <= lengthStr; i++) {
//                             str += i;
//                         }
//                         break;
//             case false: while(flag) {
//                             symbol = prompt("Укажите символ для заполнения строки:");
//                             if(symbol != null) {
//                                 if(symbol.length == 1) {
//                                     for (let i = 1; i <= lengthStr; i++) {
//                                         str += symbol;
//                                     }
//                                     break;
//                                 }
//                             }
//                             else {
//                                 flag = false;
//                             }
//                         }
//                         break;
//         }
//         flag ? alert(`Результат:\n${str}`) : alert("Вы отменили!");
//     }
//     else if(lengthStr == "") {
//         alert(`Ошибка!!! Длина строки не должна быть пустой!`);
//     }
//     else {
//         alert(`Ошибка!!! Длина строки должна быть > 0 и <= ${MAXLENGTHSTR}`);
//     }
// }
// else {
//     alert("Ошибка!!! Длина строки должна быть числом!");
// }

// let str = "Привет друзья!";
// let resultStr = "";
// for(let i = 0; i < str.length; i++) {
//     if(i == str.length - 1) {
//         resultStr += str[i];
//     }
//     else {
//         resultStr += str[i] + "\n";
//     }
// }
// alert(resultStr);

//9. Дан массив с элементами 'Привет, ', 'мир' и '!'.Необходимо вывести на экран фразу 'Привет, мир!'.

// let mas = [];
// let str = "";
// let countItems = +prompt("Кол-во элементов в массиве:");

// if(countItems > 0 && countItems <= 20) {
//     for(let i = 0; i < countItems; i++) {
//         mas[i] = Math.ceil(Math.random() * 10);
//     }
//     for(let index in mas) {
//         console.log(mas[index] + '\n');
//         str += mas[index] + '\n';
//     }
//     alert(str);
// }
// else {
//     console.log("Кол-во элементов в массиве должно быть > 0 и не больше 20!");
// }

/***** 10. Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе ****/
/**** 1-й вариант*/
// let arrayOne = ['a', 'b', 'c'];
// let arrayTwo = [1, 2, 3, 4, 5];
// let arrayMix = [];

// let str = "";
// let i = 0;

// for(let index in arrayOne) {
//     arrayMix[i] = arrayOne[index];
//     i++;
// }
// for(let index in arrayTwo) {
//     arrayMix[i] = arrayTwo[index];
//     i++;
// }
// for(let index in arrayMix) {
//     str += arrayMix[index] + '\n';
// }
// alert(str);

/**** 2-й вариант*/
// let massLet = ['a', 'b', 'c'];
// let massNum = [1, 2, 3];

// for (let i = 0; i < massNum.length; i++) {

//     massLet[massLet.length] = massNum[i];

// }
// console.log(massLet);

let a, b, c; //коэф. кв. уравнения
let D; //дискриминант
let x1, x2; //корни кв. уравнения
let cancel;

function setParametrs () {
    a = setParam("a");
    b = setParam("b");
    c = setParam("c");
}

function setParam(nameParam) {
    let param;
    do {
        param = prompt(`Коэф. ${nameParam}:`);
        cancel = checkParametr(param);
    } while (cancel);

    return param;
}

function checkParametr(param) {
    if (typeof param == "object") {
        return false;
    }
    else if (isNaN(param) || param == "") {
        alert("Ошибка! Введена пустая строка или не число!");
        return true;
    }
}

setParametrs();