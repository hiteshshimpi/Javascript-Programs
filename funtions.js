// functions --> block of code wrapped in the block of code to perform some opertaions

// var  is function if declared in function and globalif declare globally  
// let global level or block level

function add(a,b){
var c = a+b
console.log(c)
}

add(1,3)

function add1(a,b)
{
    return a+b

}


let sum =add1(4,9)
console.log(sum)



/// Functions that do not have name and we call them as anyonmous fuctions

let sumofIntegers =(c,d)=>c+d
console.log(sumofIntegers(2,3))