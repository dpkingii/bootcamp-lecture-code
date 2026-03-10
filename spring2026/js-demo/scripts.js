console.log("Hello Bootcamp!");

let score = 0;
let clickValue = 1;
let upgradeCost = 10;
let autoScore = 0;

function updateScore() {
  let scoreElement = document.getElementById("score");
  scoreElement.innerText = "Score: " + score;
}

function updateClickValue() {
  let clickValueElement = document.getElementById("click-value");
  clickValueElement.innerText = "Score per click: " + clickValue;
}

function updateUpgradeCost() {
  let upgradeCostElement = document.getElementById("upgrade");
  upgradeCostElement.innerText = "Upgrade (Cost: " + upgradeCost + ")";
}

function updateMessage(text) {
  let messageElement = document.getElementById("message");
  messageElement.innerText = text;
}

function updateAutoScore() {
  let autoScoreElement = document.getElementById("auto-score");
  autoScoreElement.textContent = "Auto score per second: " + autoScore;
}

function addScore() {
  score += clickValue;
  updateScore();

  // == will try to convert types before comparing
  // === compares value and type exactly'

  // example
  // 5 == "5"   => true
  // 5 === "5"  => false
  // use === for comparison because it's safer and more predictable

  if (score === 10) {
    updateMessage("Congratulations! You reached 10 points!");
  } else {
    updateMessage("Keep going! You're doing great!");
  }
}

function resetScore() {
  score = 0;
  clickValue = 1;
  updateScore();
}

function buyUpgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickValue += 5;
    upgradeCost *= 5;
    updateScore();
    updateClickValue();
    updateMessage(
      "Upgrade purchased! Each click is now worth +" + clickValue + " points.",
    );
    updateUpgradeCost();

    // upgradeButton.disabled = true;
    // upgradeButton.textContent = "Upgrade Purchased";
  } else {
    updateMessage("Not enough score yet.");
  }
}

function buyAutoUpgrade() {
  if (score >= 20) {
    score -= 20;
    autoScore += 1;
    updateScore();
    updateAutoScore();
    updateMessage("You bought an auto clicker!");
  } else {
    updateMessage("Not enough score yet.");
  }
}

let clickerButton = document.querySelector("#clicker");
clickerButton.addEventListener("click", addScore);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetScore);

let messageElement = document.getElementById("message");
messageElement.innerText = "Welcome to the Clicker Game!";

let upgradeButton = document.querySelector("#upgrade");
upgradeButton.addEventListener("click", buyUpgrade);

let autoUpgradeButton = document.querySelector("#auto-upgrade");
autoUpgradeButton.addEventListener("click", buyAutoUpgrade);

updateScore();

setInterval(() => {
  score += autoScore;
  updateScore();
}, 1000);
// clickerButton.addEventListener("click", function () {
//   points++;
//   countText.innerText = "Score: " + score;

//   if (points === 10) {
//     alert("You reached 10 points!");
//   }
// });
