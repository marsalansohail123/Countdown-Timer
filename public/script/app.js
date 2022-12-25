var userSec = document.getElementById("userSec");
var userMin = document.getElementById("userMin");

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds")

var min;
var sec;

var miliSec = 0;

var countdown;

function set() {
    if (userSec.value == "" || userMin.value == "") {
        alert("Enter Value")
    } else {
        sec = userSec.value;
        min = userMin.value;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
        userSec.value = "";
        userMin.value = "";
    }
}

function counte() {
    miliSec++;
    console.log(miliSec)
    if (miliSec == 100) {
        sec--;
        miliSec = 0
        seconds.innerHTML = sec;
        console.log(sec)
    }
    else if (min > 0 && sec == 0) {
        min--;
        sec = 60;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
    }
    else if (min == 0 && sec == 0) {
        pause();
        alert("Timer Finish")
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";
    }
}

function start() {
    countdown = setInterval(counte, 10);
}

function pause() {
    clearInterval(countdown);
}

function reset() {
    pause();
    sec = 00;
    min = 00;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
}