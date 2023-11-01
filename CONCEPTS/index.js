// let monkey = {
//     firstName : 'Abhinva',
//     lastName : "Singh",
    

// }
// let fullName  = function (city , state) {
//     console.log(this.firstName +" "+this.lastName);
//     console.log(city +" "+state);
// }

let monkey2  = {
    firstName : "shreya",
    lastName : "Gupta",
}

// fullName.call(monkey , 'Lucknow' , 'UP');
// fullName.apply(monkey2 , ['Pune ' , 'Maharashtra']);
// let newMonkey  = fullName.bind(monkey , 'jaipur' , 'Rajasthan');
// console.log(newMonkey);
// newMonkey();

// polyfill for bind

let monkey = {
    firstName : 'Abhinva',
    lastName : "Singh",
}

let printName  = function (city , state , country) {
    console.log(this.firstName , this.lastName , city , state , country);
}

// let bindFunc = printName.bind(monkey);
// bindFunc();

// we want to create our implementation of bind method.
// 1. bind method is accessible to every function , so our method should be too

// for that we use Function.prototype

// Function.prototype.mybind = function (...args) {
//     // to access the function it is being called on , use this
//     let obj = this;
//     // it return a function
//     return function () {
//         obj.call(args[0]);
//     }
// }

// let myBindedFunc = printName.mybind(monkey2);
// myBindedFunc();


let exBind = printName.bind(monkey2 , 'Lucknow' , 'UP');
exBind('IND');

Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params , ...args2])
    }
}
let myExBind = printName.myBind(monkey , 'Pune' , 'Maha');
myExBind('UK');