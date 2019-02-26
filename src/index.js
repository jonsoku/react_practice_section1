/*
function sayHello(name) {
  return "Hello" + name;
}

//띄어쓰기 가능..
const sayHello = (name = "Human") => `Hello ${name}`;

const jonsoku = sayHello();

console.log(jonsoku);

const human = {
  name: "JONGSEOK",
  lastName: "LEE",
  nationality: "Korean",
  favoriteFood: {
    breakfast: "Sang",
    lunch: "Doncas",
    dinner: "San + Doncas"
  }
};
//const name = human.name;
//const lastName = human.lastName;
//const difName = human.nationality;

const {
  name,
  lastName,
  nationality: difName,
  favoriteFood: { dinner, breakfast, lunch }
} = human;

console.log(name, lastName, difName, dinner, breakfast, lunch);

const days = ["mon", "tues", "wed"];
const otherDays = ["thu", "fri", "sat"];
const allDays = [...days, ...otherDays, "Sun"];
console.log(allDays);

const ob = {
  first: "hi",
  second: "hello"
};

const ab = {
  thrid: "bye bye"
};

const two = { ...ob, ...ab };
console.log(two);
*/

/*

class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const jonsoku = new Human("jongseok", "lee");
console.log(jonsoku);
console.log(jonsoku.name);
console.log(jonsoku.lastName);

class Baby extends Human {
  cry() {
    console.log("waaaaaaa");
  }

  sayName() {
    console.log(`my name is ${this.name} ${this.lastName}`);
  }
}

const myBaby = new Baby("kazuko", "aida");

console.log(myBaby);
console.log(myBaby.cry());
console.log(myBaby.sayName());

*/

/*

const days = ["MON", "TUE", "WED", "THURS", "FRI"];

const addSmile = (day, index) => `#${index + 1} 😄${day}`;

const smilingDays = days.map(addSmile);

console.log(smilingDays);

*/

/*
const numbers = [2, 45, 53214, 123, 1543, 124, 983, 424, 4, 1, 2, 4, 5, 7];

const testCondition = number => number > 100;
const biggerThan100 = numbers.filter(testCondition);

const lessThan100 = numbers.filter(number => number < 100);

console.log(biggerThan100);
console.log(lessThan100);

let posts = ["Hi", "Hello", "Bye"];

posts = posts.filter(post => post !== "Bye");

console.log(posts);
*/
/*
let posts = ["Hi", "Hello", "Bye"];

//map 새로운 배열을 return 한다.
//filter 조건에 맞는 새로운 배열을 return 한다.
//foreach 각각의 item에 대해 어떠한 시행을 하는 것.
//posts.forEach(post => console.log(post));

//push 추가하는 것
posts.push("new");
console.log(posts);


*/
//include 포함하는 것
let greetings = ["hi", "howdy", "suup"];
if (!greetings.includes("Hello")) {
  greetings.push("Hello");
}

console.log(greetings);
