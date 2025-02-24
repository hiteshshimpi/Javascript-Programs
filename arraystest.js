var marks = Array(6);
var marks= new Array(20,30,40,50,60)
console.log(marks)


//var marks =[1,2,3,4,5,6]
console.log(marks[0])
marks[4]=1200
console.log(marks)
console.log(marks)

console.log(marks.length)



// Add at the end 

marks.push(1340)
console.log(marks)


// delete the last element
marks.pop()
console.log(marks)


// Add at the begining

marks.unshift(12)
console.log(marks)



// Get the index of element

console.log("Index of 12 is :"+marks.indexOf(12))


//if element present in the array ,, check 13 is present or not
console.log(marks.includes(13))



// Gett the subarray
subMarks = marks.slice(1,4)
console.log(subMarks)



console.log("Iteration -----******----")
//Iterate over this array

let sum =0;
for(let i =0;i<marks.length;i++)
    {
        sum = sum +marks[i]
    }

    console.log(sum)



    console.log("**********************Reduce **************************")
/// Reduce filter map

// use to perform operation on each element in the array

let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

//mark is index value

//sum =0 and mark ==12
//sum =12 and mark= 20



// print the elements of the array as eeven numbers

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#########################$$$$$$$$$$$$$$$$$$$$$$$$")
var scores =[12,13,14,16]

// Filtering
let newScores =scores.filter(scores=>scores % 2 ==0)
console.log(newScores)


// When to use reduce -- when we want to update the value and when to use filter , when we want to filter out the data



console.log("MAPPP***********************************************")

// it will modify each  every value of array to new value 

// create a new array with even number of scores and multiply each value with array


var newMultiplyedData = newScores.map(newScores =>newScores * 3)
console.log(newMultiplyedData)

console.log("NEW QUESTION ")

//create a new array with even number of scores and multiply each value with array 3 and then sum them


var array =[2,3,4,5,6]
    var filterArray = array.filter(array => array % 2==0)
    console.log("Filter array is :" +filterArray)

    var multiplefilterArray1 = filterArray.map(filterArray => filterArray * 3)
    console.log("Multipied Array  : "+multiplefilterArray1)

    var sumofFilterandMultipleArray = multiplefilterArray1.reduce((sum,multiplefilterArray1)=>sum+multiplefilterArray1,0)
    console.log("Summing value after filter :"+sumofFilterandMultipleArray)


    // We can have this in 1 single line as well

    // Combine all the 3 values



    // Sorting a array


    let fruits =["banana","mango","apple", "jackfruit"]
    fruits.sort()
    console.log(fruits)

    var arr1 =[12,3,10.5,55,17]
    console.log(arr1.sort())



    

    // Custom logic value

    console.log(arr1.sort((a,b)=>a-b))


    console.log("Reverse Logic : "+arr1.reverse())





