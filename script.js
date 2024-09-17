// creating nasted loop

var n = 20
for(var i = 1;i<=n;i++){
  var result = ''
for(var j=1;j<=i;j++){
 result += j + ' '
}
console.log(result)
}


// creating ster
var n =5
for (var i = 1; i<=n;i++){
  var result = ' '
  for(var j = 1; j<=n; j++){
    result += ' * '
  }
  console.log(result)
}

// loop break in while loop

while (true) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner Winner Chicken Dinner");
    break;
  } else {
    console.log("You have got " + rand);
  }
}

// loop break in for loop

for (var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    break;
  } else {
    console.log(i);
  }
}


// Continue Statement

for (var i = 0; i < 10; i++){
  if(i=== 3 || i === 7){
    continue
  }
  console.log(i)
}
