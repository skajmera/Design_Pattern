class Car {
    constructor(make, model, year, isForSale = true, isInStock = false) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isForSale = isForSale;
        this.isInStock = isInStock;
    }

    toString() {
        return (JSON.stringify(this))
    }
}
// const a=new Car('bana',"mongo",2022,)
// console.log(a.toString())

class CarBuilder {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    notForSale() {
        this.isForSale = false;
        return this;
    }
    addInStock() {
        this.isInStock = true;
        return this;
    }

    build() {
        return new Car(this.make, this.model, this.year, this.isForSale, this.isInStock);
    }
}

module.exports = CarBuilder;


// const ss= new CarBuilder("mmake","mode",2022)
// console.log(ss.build())