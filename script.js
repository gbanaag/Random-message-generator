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

"Chicken strips",
"It is Wednesday my dudes",
"Hurricane tortilla",
"Baby shower",
"Who summoned me",
 
"Kung Fu Panda 2",
"I'm not answering your phone call for a reason",
"Thicker than a bowl of oatmeal",
"Power of god and anime",
"Freestyle dance teacher",
 
"B, where?",
"Happy birthday Raven!",
"Marlene, your speech was so good",
"Daddy?",
"Talent show",
 
"YEET",
"When Life gives you lemons",
"Sneezed on the beet",
"F you.",
"I love you, bitch",
 
"You can't kill me",
"Good evening",
"I won't hesitate",
"Why is that guy so good at bowling",
"Without me?",
 
"Big time rush",
"I'm not sure",
"I built this cage",
"Can I help you",
"Vaccum",
 
"This is my jam",
"Panic at the Disco",
"Captain America",
"End up at McDonald's",
"Do you love me cousin?",
 
"Bork",
"Don't care about my haters",
"Wtf Richard", 
"I hate you",
"Yummmm",
 
"Still a piece of garbage",
"Just this letter",
"What are you looking at?",
"Look what I bought",
"BRUHHHH",

"Don't need a degree",
"I wanted to be a cowboy, baby",
"Bring the beat in",
"I was in a band",
"Excuse my potty mouth",
 
 "AHA, AHA",
 "Michael with a B",
 "Rip",
 "AAAA",
 "How do you know what's good for me?",
 
 "I'm a giraffe",
 "SAIL",
 "I have no soul",
 "Mind yo business David!",
 "Afraid of technology",
 
 "Didn't get no sleep cause of y'all",
 "There's a mushroom on your shirt",
 "I got Abraham Lincoln",
 "Completely Giving up on life",
 "Buenos Dias",
 
 "The cow says moo",
 "Skittles",
 "Do you want to go to the dance with me?",
 "SIKE",
 "Burnt chicken nugget",
 
 "20 piece nuggets",
 "Eating ice cream",
 
 

]

var vineLinks =
["https://www.youtube.com/embed/bE4C8a48o1E",
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
"https://www.youtube.com/embed/qOoWVxsnLPQ",
"https://www.youtube.com/embed/crv99-LT4j8",

"https://www.youtube.com/embed/mf70J41eShI",
"https://www.youtube.com/embed/sIlNIVXpIns",
"https://www.youtube.com/embed/zTTTyoThFBU",
"https://www.youtube.com/embed/ZkNMZlkrzaU",
"https://www.youtube.com/embed/dAxptzgPUPg",

"https://www.youtube.com/embed/d7mrBC0zLZg",
"https://www.youtube.com/embed/du-TY1GUFGk",
"https://www.youtube.com/embed/21jLmc_Il3o",
"https://www.youtube.com/embed/im_3ClEtPHs",
"https://www.youtube.com/embed/CIezqiRltTo",
 
"https://www.youtube.com/embed/UqYhi8BDk5Q",
"https://www.youtube.com/embed/-y4PA6T01ds",
"https://www.youtube.com/embed/Beo6o-P4ndM",
"https://www.youtube.com/embed/Tlwda9S58Lg",
"https://www.youtube.com/embed/ZkNMZlkrzaU",
 
"https://www.youtube.com/embed/KKBLmMB70DA",
"https://www.youtube.com/embed/HEPwfliNn2s",
"https://www.youtube.com/embed/e2X5p7_LUIY",
"https://www.youtube.com/embed/87GUSKlanB0",
"https://www.youtube.com/embed/mlgstMp_nd0",
 
"https://www.youtube.com/embed/2Bjy5YQ5xPc",
"https://www.youtube.com/embed/EcLPNGLRHU8",
"https://www.youtube.com/embed/xnd8kaQj2zQ",
"https://www.youtube.com/embed/_wkQSF3TdQU",
"https://www.youtube.com/embed/psxBizrPIxg",
 
"https://www.youtube.com/embed/GaNGKD4MTV0",
"https://www.youtube.com/embed/OyBmEeojfKo",
"https://www.youtube.com/embed/P-IC3db0agY",
"https://www.youtube.com/embed/BEIGG3vrRfA",
"https://www.youtube.com/embed/mtL6wm1ef-g",
 
"https://www.youtube.com/embed/yOcV3293qg",
"https://www.youtube.com/embed/mOtd_rBHebI",
"https://www.youtube.com/embed/b-nwRDNoJR4",
"https://www.youtube.com/embed/SALPlLKzuBA",
"https://www.youtube.com/embed/wtllL4AStVU",
 
"https://www.youtube.com/embed/RePvIsMOhDU",
"https://www.youtube.com/embed/iLfYowEaD18",
"https://www.youtube.com/embed/TQUFMqtRYPI",
"https://www.youtube.com/embed/LKMZFKVwp9U",
"https://www.youtube.com/embed/ccPxDI9W7VM",
 
 "https://www.youtube.com/embed/XQFuZDueoEM",
 "https://www.youtube.com/embed/sWDH0QVP3mc",
 "https://www.youtube.com/embed/UBQP9gEldRk",
 "https://www.youtube.com/embed/gBo26500o7U",
 "https://www.youtube.com/embed/53EWNA_XLrw",
 
 "https://www.youtube.com/embed/FZUcpVmEHuk",
 "https://www.youtube.com/embed/e0ROWMyxdZI",
 "https://www.youtube.com/embed/b3-aO1x9Jso",
 "https://www.youtube.com/embed/KbVEy4ki5yE",
 "https://www.youtube.com/embed/LJ201maI8e4",
 
 "https://www.youtube.com/embed/spoObfZ63DU",
 "https://www.youtube.com/embed/feMwFuihX2o",
 "https://www.youtube.com/embed/wkJrNldb1ew",
 "https://www.youtube.com/embed/gb4Fj6jX7rE",
 "https://www.youtube.com/embed/FTyY8Io3ZWo",
 
 "https://www.youtube.com/embed/7PnzPGSjfcA",
 "https://www.youtube.com/embed/GG6H-Btfuww",
 "https://www.youtube.com/embed/S-_6i11WHTE",
 "https://www.youtube.com/embed/YUTeAcKyR24",
 "https://www.youtube.com/embed/BODacQoSgNY",
 
 "https://www.youtube.com/embed/crv99-LT4j8",
 "https://www.youtube.com/embed/nHp9QUCwzJc",
 "https://www.youtube.com/embed/c38_1E_esPc",
 "https://www.youtube.com/embed/bp4WxLUeyLE",
 "https://youtu.be/embed/Fc1P-AEaEp8",
 
 "https://youtu.be/embed/110l4ynyhII",
 "https://youtu.be/embed/L8bR07JJoMc",
 "https://youtu.be/embed/RUQ0gq3TdT0",
 "https://youtu.be/embed/AnVzPhnqeN0",
 "https://youtu.be/embed/FefKlXAfF2s",
 
 "https://youtu.be/embed/JE6btxPRPXg",
 "https://youtu.be/embed/EN4e0k90Noo",
 "https://youtu.be/embed/LMgNCNxACNQ",
 "https://youtu.be/embed/S-yKLZKpc3k",
 "https://youtu.be/embed/X7cQ7KnoRk0",
 
 "https://youtu.be/embed/4O81NhGuF-w",
 "https://youtu.be/embed/9vqzoAhzwqM",
 
 
 

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
  return random;
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
