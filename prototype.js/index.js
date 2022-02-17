// const atv = {
//     make: 'Honda',
//     model: 'Rincon 650',
//     year: 2018,
//     mud: () => {
//         console.log('Mudding');
//     }
// };
// const secondATV = Object.create(atv);



// console.log(secondATV)
// atv.mud()

///////////////////////////////////

// const atvPrototype = {
//     mud: () => {
//         console.log('Mudding');
//     }
// };

// function Atv(make, model, year) {
//     function constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     constructor.prototype = atvPrototype;
//     let instance = new constructor(make, model, year);
//     return instance;
// };

// // const atv1 = Atv();
// const atv2 = Atv('Honda', 'Rincon 650', '2018');
// console.log(atv2)
