import { Timer, Time, TimerOptions } from 'timer-node';

let black = '#1d1f21';
let white = '#d9d9d9';
let red = '#d60000';
let green = '#13b010';
let orange = '#fcba03';

let usedTime = document.getElementById('z-n');
let totalTime = document.getElementById('z-g');

let pause = true;

const timer = new Timer({});

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 38) {
    usedTime.style.background = green;
    timer.start();
    console.log(timer.isStarted());
    usedTime.innerHTML = '';
  } else if (event.keyCode == 40) {
    usedTime.style.background = red;
    timer.stop();
    console.log(timer.isStopped());
    usedTime.innerHTML = timer.format('%hh%mm%ss%msms');
  } else if (event.keyCode == 39 && pause) {
    usedTime.style.background = orange;
    timer.pause();
    usedTime.innerHTML = timer.format('%hh%mm%ss%msms');
    pause = false;
  } else if (event.keyCode == 39 && pause == false) {
    usedTime.style.background = green;
    pause = true;
    timer.resume();
    usedTime.innerHTML = '';
  }
  if (event.keyCode == 37) {
    totalTime.style.background = green;
  }
});
