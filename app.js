const title = document.querySelector(".container .title");
title.innerText = "RANDOM\r\nNUMBER\r\nGAME";

const maxNumber = document.getElementById("guessing-number");
const EnteredMaxNumber = document.getElementById("max-number");

const userNumber = document.getElementById("input-number");
const inputUserNumber = userNumber.querySelector("input");
const gameResult = document.querySelector(".result");

function RandomGemeStart(event) {
  event.preventDefault();
  if (EnteredMaxNumber.value < 0) {
    title.innerText = "TRY AGAIN!";
    maxNumber.querySelector("p").innerText = "Please enter a positive number";
  } else {
    title.innerText = "GUESS\r\nTHE NUMBER";
    localStorage.setItem("enteredNumber", EnteredMaxNumber.value);
    userNumber.querySelector(
      "p"
    ).innerText = `enter a number between 0 and ${EnteredMaxNumber.value}`;
    maxNumber.classList.add("hidden");
  }
}

function RandomGameResult(event) {
  event.preventDefault();
  const machine = gameResult.querySelector(".machine-number");
  const you = gameResult.querySelector(".your-number");

  you.innerText = inputUserNumber.value;
  machine.innerText = Math.floor(Math.random() * EnteredMaxNumber.value);
  gameResult.classList.remove("hidden");

  if (you.innerText === machine.innerText) {
    gameResult.querySelector("p").innerText = "YOU WIN!";
  } else {
    gameResult.querySelector("p").innerText = "YOU LOST!";
  }
}

maxNumber.addEventListener("submit", RandomGemeStart);
userNumber.addEventListener("submit", RandomGameResult);
