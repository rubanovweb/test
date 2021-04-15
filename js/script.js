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

let MAXLENGTHSTR = 50;
let str = "";
let symbol = "*";

let lengthStr = Number(prompt("Длина строки:"));

if (lengthStr.toString() != "NaN") {
    if (lengthStr > 0 && lengthStr <= MAXLENGTHSTR) {

        let answerUser = confirm("Заполнять цифрами?");

        switch(answerUser) {
            case true:  for (let i = 1; i <= lengthStr; i++) {
                            str += i;
                        }
                        break;
            case false: symbol = prompt("Укажите символ для заполнения строки:");
                        if(symbol.length == 1) {
                            
                            
                            // for (let i = 1; i <= lengthStr; i++) {
                            //     str += i;
                            // }
                        }
                        else {
                            alert("Ошибка!!! Введите один символ!");
                        }
                        break;
        }
    }
    else if(lengthStr == "") {
        alert(`Ошибка!!! Длина строки не должна быть пустой!`);
    }
    else {
        alert(`Ошибка!!! Длина строки должна быть > 0 и <= ${MAXLENGTHSTR}`);
    }
}
else {
    alert("Ошибка!!! Длина строки должна быть числом!");
}