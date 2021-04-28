const input = {
  type: "number",
  placeholder: "Введите возраст",
  minValue: 1,
  styles: {
    display: "flex",
    margin: "20px auto 0",
    padding: "5px 10px",
    border: "2px solid gold",
    outlineColor: "lightgreen",
    fontFamily: "Verdana, sans-serif",
    fontSize: "18px",
    color: "blue"
  },
  getType() {
    return this.type;
  },
  getPlaceholder() {
    return this.placeholder;
  },
  getStyles() {
    return this.styles;
  }
}

const inputAge = createElem("input");
document.body.insertAdjacentElement("afterbegin", inputAge);
inputAge.focus();

let p; //абзац с результатом
let error; //окно с ошибкой

const result = () => {
  if(document.getElementById("result")) {
    p.innerHTML = `Вам: ${inputAge.value} ${getGrammaticYear(+inputAge.value)}`;
  }
  else {
    p = createElem("p");
    inputAge.insertAdjacentElement("afterend", p);
  }
}

inputAge.addEventListener("input", () => {
  if(+inputAge.value > 0) {
    if(document.querySelector(".error")) {
        setTimeout(() => {
          error.classList.remove("animate__backInDown");
          error.classList.add("animate__backOutUp");
        }, 500);
        setTimeout(() => {error.remove();}, 3000);
    }
    result();
  }
  else {
    if(inputAge.value != "") {
        error = createElem("div");
        document.body.insertAdjacentElement("afterbegin", error);
    }
    else {
      if(document.querySelector(".error")) {
       setTimeout(() => {
          error.classList.remove("animate__backInDown");
          error.classList.add("animate__backOutUp");
        }, 500);
        setTimeout(() => {error.remove();}, 3000);
      }
    }
  }
})

function createElem(tagName) {
  elem = document.createElement(tagName);

  switch(tagName) {
    case "p": elem.setAttribute("id", "result");
              
              elem.style.textAlign = "center";
              elem.style.fontFamily = "Georgia, serif";
              elem.style.fontSize = "22px";
              elem.style.color = "green";

              elem.innerHTML = `Вам: ${inputAge.value} ${getGrammaticYear(+inputAge.value)}`;
              break;
    case "input": elem.setAttribute("type", input.getType());
                  elem.setAttribute("placeholder", input.getPlaceholder());

                  for(let key in input.getStyles()) {
                    elem.style[key] = input.getStyles()[key];
                  }
                  break;
    case "div": elem.classList.add("error", "animate__animated", "animate__backInDown");
                elem.textContent = "Ошибка! Возраст не может быть < 0.";
                break;
  }
  
  return elem;
}

function getGrammaticYear(years) {
  let result = "";

//1, 21, 31,... (кроме 11) - "год"
//2 - 4, 22, 23, 24,... (кроме 12, 13, 14) - "года"
//5 - 19, 20, 25 - 29, 30, 35 - 39, 40,... - "лет"

  if(years % 10 == 1 && years % 100 != 11) {
    result = "год";
  }
  else if(years % 10 >= 2
           && years % 10 <= 4
           && (years % 100 > 14 || years % 100 < 12)
         ) 
  {
    result = "года";
  }
  else {
    result = "лет";
  }
  return result;
}

// let users = [];
// let user;

// let countUsers = prompt("Кол-во пользователей (объектов):"); //string или null (object)

// if(!countUsers && typeof countUsers == "object") {
//   console.log("Вы отменили!");
// }
// else {
//   if(countUsers == "") {
//     console.log("Вы ничего не ввели!");
//   }
//   else {
//     if(isNaN(countUsers)) {
//       console.log("Вы ввели не число!");
//     }
//     else {
//       for(let i = 0; i < countUsers; i++) {
//         user = User();
//         users[i] = user;
//       }
//     }
//   }
// }

// function User() {
//   let user = {};

//   user.name = prompt("Имя:");
//   user.sex = prompt("Пол (м, ж):");
//   user.age = randomAge();

//   return user;
// }

// function randomAge() {
//   return age = (Math.random() * 100).toFixed(0);
// }

// const getUserName = function(user) { return user.name; }
// getUsers(users);

// function getUsers(users) {
//   for(let user of users) {
//     console.log(`${getUserName(user)}, возраст - ${user.age}`);
//   }
// }



// *** Функциональное выражение (Function Expression) ***
// let number = 5;
// const factorial = function inner(number) {
//   if(number <= 1) {
//     return 1;
//   }
//   return number * inner(number - 1);
// }
// console.log(`Факториал числа ${number} = ${factorial(number)}`);



//let arr = new Map();
//let arr = new Map([
  // "key": value,
  // "key": value,
  // "key": value
// ]);

//size
//get(key), set(ket, value)
//clear()
//delete(key)

//for (let key of arr.keys()) {}
//for (let value of arr.values()) {}
//for (let elem of arr) { 
//    elem[0] //key
//    elem[1] //value
//  }

//arr.forEach((value, key) => {
// 
// })

//*** Ассоциативный массив (с помощью конструктора Map) ***
// let masMap = new Map([
//   ["userName", "Иван"],
//   ["ageUser", 20],
//   ["sex", "м"]
// ]);

// for(let key of masMap.keys()) {
//   console.log("Ключ: " + key);
// }

// console.log("*****");

// for(let value of masMap.values()) {
//   console.log("Значение: " + value);
// }

// if(masMap.has("userName")) {
//     console.log("Имя пользователя: " + masMap.get("userName"));
// }

// console.log("*****");

// for(let elem of masMap) {
//   console.log("Ключ: " + elem[0]); //ключ
//   console.log("Значение: " + elem[1]); //значение
// }

// masMap.forEach((value, key) => {
//   console.log("Ключ: " + key);
//   console.log("Значение: " + value);
// })























// Разобраться с Reduce!!!
// mas = [-2, -4, 5, 20, 5, 2, 7];
// let result;
// let i;
// let value = mas.reduce(function (sum, elem, _index, mas) {
//     return (result > 10) ? _index: sum + elem;
// });
// console.log(`Итоговое значение = ${value}`);