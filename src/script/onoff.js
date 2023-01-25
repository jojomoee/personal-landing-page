let black = '#1d1f21';
let white = '#d9d9d9';
let red = '#d60000';
let green = '#36CF00';

let onBtn = document.getElementById('on');
let offBtn = document.getElementById('off');

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 37) {
    onBtn.style.background = green;
    offBtn.style.background = white;
  } else if (event.keyCode == 39) {
    offBtn.style.background = red;
    onBtn.style.background = white;
  }
});
