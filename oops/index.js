// 'use strict'
// function foo(){
//     console.log(this.name);
// }
// foo.call({name:"subhash"});

/////////////
// const foo=(name)=>{
//     console.log(this.name=name);
    
// }
// const a={name:"subh"}
// foo(a);

///////////////////////

// function foo(arg1,arg2){
//     console.log(this.name);
//     console.log(arg1);
//     console.log(arg2);
// }
// foo.call({name:"ajmera"},'hello','world');

///////////////////////////////////////   Apply method 


// function foo(arg1,arg2){
//     console.log(this.name);
//     console.log(arg1);
//     console.log(arg2);
// }

// foo.apply({name:"ajmera"},['hello','world']);
//////////////////////////////////////////////////// 

// const student={
//     name:'subhash',
//     sayName:function (){
//         console.log(this.name)
//     }

// }
// student.sayName()
/////////////////////////////////////////////


// const student={
//     name:'subhash',
//     sayName:function(){
//         console.log(this.name)
//     }
// }

// const greetStudent=student.sayName;
// greetStudent()
//////////////////////////////////   bind method
  
// const student={
//     name:'subhash',
//     sayName:function(){
//         console.log(this.name)
//     }
// }
// const greetStudent=student.sayName.bind({name:"hello this ajmera"});
// greetStudent()

////////////////////////////////////////////

// const student={
//     name:'subhash',
//     sayName:function (){
//         function bar(){
//             console.log(this)
//         }
//         bar()
//     }
// }
// student.sayName()

//////////////////////////////////////

// const student={
//     name:'subhash',
//     sayName:function (){
//         function bar(){
//             console.log(this.name)
//         }
//         bar()
//     }
// }
// var name="Global"
// student.sayName()
///////////////////////////////   aero function


// const student={
//     name:'subhash',
//     sayName:function (){
//         const bar=()=>{
//             console.log(this.name)
//         }
//         bar()
//     }
// }
// var name="Global"
// student.sayName()
///////////////////////////////////
// const a=()=>{
//     console.log(this)
// }
// a()

// function name(params) {
//     console.log(this)
// }
// name()
///////////////////////////////////

// const student={
//         name:'subhash',
//         sayName:function (){
//            setTimeout(function(){
//                console.log(this.name)
//            },1000)
//         }
//     }
//     var name="Global"
//     student.sayName()

/////////////////////////////


// const student={
//     name:'subhash',
//     sayName:function (){
//        setTimeout(()=>{
//            console.log(this.name)
//        },1000)
//     }
// }
// var name="Global"
// student.sayName()
////////////////////////////

// const student={
//     name:'subhash',
//     sayName:()=>{
//        setTimeout(()=>{
//            console.log(this.name)
//        },1000)
//     }
// }
// var name="Global"
// student.sayName()

//////////////////////

// function Name() {

// }
// const a=new Name
// console.log(a)


//////////////////////

// function Name(s) {

//     return(this.name=s)
// }
// const a=new Name('subhash')
// console.log(a.name)


//////////////////////////////////

    // function Name(name,age) {
    //         this.name=name;
    //         this.age=age
    //         this.sayName=function(){//////prototype use
    //             return(this.name)/////in this field
    //         }
    // }
    // const a=new Name("subhash",23)
    // console.log(a.sayName())
    //////////////////////////////////////////   constructor inheritance 
    
//     function Dog(name,age) {
//             this.name=name
//             this.age=age
//     }
//  Dog.prototype.bark=function(){///prototype use
//     return(this.name)////in this field
// }

// function BullDog(name,age,breed){
//     Dog.call(this,name,age);
//     this.breed=breed
// }

// BullDog.prototype=Object.create(Dog.prototype);
// var dog1=new BullDog("bruno",8,"BullDog")
// console.log(dog1)
// console.log(dog1.bark())

//////////////////////////////////////////

// function Dog(name,age) {
//     this.name=name
//     this.age=age
// }
// Dog.prototype.bark=function(){///prototype use
// console.log('this',this.name)////in this field
// }
// function BullDog(name,age,breed){
// Dog.call(this,name,age);
// this.breed=breed
// }
// BullDog.prototype=Object.create(Dog.prototype);
// BullDog.prototype.bark=function(){///prototype use
//     console.log("this is from child",this.name)////in this field
//     }
// var dog1=new BullDog("bruno",8,"BullDog")
// console.log(dog1)
// dog1.bark()
/////////////////////////////////////////////////////////   class

// class Animals {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sing() {
//         return `${this.name} can sing`;
//     }
//     dance() {
//         return `${this.name} can dance`;
//     }
// } 
// class Cats extends Animals {
//     constructor(name, age, whiskerColor) {
//         super(name, age);
//         this.whiskerColor = whiskerColor;
//     }
//     whiskers() {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }

// let clara = new Cats("Clara", 33, "indigo");
// let claraa = new Animals("subhash", 23, "ajmera");
// console.log(clara)
// console.log(clara.sing());
// console.log(claraa.dance());
// console.log(clara.whiskers());
