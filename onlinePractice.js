// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num) {
    return ""+num;
}

function stringToInt(num) {
    return +num;
}

//Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
    return [num1, num2];
}

//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
//Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

function areaShape(base, height, shape) {
    if(shape === "triangle"){
        return (base*height)/2;
    } else if(shape === "parallelogram"){
        return base*height;
    }
}

