function Shape() {}

Shape.prototype.common = function () {
  console.log("i am common function");
};

function Squire(width) {
  this.width = width;
}

// reset prototype
Squire.prototype = Object.create(Shape.prototype);
// reset constructor
Squire.prototype.constructor = Squire;

Squire.prototype.draw = function () {
  console.log("drawing");
};

var shape = new Shape();
var sqr = new Squire(45);

// function Cicrle(){

// }
// Cicrle.prototype = Object.create(Shape.prototype)

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("i am common function");
};

function Squire(width, color) {
  Shape.call(this, color);
  this.width = width;
}

extend(Shape, Squire);

Squire.prototype.draw = function () {
  console.log("drawing");
};

// var shape = new Shape();
var sqr = new Squire(45, "green");

function Cicrle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Shape, Cicrle);

Cicrle.prototype.common = function () {
  Shape.prototype.common.call(this);
  console.log("i am calling from circle and i have overridden");
};

var c = new Cicrle(6, "black");
