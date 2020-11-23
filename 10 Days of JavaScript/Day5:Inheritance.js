// Objective

// In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// 1. Add an area method to Rectangle's prototype.
// 2. Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.


class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}


Rectangle.prototype.area = function () {
    return this.w * this.h;
}
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */