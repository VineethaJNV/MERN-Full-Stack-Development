//Write an arrow function named arrayAverage that accepts an array of numbersand returns the average of those numbers.

const arrayAverage = (arr)=>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return (sum/arr.length);
}

arr = [1,2,3,4,5];
console.log(arrayAverage(arr));

// Write an arrow function named isEven() that takes a single number as argumentand returns if it is even or not.

const isEven = (n) => {
    return n % 2 == 0;
}
console.log(isEven(8));