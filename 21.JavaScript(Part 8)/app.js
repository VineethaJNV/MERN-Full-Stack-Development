let arr = [10, 20, 30, 40, 50, 22];

console.log(arr.every((el) => (el % 10 == 0)) );

let nums = [0, 2, 9, 10, -1, -2, 15];

let result = nums.reduce((min, el) =>{
    if(el < min){
        return el;
    }else{
        return min;
    }
})
console.log(result);