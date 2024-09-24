
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
