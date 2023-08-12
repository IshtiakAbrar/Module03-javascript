function findMaxNumber(arr){
    if (arr.length==0) return null;
    else{
    let maxNum=Math.max(...arr);
    return maxNum;
    }
}


const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2));

const emptyArray = [];
console.log(findMaxNumber(emptyArray));

