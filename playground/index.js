let person = {
    name: "John",
    age: 30,
}
console.log(person.name);







let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);















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
