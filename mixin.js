function mixin(target,...sources){
  Object.assign(target, ...sources)
}

var canWalk = {
  walk: function(){
    console.log('walking')
  }
}

var canEat = {
  eat: function(){
    console.log('eating')
  }
}


var canSwim = {
  swim: function(){
    console.log('swiming...')
  }
}


// var person = Object.assign({},canWalk,canEat)
// person.name = 'polash ahmed'

function Person(name){
  this.name = name
}
// Object.assign(Person.prototype, canWalk,canEat)
mixin(Person.prototype, canWalk,canEat)
var person = new Person('polash ahmed')

console.log(person)

function GoldFish(name){
  this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish('gold fish')
console.log(fish)
