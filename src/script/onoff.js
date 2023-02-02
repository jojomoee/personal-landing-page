import { Timer, Time, TimerOptions } from 'timer-node';

let black = '#1d1f21';
let white = '#d9d9d9';
let red = '#d60000';
let green = '#36CF00';
let orange = '#fcba03';

let onBtn = document.getElementById('on');
let offBtn = document.getElementById('off');
let usedTime = document.getElementById('z-n');

let pause = true;

const timer = new Timer({ label: 'test-timer' });

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 38) {
    onBtn.style.background = green;
    offBtn.style.background = white;
    timer.start();
    usedTime.innerHTML = timer.time();
    console.log(timer.isStarted());
  } else if (event.keyCode == 40) {
    console.log(timer.isStopped());
    offBtn.style.background = red;
    onBtn.style.background = white;
  } else if (event.keyCode == 39 && pause) {
    usedTime.style.background = orange;
    pause = false;
  } else if (event.keyCode == 39 && pause == false) {
    usedTime.style.background = white;
    pause = true;
    timer.resume();
  }
});
