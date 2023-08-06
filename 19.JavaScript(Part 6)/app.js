//WriteaJavaScriptfunctiontocountthenumberofvowelsinaStringargument
function countVowel(str){
    let count = 0;
    str = str.toLowerCase();
    for(let i = 0 ; i < str.length; i++){
        if(str[i]==='a'|| str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
            count++;
        }
    }
    return count;
}
let nameStr = "Vineetha"
console.log(countVowel(nameStr));

///WriteaJavaScriptfunctionthatacceptsalistofcountrynamesasinputandreturnsthelongestcountrynameasoutput.Example:country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica"

function fingLongest(names){
    let longestName = "";
    for(let i = 0; i < names.length; i++){
        if(names[i].length > longestName.length){
            longestName = names[i];
        }
    }
    return longestName;
}
let country = ["Australia","Germany","UnitedStatesofAmerica"];
console.log(fingLongest(country));


//WriteaJavaScriptfunctiontoextractuniquecharactersfromastring.Example:str=“abcdabcdefgggh”ans=“abcdefgh
function extractUnique(str){
    let result = "";
    for(let  i = 0; i < str.length; i++){
        let currChar = str[i];
        let flag = false;
        for(let j = 0; j < str.length && j != i; j++){
            if(currChar == str[j]){
                flag = true;
            }
        }
        if(!flag){
            result += currChar;
        }
    }
    return result;
}
let str = "abcdabcdefgggh";
console.log(extractUnique(str));

//WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber

function findLarge(arr, n){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n){
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [4, 3, 6, 8,10, 7];
let result = findLarge(arr, 4);
console.log(result);


function concatString(names){
    let str = "";
    for(let i = 0; i < names.length; i++){
        str = str + names[i];
    }
    return str;
}
let names = ["vineetha","vasavi", "sreevani", "Sandhya", "Sushma", "Sireesha"];
console.log(concatString(names));


function calcSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log((n*(n+1))/2);
    return sum;
    
}
console.log(calcSum(5));