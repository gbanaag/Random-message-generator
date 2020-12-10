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
["https://www.youtube.com/embed?v=bE4C8a48o1E",
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
"https://www.youtube.com/watch?v=qOoWVxsnLPQ",
"https://www.youtube.com/embed/crv99-LT4j8",

"https://www.youtube.com/embed/mf70J41eShI",
"https://www.youtube.com/embed/sIlNIVXpIns",
"https://www.youtube.com/embed/zTTTyoThFBU",
"https://www.youtube.com/embed/ZkNMZlkrzaU",
"https://www.youtube.com/embed/dAxptzgPUPg",

"https://www.youtube.com/embed?v=d7mrBC0zLZg",
"https://www.youtube.com/embed?v=du-TY1GUFGk",
"https://www.youtube.com/embed?v=21jLmc_Il3o",
"https://www.youtube.com/embed?v=im_3ClEtPHs",
"https://www.youtube.com/embed?v=CIezqiRltTo",
 
"https://www.youtube.com/embed?v=UqYhi8BDk5Q",
"https://www.youtube.com/embed?v=-y4PA6T01ds",
"https://www.youtube.com/embed?v=Beo6o-P4ndM",
"https://www.youtube.com/embed?v=Tlwda9S58Lg",
"https://www.youtube.com/embed?v=ZkNMZlkrzaU",
 
"https://www.youtube.com/embed?v=KKBLmMB70DA",
"https://www.youtube.com/embed?v=HEPwfliNn2s",
"https://www.youtube.com/embed?v=e2X5p7_LUIY",
"https://www.youtube.com/embed?v=87GUSKlanB0",
"https://www.youtube.com/embed?v=mlgstMp_nd0",
 
"https://www.youtube.com/embed?v=2Bjy5YQ5xPc",
"https://www.youtube.com/embed?v=EcLPNGLRHU8",
"https://www.youtube.com/embed?v=xnd8kaQj2zQ",
"https://www.youtube.com/embed?v=_wkQSF3TdQU",
"https://www.youtube.com/embed?v=psxBizrPIxg",
 
"https://www.youtube.com/embed?v=GaNGKD4MTV0",
"https://www.youtube.com/embed?v=OyBmEeojfKo",
"https://www.youtube.com/embed?v=P-IC3db0agY",
"https://www.youtube.com/embed?v=BEIGG3vrRfA",
"https://www.youtube.com/embed?v=mtL6wm1ef-g",
 
"https://www.youtube.com/embed?v=OyOcV3293qg",
"https://www.youtube.com/embed?v=mOtd_rBHebI",
"https://www.youtube.com/embed?v=b-nwRDNoJR4",
"https://www.youtube.com/embed?v=SALPlLKzuBA",
"https://www.youtube.com/embed?v=wtllL4AStVU",
 
"https://www.youtube.com/embed?v=RePvIsMOhDU",
"https://www.youtube.com/embed?v=iLfYowEaD18",
"https://www.youtube.com/embed?v=TQUFMqtRYPI",
"https://www.youtube.com/embed?v=LKMZFKVwp9U",
"https://www.youtube.com/embed?v=ccPxDI9W7VM",
 
 "https://www.youtube.com/embed?v=XQFuZDueoEM",
 "https://www.youtube.com/embed?v=sWDH0QVP3mc",
 "https://www.youtube.com/embed?v=UBQP9gEldRk",
 "https://www.youtube.com/embed?v=gBo26500o7U",
 "https://www.youtube.com/embed?v=53EWNA_XLrw",
 
 "https://www.youtube.com/embed?v=FZUcpVmEHuk",
 "https://www.youtube.com/embed?v=e0ROWMyxdZI",
 "https://www.youtube.com/embed?v=b3-aO1x9Jso",
 "https://www.youtube.com/embed?v=KbVEy4ki5yE",
 "https://www.youtube.com/embed?v=LJ201maI8e4",
 
 "https://www.youtube.com/embed?v=spoObfZ63DU",
 "https://www.youtube.com/embed?v=feMwFuihX2o",
 "https://www.youtube.com/embed?v=wkJrNldb1ew",
 "https://www.youtube.com/embed?v=gb4Fj6jX7rE",
 "https://www.youtube.com/embed?v=FTyY8Io3ZWo",
 
 "https://www.youtube.com/embed?v=7PnzPGSjfcA",
 "https://www.youtube.com/embed?v=GG6H-Btfuww",
 "https://www.youtube.com/embed?v=S-_6i11WHTE",
 "https://www.youtube.com/embed?v=YUTeAcKyR24",
 "https://www.youtube.com/embed?v=BODacQoSgNY",
 
 "https://www.youtube.com/embed?v=crv99-LT4j8",
 "https://www.youtube.com/embed?v=nHp9QUCwzJc",
 "https://www.youtube.com/embed?v=c38_1E_esPc",
 "https://www.youtube.com/embed?v=bp4WxLUeyLE",
 "https://youtu.be/Fc1P-AEaEp8",
 
 "https://youtu.be/110l4ynyhII",
 "https://youtu.be/L8bR07JJoMc",
 "https://youtu.be/RUQ0gq3TdT0",
 "https://youtu.be/AnVzPhnqeN0",
 "https://youtu.be/FefKlXAfF2s",
 
 "https://youtu.be/JE6btxPRPXg",
 "https://youtu.be/EN4e0k90Noo",
 "https://youtu.be/LMgNCNxACNQ",
 "https://youtu.be/S-yKLZKpc3k",
 "https://youtu.be/X7cQ7KnoRk0",
 
 "https://youtu.be/4O81NhGuF-w",
 "https://youtu.be/9vqzoAhzwqM",
 
 
 

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
