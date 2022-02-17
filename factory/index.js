class Engineer{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }

    getName(){
        return ' Engineer ' + this.firstName + " " + this.lastName
    }
}

class Manager{
    constructor(fname, lname){
        this.firstName = fname
        this.lastName = lname
    }

    getName(){
        return 'Manager ' + this.firstName + " " + this.lastName
    }
}

class Director{
    constructor(fname,lname){
        this.firstName = fname
        this.lastName = lname
    }

    getName(){
        return 'Director ' + this.firstName + " " + this.lastName
    }
}
// module.exports = {Engineer,Manager,Director}
//////////////////////////////////////////////////

// const a=new Engineer("subhash","ajmera")
// console.log(a.firstName)
///////////////////////////////////////////////

// const a=new Director("subhash","ajmera")
// console.log(a.getName())