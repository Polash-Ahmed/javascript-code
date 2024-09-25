
// Factory-pattern


var createReact = function(width, height){
  return {
    width: width,
    height:height,
  
    draw: function(){
      console.log('i am a rectangle')
      this.printProperties()
      console.log(this)
    },
    printProperties : function(){
      console.log('my width is' + this.width)
      console.log('my height is' + this.height)
    }
  }
}



var react1 = createReact(10, 20)

react1.draw()

var react2 = createReact(40, 30)

react2.draw()

// Factory

var createReact = function(width, height){
  return {
    width: width,
    height:height,
  
    draw: function(){
      console.log('i am a rectangle')
      this.printProperties()
      console.log(this)
    },
    printProperties : function(){
      console.log('my width is' + this.width)
      console.log('my height is' + this.height)
    }
  }
}



var react1 = createReact(10, 20)

react1.draw()

var react2 = createReact(40, 30)

react2.draw()


// Class constractos

var Reactangle = function(width,height){
  this.width= width
  this.height=height

  this.draw= function(){
    console.log('i am a rectangle')
    this.printProperties()
    console.log(this)
  }
  this.printProperties = function(){
    console.log('my width is' + this.width)
    console.log('my height is' + this.height)
  }
}

// var react3 = new(Reactangle(10, 20))
// react3.draw()

function myNew(constractor){
var obj = {}
Object.setPrototypeOf(obj,constractor.prototype)
var argsArray = Array.prototype.slice.apply(arguments)
constractor.apply(obj, argsArray.slice(1))
return obj
}

var react4 = myNew(Reactangle,56,78)
react4.draw()
