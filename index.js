//A cumulative sum is a sequence of partial sums of a given sequence. For example, the cumulative sums of the sequence {a,b,c,...}, are a, a+b, a+b+c, .... Cumulative sums are implemented as Accumulate[list].

// //// IIFE
// (function() {
//     var x = 20;
//     var y = 20;
//     var answer = x + y;
//     console.log(answer);
//  })();

//

// let autoIncrement = (function() {
//     let number = 0

//     return function () {
//      number++
//      return number
//     }
// })()
// console.log(autoIncrement())
// console.log(autoIncrement())
// console.log(autoIncrement())
// console.log(autoIncrement())
// console.log(autoIncrement())

////////////////////////////////

// const autoIncrementer = (function() {
//     let value = 0;
  
//     return {
//       incr() {
//           value++
//       },
  
//       get value() {
//           return value
//       }
//     };
//   })();
//   autoIncrementer.incr()
//   autoIncrementer.incr()
//   console.log(autoIncrementer.value)

////////////////////////////////////////

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Your own server here');
// });

// server.on('error', err => {
//     console.log("Error:: ", err)
// })

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server up and running');
// });

////////////////////////////

// class Observable {

//     constructor() {
//      this.observers = {}
//     }

//     on(input, observer) {
//      if(!this.observers[input]) this.observers[input] = []
//      this.observers[input].push(observer)
//     }

//     triggerInput(input, params) {
//      this.observers[input].forEach( o => {
//          o.apply(null, params)    
//      })
//     }
// }

// class Server extends Observable {

//     constructor() {
//      super()
//     }


//     triggerError() {
//      let errorObj = {
//          errorCode: 500,
//          message: 'Port already in use'
//      }
//      this.triggerInput('error', [errorObj])
//     }
// }

// server.on('error', err => {
//     console.log(“Error:: “, err)
// })

////////////////////////////////////
// function processRequest(r, chain) {

//     let lastResult = null
//     let i = 0
//     do {
//      lastResult = chain[i](r)
//      i++
//     } while(lastResult != null && i < chain.length)
//     if(lastResult != null) {
//      console.log("Error: request could not be fulfilled")
//     }
// }

// let chain = [
//     function (r) {
//      if(typeof r == 'number') {
//          console.log("It's a number: ", r)
//          return null
//      }
//      return r
//     },
//     function (r) {
//      if(typeof r == 'string') {
//          console.log("It's a string: ", r)
//          return null
//      }
//      return r
//     },
//     function (r) {
//      if(Array.isArray(r)) {
//          console.log("It's an array of length: ", r.length)
//          return null
//      }
//      return r
//     }
// ]
    
// processRequest(1, chain)
// processRequest([1,2,3], chain)
// processRequest('[1,2,3]', chain)
// processRequest({}, chain)
/////////////////////////////////////////////

// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50, eyeColor:"blue"
//   }
  
//   const x = person;
//   x.age = 10;  
//   console.log(person)
//////////////////////////////////

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//      return this.firstName
//     }
//   };
//   console.log(person.lang)

// /////////////////////////////////
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang;
//     }
//   };
//   // Set an object property using a setter:
//   person.lang = "en";
// console.log(person)
/////////////////////////////////////

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang.toUpperCase();
//     }
//   };
// //   Set an object property using a setter:
//   person.lang = "en";
//   console.log(person.language)
  ////////////////////////////

//   const obj = {counter : 0};

// // Define setters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (value) {this.counter -= value;}
// });

// // Play with the counter:
// console.log(obj)

// obj.reset;
// console.log(obj)

// obj.add = 5;
// console.log(obj)

// obj.subtract = 1;
// console.log(obj)

// obj.increment;
// console.log(obj)

// obj.decrement;
// console.log(obj)
// obj.reset;
// console.log(obj)


//////////////////////////////////

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
//   console.log(myFather)
///////////////////////////////

// let names = {
//     fname: "Dillion",
//     lname: "Megida"
// }
// console.log(names.fname);
// console.log(names.hasOwnProperty("fname"));

////////////////////////////////////////

// function DogObject(name, age) {
//     let dog = Object.create(constructorObject);
//     dog.name = name;
//     dog.age = age;
//     return dog;
// }

// let constructorObject = {
//     speak: function(){
//         return "I am a dog"
//     }
// }
// let bingo =  DogObject("Bingo", 54);
// console.log(bingo);

// // console.log(constructorObject.speak())
///////////////////////////

// function Animals(name, age) {
//     let newAnimal = Object.create(animalConstructor);
//     newAnimal.name = name;
//     newAnimal.age = age;
//     return newAnimal;
// }

// let animalConstructor = {
//     sing: function() {
//         return `${this.name} can sing`;  
//     },
//     dance: function() {
//         return `${this.name} can dance`;
//     }
// }

// const a=new Animals("subhash",23)
////////////////////////////////////

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
// // console.log(clara.sing());
// // console.log(claraa.dance());
// // console.log(clara.whiskers());

/////////////////////////////////////////////////

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
// Person.prototype.nationality = "English";
// const m=new Person("d","d",3,"s")
//   console.log(m.nationality)

////////////////////////////
