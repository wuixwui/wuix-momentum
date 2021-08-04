const timer = document.querySelector(".container .timer");
const christmasDay = new Date(2021, 11, 25);

function christmasDayTimer() {
  const date = new Date();
  const dDay = christmasDay - date;
  const days = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(2, 0);
  const hours = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(
    2,
    0
  );
  const minutes = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(2, 0);
  const seconds = String(Math.floor((dDay / 1000) % 60)).padStart(2, 0);
  if (
    parseInt(days) + parseInt(hours) + parseInt(minutes) + parseInt(seconds) ===
    0
  ) {
    timer.innerText = "MERRY CHRISTMAS ~";
    clearInterval(dDayTimer);
  } else {
    timer.innerText = `${days}DAYS ${hours}HOURS\r\n${minutes}MINUTES ${seconds}SECONDS`;
  }
}

christmasDayTimer();
const dDayTimer = setInterval(christmasDayTimer, 1000);
