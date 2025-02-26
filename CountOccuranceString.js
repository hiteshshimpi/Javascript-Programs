
let strings_inp ='sfdfsdff,.'
let character_to_be_found ='a'
let newString = removeDuplicate(strings_inp)
let arr1=[4,5,5,6,4,4,5,7,6,8,9]
removeDuplicatesArray(arr1)
let name = 'hitesh'
let palindrome =checkPalindrome(name)
console.log(palindrome)
fibbonacciSeries(8)

reverseString(name)
//let count_a=countOccurance(strings_inp,character_to_be_found)
//console.log(count_a)

function countOccurance(strings_inp,character_to_be_found)
{
    let count=0
    if(strings_inp.length<0)
        return 0;

    for(let i=0;i<strings_inp.length;i++)
        {
            if(strings_inp.charAt(i)===character_to_be_found)
                count++
        }
        return count
}

function removeDuplicate(strings_inp)
{
        let sets = new Set(strings_inp)
        console.log(sets)
}

function removeDuplicatesArray(arr1)
{
    var arr2 = [];
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i]))
            arr2.push(arr1[i])
    }
    console.log("Arr without duplicates : "+arr2)
}

function checkPalindrome(name)
{
    let i =0;
    let j =name.length-1;
    var newName="";
    
    while(i<=j)
        {
            if(name.charAt(i)!==name.charAt(j))
                return "Not Palindrome"
            if(name.charAt(i)===name.charAt(j))
                i++;
                j--;
                newName= newName+name.charAt(i)
        }
        console.log(newName)
        return "It is palindrome"

}

function reverseString(name)
{
    var newName="";
    for(let i=name.length-1;i>=0;i--){
        newName=newName+name.charAt(i)
    }
    console.log(newName)
}

function fibbonacciSeries(num)
{
    var ans =0;
    let a =0
    let b=1
    let i=0;
        while(i<num)
            {
                ans=(a+b)
                console.log(ans)
                a =b
                b =ans
                i++
            }
    
}