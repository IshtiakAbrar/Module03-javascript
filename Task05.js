function doubleNumbers(arr){
    let arrNew= arr.map(function(item){
        return item*2;
    })
    return arrNew;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); 