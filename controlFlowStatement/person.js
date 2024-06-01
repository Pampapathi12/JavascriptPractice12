
// Returning a Class from a Module
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return `${this.name}`
    }
}
module.exports = Person;