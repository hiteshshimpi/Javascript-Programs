class Person
{
    age =25
    get location()
    {
        return "India"
    }
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }

    
}

let p =new Person("Hie","tesh")

console.log(p.age)
console.log(p.location)
console.log(p.firstName)