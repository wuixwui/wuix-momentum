const title = document.querySelector(".container .title");
title.innerText = "RANDOM\r\nNUMBER\r\nGAME";

const maxNumber = document.getElementById("guessing-number");
const EnteredMaxNumber = document.getElementById("max-number");

const UserNumber = document.getElementById("input-number");

const gameResult = document.querySelector(".result");
const RandomNumber = localStorage.getItem("enteredNumber");

function RandomGemeStart(event) {
  event.preventDefault();
  if (EnteredMaxNumber.value < 0) {
    title.innerText = "TRY AGAIN!";
    maxNumber.querySelector("p").innerText = "Please enter a positive number";
  } else {
    title.innerText = "GUESS\r\nTHE NUMBER";
    localStorage.setItem("enteredNumber", EnteredMaxNumber.value);
    UserNumber.querySelector(
      "p"
    ).innerText = `enter a number between 0 and ${EnteredMaxNumber.value}`;
    maxNumber.classList.add("hidden");
  }
}

function RandomGameResult(event) {}

-maxNumber.addEventListener("submit", RandomGemeStart);
