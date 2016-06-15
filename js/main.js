// var sayHi = function (name) {
//   console.log("Hello there, " + name);
// };

// console.log("Hangman is just a game.");
// sayHi("Brit");

// var addOne = function(x) {
//   return x + 1;
// };

// document.querySelector("h1").addEventListener('click', function () {
//   console.log(addOne(4));
// });

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

var bumpCount = function (event) {
  var target = event.target; // get the targeted part of the page out of the event
  target.innerHTML = Number(target.innerHTML) + 1;
};

var wipe = function (event) {
  document.write("<div></div>");
};

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', function (event) {
  var pageNode = event.target;
  if (!guesses.includes(pageNode.textContent)) {
    pageNode.classList.add("guessed");
    guesses.push(pageNode.textContent);
  } else {
    alert("You guessed that dummy.");
  }

  // if (pageNode.classList.contains("guessed") == false) {
  //   pageNode.classList.add("guessed");
  //   guesses.push(pageNode.textContent);
  // } else {
  //   alert("You guessed that already. Dummy.");
  // }
});


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

// var butt = document.querySelector(".form-button");
// butt.addEventListener('click', function (event) {
//   event.preventDefault();
//   var color = randomItem(["red", "blue", "green"]);
//   var input = document.querySelector(".count-input");
//   var turns = document.querySelector("#turn-count");
//   turns.textContent = input.value;
//   turns.style.backgroundColor = color;
// });
