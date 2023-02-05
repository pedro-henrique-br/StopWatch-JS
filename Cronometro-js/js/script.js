let timer 

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let myInterval;

function addDigit (CurrentTime) {
  if(10 > CurrentTime){
    return ("0" + CurrentTime)}
  return CurrentTime
}

function start () {
  myInterval = setInterval(interval, 10)
}

function pause () {
  clearInterval(myInterval)
}

function stop () {
  clearInterval(myInterval)
  timer = document.getElementById("timerDisplay")
  timer.innerHTML = "00:00:00"
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
}

function interval () {
  milliseconds++
  if(milliseconds == 60){
    seconds++
    milliseconds = 0
      if(seconds == 60){
        minutes ++
        seconds = 0;
      }
    }    
  
timer = document.getElementById("timerDisplay")
timer.innerHTML = addDigit(minutes)+":"+addDigit(seconds)+":"+addDigit(milliseconds)
}