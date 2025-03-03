let person ={
    firstname : "Hitesh",
    lastName : "Shimpi",
    age:28,
    fullName : function()
    {
        return this.firstname+this.lastName
    }
}

console.log("Full name is : "+person.fullName())
console.log(person.firstname)
person.gender ='male'

console.log(person)


// delete

//delete person.gender
//console.log(person)

//
for(let key in person)
    {
        console.log(person[key])
    }


