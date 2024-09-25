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

var react3 = new Reactangle(10, 20)
react3.draw()
