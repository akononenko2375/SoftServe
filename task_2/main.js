//** Concat */

function concat(...arrs) {
  let newArr = [];

  for (let arr of arrs) {
    if (Array.isArray(arr)) {
      newArr = [...newArr, ...arr];
    } else {
      newArr = [...newArr, arr];
    }
  }
  return newArr;
}

console.log(concat([1, 2], 4, [3, 4], [5, 6, 7], 6));

//** POP */
let arrayPop = [1, 2, 3, 4, 5];

function pop(arr) {
  const el = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return el;
}

console.log("Массив до функции рор:", arrayPop);
console.log("Элемент:", pop(arrayPop));
console.log("Измененный массив:", arrayPop);

//** Shift */

let arraySift = [1, 2, 3, 4, 5];

function shift(arr) {
  const el = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;

  return el;
}

console.log("Массив до функции shift:", arraySift);
console.log("Элемент:", shift(arraySift));
console.log("Измененный массив:", arraySift);

//** Push */ 

let arr = [1, 2, 3, 4, 5];

function push(arr, ...res) {
  let elems = res;

  for (let i = 0; i < elems.length; i++) {
    arr[arr.length] = elems[i];
  }

  return arr.length;
}

console.log("Массив до функции push:", arr);
console.log(push(arr, 6, 7));
console.log("Новый массив:", arr);

//** Unshift */ 

let arrayUnhift = [1, 2, 3, 4, 5];

function unshift(arr, ...res) {
  let elems = res;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + elems.length] = arr[i];
  }
  for (let i = 0; i < elems.length; i++) {
    arr[i] = elems[i];
  }
  return arr.length;
}

console.log(unshift(arrayUnhift, 7, 9));
console.log(arrayUnhift)

//!! First Reduce
let arr = ["Яблоко", "Банан", "Ананас"];

let map = arr.map((el) => el[0]);

console.log(map) //[ 'Я', 'Б', 'А' ]

let firstReduce = arr.reduce((acc, el) => {
  acc.push(el[0]);
  return acc;
}, []);

console.log(firstReduce); //[ 'Я', 'Б', 'А' ]

//!! Second Reduce

let filter = arr.filter((el) => el[0].toLowerCase() === "а");
console.log(filter);

let secondReduce = arr.reduce((acc, el) => {
  el[0].toLowerCase() === "а" && acc.push(el);
  return acc;
}, []);

console.log(secondReduce);

//!! Third Reduce

let thirdReduce = arr.reduce((acc, el, idx) => {
  acc.push(`${idx + 1}: ${el}`);
  return acc;
}, []);

console.log(thirdReduce); //[ '1: Яблоко', '2: Банан', '3: Ананас' ]
