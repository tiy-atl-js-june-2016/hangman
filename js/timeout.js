var annoy = function () {
  alert("LUNCH LUNCH LUNCH!");
};

var inform = function () {
  console.log(" you should probably let everybody eat now ");
};

var timeoutID = setTimeout(annoy, 10000);
clearTimeout(timeoutID);

var intervalID = setInterval(function () {
  var turns = document.querySelector("#turn-count");
  turns.textContent = Number(turns.textContent) + 1;
}, 2000);
clearInterval(12);
