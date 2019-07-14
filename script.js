var button = document.getElementById('button');


var vineNames =
["Fre sha va ca do",
"Look at all those chickens",
"She needs some milk",
"Hi, welcome to Chili's",
"Michael with a B",

"Croissant",
"And they were roommates",
"I am confusion",
"WHAT ARE THOSE?",
"Your actions have consequences",

"Road work ahead",
"I didn't get no sleep 'cause of y'all",
"Sodium",
"0mg, cholesterol!",
"Why be mad",

"Nice, Ron",
"Ninki Minjaj",
"Abraham Lincoln",
"It's an avocado!",
"Duck army",

"Let me give you a kiss",
"Daddy?",
"Happy birthday Raven!",
"Would you not eat my pants",
"Colorado",

"Talent Show",
"Look at this graph",
"Watermelon",
"Freestyle dance teacher",
"Stress relief",



]

var vineLinks =
["https://www.youtube.com/embed/qBeHqz0c3Ww",
"https://www.youtube.com/embed/RUTyw9tIc-M",
"https://www.youtube.com/embed/e_vFCmv9KZ4",
"https://www.youtube.com/embed/bs53JQTuEc0",
"https://www.youtube.com/embed/s5BSAIUSUc4 ",

"https://www.youtube.com/embed/hRFUZBXOWZI ",
"https://www.youtube.com/embed/4ZuydxEUpFM",
"https://www.youtube.com/embed/tdyybvuacVc",
"https://www.youtube.com/embed/2NL2lRwlDbw",
"https://www.youtube.com/embed/iZlpsneDGBQ",

"https://www.youtube.com/embed/6AYv6rV3NXE",
"https://www.youtube.com/embed/110l4ynyhII",
"https://www.youtube.com/embed/GouWVUFQoJg",
"https://www.youtube.com/embed/94LHw8fa_GE",
"https://www.youtube.com/embed/EHQZkSIxGdE",

"https://www.youtube.com/embed/MUINFs1Sp94",
"https://www.youtube.com/embed/__8evF5L8fY",
"https://www.youtube.com/embed/jbabpVUa_pY",
"https://www.youtube.com/embed/wG2-y5Yf1Oo",
"https://www.youtube.com/embed/nHc288IPFzk",

"https://www.youtube.com/embed/UoZpZZnekvs",
"https://www.youtube.com/embed/_4Zascmf2aw",
"https://www.youtube.com/embed/HEPwfliNn2s",
"https://www.youtube.com/embed/5iQ1WwKsVs",
"https://www.youtube.com/embed/crv99-LT4j8",

"https://www.youtube.com/embed/mf70J41eShI",
"https://www.youtube.com/embed/sIlNIVXpIns",
"https://www.youtube.com/embed/zTTTyoThFBU",
"https://www.youtube.com/embed/ZkNMZlkrzaU",
"https://www.youtube.com/embed/dAxptzgPUPg",



// "https://www.youtube.com/embed/ ",
]


button.addEventListener("click", function() {
  // alert("The button works!!!!!!!!");
  // randNum(diceFaces);
  var number  = randNum(vineNames);
  changePara(number);
  changeVid(number);
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

// function vidSwitch(someNum) {
//   var vineVid = document.getElementById("video");
//   vineVid.src = vineLink[someNum];
// }

function changeVid(someNum) {
    var vineLink = document.getElementById("video");
    vineLink.src = vineLinks[someNum];
};

// Hooray!! 
