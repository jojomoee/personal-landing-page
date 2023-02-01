let black = '#1d1f21';
let white = '#d9d9d9';
let red = '#d60000';
let green = '#36CF00';

let onBtn = document.getElementById('on');
let offBtn = document.getElementById('off');
let usedTime = document.getElementById('z-n');

let pause = true;

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 38) {
    onBtn.style.background = green;
    offBtn.style.background = white;
  } else if (event.keyCode == 40) {
    offBtn.style.background = red;
    onBtn.style.background = white;
  } else if (event.keyCode == 39 && pause) {
    usedTime.style.background = red;
    pause = false;
  } else if (event.keyCode == 39 && pause == false) {
    usedTime.style.background = white;
    pause = true;
  }
});
