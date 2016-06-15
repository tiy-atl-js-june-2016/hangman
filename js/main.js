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
});
