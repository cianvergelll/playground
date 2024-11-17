let name = "Ian";
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;




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
