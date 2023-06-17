// Fetching elements from the DOM
const [hourElement, minuteElement, secondElement] = document.querySelectorAll(".hours, .minutes, .seconds");
const [startButton, pauseButton, stopButton] = document.querySelectorAll(".start, .pause, .stop");

// Initializations
const countToDate = new Date().setHours(new Date().getHours() + 4);
let previousTimeBetweenDates;
let interval;
let innerText;

// Timer logic
interval = setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  if (timeBetweenDates !== previousTimeBetweenDates) {
    startTimer(timeBetweenDates);
    previousTimeBetweenDates = timeBetweenDates;
  }
}, 250);

function startTimer(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) {
    return;
  }
  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  // Animation events
  topFlip.addEventListener("animationstart", () => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
}
