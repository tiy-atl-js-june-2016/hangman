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

var turnCount = document.getElementById('turn-count');
var answer = randomItem(wordList);
console.log("The magic word is " + answer);

var board = document.querySelector("#board");
var newHTML = "";
for(var count = 0; count < answer.length; count++) {
  newHTML += "<span>_</span>";
};
board.innerHTML = newHTML;

// var board = document.querySelector("#board");
// for(var count = 0; count < answer.length; count++) {
//   var spanNode = document.createElement("span");
//   spanNode.textContent = "_";
//   board.appendChild(spanNode);
// };


// addEventListener for js/page magic

var bumpCount = function (event) {
  var target = event.target; // get the targeted part of the page out of the event
  target.innerHTML = Number(target.innerHTML) + 1;
};

var makeGuess = function (event) {
  var pageNode = event.target;
  var letter = pageNode.textContent;

  if (!guesses.includes(letter)) {
    pageNode.classList.add("guessed");
    guesses.push(letter);
    if (!answer.includes(letter)) {
      turnCount.textContent = Number(turnCount.textContent) - 1;
    }
  }
};

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', makeGuess);

var body = document.querySelector("body");
body.addEventListener('click', function (event) {
  console.log(event);
});
