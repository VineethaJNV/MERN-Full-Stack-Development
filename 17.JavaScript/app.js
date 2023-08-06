for(let i = 1; i < 15; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

for(let i = 1; i <= 10; i++){
    console.log("5 * "+ i+" = "+5*i);
}

let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("grapes");
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let i = fruits.length; i >= 0; i--){
    console.log(fruits[i]);
}

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
let result = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] != num){
        result.push(arr[i]);
    }
}
console.log(result);

let number = 287152;
let temp = number;
let count = 0;

//Sum of digits is
let sum = 0;
while(number > 0){
    let digit = number % 10;
    console.log(digit);
    sum += digit;
    number = Math.floor(number / 10);
}
console.log(sum);
number = temp;
while(number > 0){
    count++;
    number = Math.floor((number / 10));
    console.log(number);
}
number = temp;
console.log("The count of digits in "+number+" is"+count);