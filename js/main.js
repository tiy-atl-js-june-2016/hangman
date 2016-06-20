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
  newHTML += "<span class='letter-" + count + "'>_</span>";
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

var gameOver = function(turnCount) {
  var lose = function () {
    return turnCount == 0;
  };
  var win = function () {
    answer.split("").forEach(function (letter){
      if (!guesses.includes(letter)) {
        return false;
      }
    });
    return true;
  };


  return lose() || win();
};

var showLetter = function (letter) {
  for(var count = 0; count < answer.length; count++) {
    if (answer[count] == letter) {
      var boardSpace = document.querySelector(".letter-" + count);
      boardSpace.textContent = letter;
    }
  };
};

var makeGuess = function (event) {
  var pageNode = event.target;
  var letter = pageNode.textContent;

  if (!guesses.includes(letter)) {
    pageNode.classList.add("guessed");
    guesses.push(letter);
    showLetter(letter);
    if (!answer.includes(letter)) {
      turnCount.textContent = Number(turnCount.textContent) - 1;
    }
  }
  if (gameOver(Number(turnCount.textContent))) {
    var messages = document.querySelector(".messages h3");
    messages.innerHTML = "Game over!";
  }
};

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', makeGuess);
