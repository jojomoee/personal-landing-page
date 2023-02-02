let black = '#1d1f21';
let white = '#d9d9d9';
let red = '#d60000';
let green = '#36CF00';
let orange = '#fcba03';

let onBtn = document.getElementById('on');
let offBtn = document.getElementById('off');
let usedTime = document.getElementById('z-n');

let pause = true;
let timer = false;
let hour = '00';
let minute = '00';
let second = '00';
let count = '00';

let timestring;

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 38) {
    onBtn.style.background = green;
    offBtn.style.background = white;
    timer = true;
    stopWatch();
  } else if (event.keyCode == 40) {
    offBtn.style.background = red;
    onBtn.style.background = white;
  } else if (event.keyCode == 39 && pause) {
    usedTime.style.background = orange;
    pause = false;
  } else if (event.keyCode == 39 && pause == false) {
    usedTime.style.background = white;
    pause = true;
  }
});

function stopWatch() {
  if (timer) {
    count++;
    if (count == 100) {
      second++;
      count = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;
    if (hour < 10) {
      hrString = '0' + hrString;
    }
    if (minute < 10) {
      minString = '0' + minString;
    }
    if (second < 10) {
      secString = '0' + secString;
    }
    if (count < 10) {
      countString = '0' + countString;
    }

    timestring =
      hrString + ':' + minString + ':' + secString + ':' + countString;
    usedTime.innerHTML = timestring;
    setTimeout(stopWatch, 10);
  }
}
