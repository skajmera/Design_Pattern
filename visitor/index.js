// // var Employee = function (name, salary, vacation) {
// //     var self = this;

// //     this.accept = function (visitor) {
// //         visitor.visit(self);
// //     };

// //     this.getName = function () {
// //         return name;
// //     };

// //     this.getSalary = function () {
// //         return salary;
// //     };

// //     this.setSalary = function (sal) {
// //         salary = sal;
// //     };

// //     this.getVacation = function () {
// //         return vacation;
// //     };

// //     this.setVacation = function (vac) {
// //         vacation = vac;
// //     };
// // };

// // var ExtraSalary = function () {
// //     this.visit = function (emp) {
// //         emp.setSalary(emp.getSalary() * 1.1);
// //     };
// // };

// // var ExtraVacation = function () {
// //     this.visit = function (emp) {
// //         emp.setVacation(emp.getVacation() + 2);
// //     };
// // };

// // function run() {

// //     var employees = [
// //         new Employee("John", 10000, 10),
// //         new Employee("Mary", 20000, 21),
// //         new Employee("Boss", 250000, 51)
// //     ];

// //     var visitorSalary = new ExtraSalary();
// //     var visitorVacation = new ExtraVacation();

// //     for (var i = 0, len = employees.length; i < len; i++) {
// //         var emp = employees[i];

// //         emp.accept(visitorSalary);
// //         emp.accept(visitorVacation);
// //         console.log(emp.getName() + ": $" + emp.getSalary() +
// //             " and " + emp.getVacation() + " vacation days");
// //     }
// // }
// // run()


///////////////////////////////////////////////////

// var arr = []
// const fun = (member, share) => {
//     var obj = {}
//     obj.member = member
//     obj.share = share
//    arr.push(obj)
  
//     for (var n = 0 ; n < arr.length ; n++) {
//         if (arr[n].member ==="subhash") {
//           var removedObject = arr.splice(n,1);
//           removedObject = null;
//           break;
//         }
//     }
// }

// fun("subhash", "2")
// fun("ali", "1")
// fun("subhash", "2")
// console.log(arr)
////////////////////////////////////////////////





// var arr = []
// const fun = (member, share) => {
//     var obj = {}
//     obj.member = member
//     obj.share = share
//    arr.push(obj)

//    const reformattedArray = arr.map((ob) => {
//          if(ob.member==="subhash") {
//              delete ob.member
//              delete ob.share
//               return ob
//     }})  
// }

// fun("subhash", "2")
// fun("ali", "1")
// fun("subhash", "2")
// console.log(arr)

////////////////////

// var filename=true
// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
   
//       if (filename) {
      
//         resolve('true') 
//         return     
//       }
//       reject(err) 
//     })
// }

// getFile(filename)
// .then(data => console.log(data))
// .catch(err => console.error(err))

/////////////////////////////////

