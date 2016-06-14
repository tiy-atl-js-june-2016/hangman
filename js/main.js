var sayHi = function (name) {
  console.log("Hello there, " + name);
};

// console.log("Hangman is just a game.");
// sayHi("Brit");

var turnsLeft = function () {
  var element = document.getElementById('turn-count');
  return element.textContent;
};

var guesses = [];
var wordList = [
  "cookies", "elephant", "doughnut", "doge",
  "transport", "recursion", "agriculture", "antidisestablishmentarianism",
  "espresso", "computer", "transmogrify", "lightsaber"
];

var randomItem = function (items) {
  var index = Math.floor(Math.random() * items.length);
  return items[index];
};

var answer = randomItem(wordList);
console.log("The magic word is " + answer);

// addEventListener for js/page magic

var bumpCount = function (e) {
  var target = e.target;
  target.innerHTML = Number(target.innerHTML) + 1;
};

var wipe = function (e) {
  document.write("<div></div>");
};

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', function (e) { console.log(e); });


// el.addEventListener('click', function (e) {
//   var target = e.target;
//   target.innerHTML = Number(target.innerHTML) + 1;
// });


// var target = null;
// var el = document.querySelector("#turn-count");
// el.addEventListener('click', function (e) {
//   console.log(e);
//   target = e.target;
// });

