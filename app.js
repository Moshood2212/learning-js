// console.log("hello world");

// // js variables and valus ( let and const)
// let x = 2;
// const y = 4;
// console.log(x);
// console.log(y);

// const country = "Ghana"
// let state = "Lagos state"

// console.log(country);
// console.log(state);
// state = "abia state"
// console.log(state);


// const firstName = "john";
// const LastName = 'DOe';
// const middleName = 'OWen';
// const currentJob = "Product mananger";
// const email = "memud3000@gmail.com";

// // String concatenation joining of strings +
// const fullName = firstName + " " + middleName + " " +LastName;
// console.log(fullName);
// const description = "My name is" + firstName + "i work as a" + currentJob;
// console.log(description);


// const olu = "you  can message  on  this  email, memud@gamil.com;"
// console.log(olu);

// // getting character -
// console.log(middleName[1]);
// console.log(middleName[1]);


// // // string length
// // console.log(firstName.length);
// // console.log( fullName.toUpperCase());

// // // extracting parts of a string-slice substring
// // const email2 = "memud3002gmail.com";
// // console.log(email2.slice(0, 5));


// // // string.substrings( start, count of cters)
// // console.log(email2.substr(0, 12));


// // // replace string content-replace replaceall
// // console.log(email2.replace("a", "o"));
// // console.log(email2.replace("memud","toyin"));

// // // includes, indexof, lastindexof,trim,concat
// // // trimstart,trimend,startwith,endswith

// // // template literals
// // const author = "Chinua Achebe";
// // const book = "things fall apart";
// // const year = 1996;






// // // const countryy = Nigeria;
// // //    const continent = Africa;
// // // let population = 1000000;

// // // console.log(country,continent,population);


// // // let island = "isreal"
// // // console.log();
    

// // const language = "french";
// // console.log(language);

// // const countdown = history;
// // const downn = "asray";
// // population = 5000;
// // population /= 2;
// // console.log(population);
// // population += 1
// // console.log(population);

// // const des =


// // const country = "nigeria";
// // const continent = "africa";
// // let population = 5000;
// // console.log(country, continent, population);
// // const des = `${country} is in ${continent} `


// // comparesion operators
// // typeoff

// // logical operators   and&  or||    not!

// // const vip = "Hello world";
// // console.log(vip);
// // .console.log(vip.endsWith(""));

// const country = "Hungary";
// const continent = "europe";
// const population = 12;
// const isisland = false;
// const language = "french";

// // sarah speaks

// if (language === "English" && population < 50 && isisland) {
//     console.log(`you should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria`);
// }

// const password = "olu222@";
// if (password.length >= 7 && password.includes("@")) {
//     console.log("your password is recommended");
// } else if (password.length >= 7) {
//     console.log("your password is strong");

// } else {
//     console.log("your password is weak");
// }


// const num1 = " ";

// if (num1 > 0 ) { console.log("is positive");
    
// } else if (num1 < 0) { console.log("is negative");
    
// } else {
//     console.log("zero");
// }

// const num2 = "10";
// if (num2 % 2===0) {
//     console.log("this is even");
// } else {
//     console.log("this is odd");
// }

// const agee = -4
// if (agee < 18) { console.log("welcome to the baby section");
    
// }else if (agee >= 18 && agee <= 50) { console.log("Welcome to club");
    
// } else {
//    console.log(" welcome to vip");
// }


// let markWeight1 = 78;
// let markHeight1 = 1.69;
// let johnWeight1 = 92;
// let johnHeight1 = 1.95;

// let markBMI1 = markWeight1 / (markHeight1 ** 2);
// let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

// let markHigherBMI1 = markBMI1 > johnBMI1;
// console.log("Data 1:");
// console.log("Mark's BMI: " + markBMI1);
// console.log("John's BMI: " + johnBMI1);
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI1);



// let markWeight2 = 95;
// let markHeight2 = 1.88;
// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// let markBMI2 = markWeight2 / (markHeight2 ** 2);
// let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

// let markHigherBMI2 = markBMI2 > johnBMI2;
// console.log("Data 2:");
// console.log("Mark's BMI: " + markBMI2);
// console.log("John's BMI: " + johnBMI2);
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI2);


// if (markBMI2 > johnBMI2) {
//   console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
// } else if (johnBMI2 > markBMI2) {
//   console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
// } else {
//   console.log("Mark and John have the same BMI!");
// }
// let dolphinsScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;

// if (dolphinsScore > koalasScore) {
//   console.log(`Dolphins win with an average score of ${dolphinsScore.toFixed(1)}!`);
// } else if (koalasScore > dolphinsScore) {
//   console.log(`Koalas win with an average score of ${koalasScore.toFixed(1)}!`);
// } else {
//   console.log(`It's a draw! Both teams have an average score of ${dolphinsScore.toFixed(1)}`);
// }


// ternary oparator


// loop
// for (let i = 0; i < 2; i++){
//   console.log(`in the loop ${i}`);
// }
// const language= "huh"
// console.log('outside');
// console.log(language);



// function describeCountry(country, population, capitalCity) {
//   console.log(`${country} had ${population} millon people and its ${capitalCity} is helsinki`);
// }

// describeCountry('Nigeria', 76, 'Abuja');
// describeCountry('togo', 126, 'loga');

// const calcAverage = function (a, b, c) {
//   const avg = (a + b + c) / 3;
//   return Number(avg.toFixed(2));
  
// };
// const avgDolphin2 = calcAverage(123, 98, 89);
// const avgKola2 = calcAverage(110, 87, 95);
// console.log(avgDolphin2, avgKola2);



// Arrow function
// const name =()=>{}

const logger = (a, b, c) => {
  const total = a + b + c;
  return total;
};
console.log(logger(4,5,7));
// we could arrow function for 1 line return eg

const diff = (a, b) => a - b;
console.log(diff(67, 50));

const calcAvg = (a, b, c) => {
  constavg = (a + b + c) / 3;
  return Number(avg.tofixed(2))
};


// variable scoping is where var accessing from we have 2 types - global and local var
// global var can be access everywhere eg `ade` , while local can only be access inside a block of code {ade}

// arrays are use to store more than 1 value inside a var its denoted by [element ,element etc]

// includes,sort,pop,push,shift,unshift,slice,splice,concat,join,tostring
// fliter,find map,foreach

const student = ["mofe", "precious", "sheu", "bola"];
console.log(student);
console.log(student.length);
console.log(student[0]);
console.log(student.length - 1);



const countries = ["nigeria", "ghana", "usa", "uk"];
console.log(countries.length);
countries.length > 5 ? console.log("the countries is more than 5"):
console.log("its less than 5");


let savings = 100000
const transaction = [5000, -10000, -100]

transaction.push(-2000);
transaction.push(5000);
transaction.push(-3000);
transaction.pop();
console.log(transaction);
let debit = 0;
let credit = 0;

for (i = 0; i < transaction.length; i++) {
  console.log(transaction[i]);
  savings += transaction[i]
  if (transaction[i] < 0) {
    debit += transaction[i];
    console.log(`you have been debited ${transaction[i]}`);
    
  } else {
     credit += transaction[i];
    console.log(`you have been credited ${transaction[i]}`);
  }
}
console.log(`The total debit is ${debit}`);
console.log(`The total crebit is ${credit}`);
console.log(`your account balance is ${savings}`);





const friends= ["john","jane","Adam","Jennifer","owen"]
friends.forEach( (friend) => {
console.log(`The name of my friend is ${friend}`);  
});
friends.forEach((friend, index) => {
  console.log(`${index} the name of my friend is ${friend}`);
});



friends.forEach((f, index) => {
  console.log(f, index);
})

// map

friends.map((val, index) => {
  console.log(index);
  if (val === "jane" || val === "Adam") {
    console.log(`${val} is my best friend`);
  } else {
    console.log(`${val} is just my friend`);
  }
})

// filter find

const filteredfriends = friends.filter((friend) => {
  return friend.startsWith("j");
});
console.log(filteredfriends);

// find
const foundUser = friends.find((friend) => {
  return friend.startsWith("j")
})
console.log(foundUser);


const result = friends.filter((friend) => friend.length > 3);
const result2 = friends.find((f) => f.startsWith("j"));

console.log(result,result2);