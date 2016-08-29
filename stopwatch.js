"use strict";

var myWatch = new Stopwatch();

var watch;

var getStartBtn = document.getElementById('start');
var getPauseBtn = document.getElementById('pause');
var getClearBtn = document.getElementById('clear');

getStartBtn.addEventListener('click', StartStopwatch, false);
getPauseBtn.addEventListener('click', StopStopwatch, false);
getClearBtn.addEventListener('click', ClearStopwatch, false);

SetStopwatch(0, 0, 0);

DisableButtons(false, true, true);

function Stopwatch (){
    
    this.Hours = 0;
    this.Minutes = 0;
    this.Seconds = 0;
};

function SetStopwatch(hour, minute, second){

    var getHoursEl = document.getElementById('hour');
    var getMinutesEl = document.getElementById('minute');
    var getSecondsEl = document.getElementById('second');

    second < 10 ? second = '0'+ second : second;
    minute < 10 ? minute = '0' + minute : minute;
    hour < 10 ? hour = '0' + hour : hour;

    getHoursEl.textContent = hour;
    getMinutesEl.textContent = minute;
    getSecondsEl.textContent = second;
};


function StopStopwatch(){

        clearInterval(watch);
        DisableButtons(false, true, false);
};

function ClearStopwatch(){

        clearInterval(watch);
        myWatch.Hours = 0;
        myWatch.Minutes = 0;
        myWatch.Seconds = 0;
        SetStopwatch(myWatch.Hours, myWatch.Minutes, myWatch.Seconds);
        DisableButtons(false, true, true);
        
};

function StartStopwatch(){

    DisableButtons(true, false, false);

    watch = setInterval(function(){

        myWatch.Seconds++;
        if(myWatch.Seconds === 60){

            myWatch.Seconds = 0;
            myWatch.Minutes++;

            if(myWatch.Minutes === 60){

                myWatch.Minutes = 0;
                myWatch.Hours++;

                if(myWatch.Hours === 24){

                    myWatch.Hours = 0;
                }
            }
        }
        SetStopwatch(myWatch.Hours, myWatch.Minutes, myWatch.Seconds);
    }, 1000);
};


function DisableButtons(_start, _pause, _clear)
{
    getStartBtn.disabled = _start;
    getPauseBtn.disabled = _pause;
    getClearBtn.disabled = _clear;
}