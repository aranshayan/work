let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let millisecondElement = document.querySelector(".milliSecond");

let startButton = document.querySelector(".start");
let pauseButton = document.querySelector(".pause");
let stopButton = document.querySelector(".stop");


let interval;
let innerText;
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;


startButton.onclick  = function()
{
    clearInterval(interval); 
    interval = setInterval(startTimer);
};

pauseButton.onclick = function() 
{ 
    clearInterval(interval); 
};

stopButton.onclick = function() 
{
    clearInterval(interval);
    clearFields(); 
};

setInterval(() => 
{
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)



function startTimer() 
{
    millisecond++;
    if(millisecond > 99)
    {
        second++;
        secondElement.innerText = "0" + second;
        millisecond = 00;
        millisecondElement.innerText = "0" + millisecond;
    }

    if(second > 60) 
    {
        minute++;
        minuteElement.innerText = "0" + minute;
        second = 00;
        secondElement.innerText = "0" + second;
    }

    if(millisecond > 9) 
    {
        millisecondElement.innerText = millisecond;
    }
    if (second >9)
    {
        secondElement.innerText = second;
    }
    if (minute > 9)
    {
        minuteElement.innerText = minute;
    }
    if(hour > 9) 
    {
        hourElement.innerText = hour;
    }
}

function clearFields() {
    hourElement.innerText = "00";
    minuteElement.innerText = "00";
    secondElement.innerText = "00";
    millisecondElement.innerText = "00";

}