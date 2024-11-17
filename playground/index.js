// let person = {
//     name: "John",
//     age: 30,
// }
// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors.length);



function greet(name, lastName) {
    console.log('Hello, world! ' + name + '' + lastName);
}


greet('Ian', 'Cañete');
greet('Christine', "Cañete");



function square(number) {
    return number * number;
}

console.log(square(2));



//Encapsulation
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



//Abstraction
