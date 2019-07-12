var button = document.getElementById('button');


var vineNames =
["Fre sha va ca do",
"Look at all those chickens",
"She needs some milk",
"Hi, welcome to Chili's"]

var vineLinks =
["qBeHqz0c3Ww",
"RUTyw9tIc-M",
]


button.addEventListener("click", function() {
  // alert("The button works!!!!!!!!");
  // randNum(diceFaces);
  var number  = randNum(vineNames);
  changePara(number);
})

//Math
function randNum(array) {
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random
}

randNum(vineNames);

function changePara(someNum) {
  var vineName = document.getElementById("vine-name");
  vineName.innerHTML = vineNames[someNum];
}
