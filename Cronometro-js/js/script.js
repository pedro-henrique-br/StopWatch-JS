let timer 

let zero = "0";
let seconds = 0;
let minutes = 0;
let hours = 0;
let myInterval;

function myDigit (digit) {
  if(10 > digit){
    return ("0" + digit)
  }
  else{
    return digit
  } 
}

function start () {
  myInterval = setInterval(interval, 1000)
}

function pause () {
  clearInterval(myInterval)
}

function stop () {
  clearInterval(myInterval)
  timer = document.getElementById("timer")
  timer.innerHTML = "00:00:00"
  seconds= 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
}

function interval () {
  seconds++
  if(seconds == 60){
    minutes++
    seconds = 0
      if(minutes == 60){
        hours ++
        minutes = 0;
}
}
  
  timer = document.getElementById("timer")
  timer.innerHTML = myDigit(hours)+":"+myDigit(minutes)+":"+myDigit(seconds)
}