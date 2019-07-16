var button = document.getElementById('button');


var vineNames =
[
 // Set 1 
 "Fre sha va ca do",
"Look at all those chickens",
"She needs some milk",
"Hi, welcome to Chili's",
"Michael with a B",

// Set 2
"Croissant",
"And they were roommates",
"I am confusion",
"WHAT ARE THOSE?",
"Your actions have consequences",

// Set 3
"Road work ahead",
"I didn't get no sleep 'cause of y'all",
"Sodium",
"0mg, cholesterol!",
"Why you mad",

 // Set 4
"Nice, Ron",
"Ninki Minjaj",
"Abraham Lincoln",
"It's an avocado!",
"Duck army",

 // Set 5
"Let me give you a kiss",
"Daddy?",
"Happy birthday Raven!",
"Would you not eat my pants",
"Colorado",

 // Set 6
"Talent Show",
"Look at this graph",
"Watermelon",
"Freestyle dance teacher",
"Stress relief",

  // Set 7
 "if instruments were voices and voices were instruments",
  "When life gives you lemons", 
 "You better watch out",
  "Rat prank",
  "Yasss",
  
  // Set 8
  "Boom",
  "Hello?",
  "You've got a big storm coming.",
  "I smell like beef",
  "Troy speaks from the heart",

  // Set 9
  "Well, there goes the milk",
  "Get out me car",
  "Criminal",
  "Change your shirt",
  "A sign",
  
  // Set 10 
  "Cmon brain",
  "That's my opinion",
  "Baby it's you",
  "Liam Neeson",
  "Around the world",
 
 // Set 11
 "Paper beatbox",
 "AAA",
 "I'm a what?",
 "I shaved my eyebrows!",
 "You're my dad!",
 
 //Set 12
 "Annie are you ok",
 "Sir, are you okay",
 "Patricia!",
 "Cat Transcendence",
 "If your name is Junior",
 
 // Set 13
 "Squidward",
 "Crawling",
 "Taco",
 "Charging up a phone with monster and a corn dog",
 "Bop it",
 
 // Set 14
 "Hannah Montana",
 "Welcome to physics!",
 "Chicken nugget",
 "Dancing",
 "Hello",
 
 // Set 15
 "What are you waiting for?",
 "Where'd you learn to drive?",
 "Football doggo",
 "What is love",
 "Mission impossible",
 
 // Set 16
 "If I had a penny for every time I wasn't cool",
 "Is that really a pumpkin?",
 "Minions",
 
 
 
]

var vineLinks =
[
  // Set 1 
 "https://www.youtube.com/embed/qBeHqz0c3Ww",
"https://www.youtube.com/embed/RUTyw9tIc-M",
"https://www.youtube.com/embed/e_vFCmv9KZ4",
"https://www.youtube.com/embed/bs53JQTuEc0",
"https://www.youtube.com/embed/s5BSAIUSUc4 ",

 // Set 2
"https://www.youtube.com/embed/hRFUZBXOWZI ",
"https://www.youtube.com/embed/4ZuydxEUpFM",
"https://www.youtube.com/embed/tdyybvuacVc",
"https://www.youtube.com/embed/2NL2lRwlDbw",
"https://www.youtube.com/embed/iZlpsneDGBQ",

 // Set 3
"https://www.youtube.com/embed/6AYv6rV3NXE",
"https://www.youtube.com/embed/110l4ynyhII",
"https://www.youtube.com/embed/GouWVUFQoJg",
"https://www.youtube.com/embed/94LHw8fa_GE",
"https://www.youtube.com/embed/EHQZkSIxGdE",

  // Set 4
"https://www.youtube.com/embed/MUINFs1Sp94",
"https://www.youtube.com/embed/__8evF5L8fY",
"https://www.youtube.com/embed/jbabpVUa_pY",
"https://www.youtube.com/embed/wG2-y5Yf1Oo",
"https://www.youtube.com/embed/nHc288IPFzk",

  // Set 5
"https://www.youtube.com/embed/UoZpZZnekvs",
"https://www.youtube.com/embed/_4Zascmf2aw",
"https://www.youtube.com/embed/HEPwfliNn2s",
"https://www.youtube.com/embed/5iQ1WwKsVs",
"https://www.youtube.com/embed/crv99-LT4j8",

 // Set 6
"https://www.youtube.com/embed/mf70J41eShI",
"https://www.youtube.com/embed/sIlNIVXpIns",
"https://www.youtube.com/embed/zTTTyoThFBU",
"https://www.youtube.com/embed/ZkNMZlkrzaU",
"https://www.youtube.com/embed/dAxptzgPUPg",

  // Set 7
 "https://www.youtube.com/embed/0a7uVzSkCu8",
 "https://www.youtube.com/embed/EcLPNGLRHU8",
 "https://www.youtube.com/embed/zDgc3LTiF9U",
 "https://www.youtube.com/embed/Dz05uKR0fMk",
 "https://www.youtube.com/embed/lRNU_2Jj_oo",
  
  // Set 8 
  "https://www.youtube.com/embed/AwuGjAL-HdU",
  "https://www.youtube.com/embed/YtSPQIK15uc",
  "https://www.youtube.com/embed/O5WbFb_Hi3E",
  "https://www.youtube.com/embed/qVSy4O3k3u4",
  "https://www.youtube.com/embed/-4UMUjBvIec",
  
  // Set 9
  "https://www.youtube.com/embed/EWaFkBi4knM",
  "https://www.youtube.com/embed/mDPZfxRlYhg",
  "https://www.youtube.com/embed/-fMCulOlmuY",
  "https://www.youtube.com/embed/iGijRHRT4Wk",
  "https://www.youtube.com/embed/m8Xp5Po9-P4",
  
  // Set 10 
  "https://www.youtube.com/embed/TP9iNa8Aqeg",
  "https://www.youtube.com/embed/i3rLhpvvOJE",
  "https://www.youtube.com/embed/WVtAhw2S1Qs",
  "https://www.youtube.com/embed/awX20bnDfTk",
  "https://www.youtube.com/embed/KpUWQVx1PnU",
 
 // Set 11
 "https://www.youtube.com/embed/5p7vG6MjWck",
 "https://www.youtube.com/embed/YUTeAcKyR24",
 "https://www.youtube.com/embed/4vrMKl2zltA",
 "https://www.youtube.com/embed/XgHcljed67I",
 "https://www.youtube.com/embed/zQOkwoUPNgQ",
 
 // Set 12
 "https://www.youtube.com/embed/NR1zHdFN8A4",
 "https://www.youtube.com/embed/rugL594cIa8",
 "https://www.youtube.com/embed/477fRTF8Czs",
 "https://www.youtube.com/embed/IuysY1BekOE",
 "https://www.youtube.com/embed/g_KlxoVHUmM",
 
 // Set 13
 "https://www.youtube.com/embed/86LqlzZvkRI",
 "https://www.youtube.com/embed/_tZ156d2jOo",
 "https://www.youtube.com/embed/LMdtYZFTvhY",
 "https://www.youtube.com/embed/GctcztImvNo",
 "https://www.youtube.com/embed/Eywp61pXUm4",
 
 // Set 14
 "https://www.youtube.com/embed/kI65vqwg-lM",
 "https://www.youtube.com/embed/hopFImGkNo4",
 "https://www.youtube.com/embed/X7cQ7KnoRk0",
 "https://www.youtube.com/embed/zEFoyDYu-ck",
 "https://www.youtube.com/embed/zsUBRCdEDYY",
 
 // Set 15
 "https://www.youtube.com/embed/ekl_arkB4MU",
 "https://www.youtube.com/embed/2bnnDTPCA94",
 "https://www.youtube.com/embed/64ucqo3g7Q8",
 "https://www.youtube.com/embed//Rbi4PZBQaiM",
 "https://www.youtube.com/embed/8U0sjHxYqrw",
 
 // Set 16
  "https://www.youtube.com/embed/44PcGnqEnXc",
  "https://www.youtube.com/embed/VpTpqsd-0Rc",
  "https://www.youtube.com/embed/_aK7MRiJKqE",


 

  // "https://www.youtube.com/embed/",
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
