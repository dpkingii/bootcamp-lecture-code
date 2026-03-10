console.log("Hello Bootcamp!");

let score = 0;

function updateScore() {
  let scoreElement = document.getElementById("score");
  scoreElement.innerText = "Score: " + score;
}

function addScore() {
  score += 1;
  updateScore();

  // == will try to convert types before comparing
  // === compares value and type exactly'

  // example
  // 5 == "5"   => true
  // 5 === "5"  => false
  // use === for comparison because it's safer and more predictable

  let messageElement = document.getElementById("message");
  if (score === 10) {
    // alert("Congratulations! You reached 10 points!");
    messageElement.innerText = "Congratulations! You reached 10 points!";
  } else {
    messageElement.innerText = "Keep going! You're doing great!";
  }
}

function resetScore() {
  score = 0;
  updateScore();
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetScore);

let clickerButton = document.querySelector("#clicker");
clickerButton.addEventListener("click", addScore);

let messageElement = document.getElementById("message");
messageElement.innerText = "Welcome to the Clicker Game!";

updateScore();

// clickerButton.addEventListener("click", function () {
//   points++;
//   countText.innerText = "Score: " + score;

//   if (points === 10) {
//     alert("You reached 10 points!");
//   }
// });
