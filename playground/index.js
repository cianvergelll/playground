let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

console.log("Wage from function:", getWage(baseSalary, overTime, rate));

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log("Wage from employee object:", employee.getWage());


function getArea(height, width) {
    return height * width;
}

let shape = {
    height: 10,
    width: 20,
    getArea: function() {
        return this.height * this.width;
    }
};

console.log("Area of the Shape: ", shape.getArea());