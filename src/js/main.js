function fromID(elementId) {
  return document.getElementById(elementId);
}

let timeButton = fromID('time-button');
let timeButtonStyle = timeButton.style.color;

timeButton.addEventListener('click', () => {
  if ((timeButton.style.color = 'green')) {
    timeButton.style.color = '#d60000';
  } else if ((timeButton.style.color = '#d60000')) {
    timeButton.style.color = 'green';
  }
	console.log('hello')
});

function timer() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ms = date.getMilliseconds();
  let timestring =
    ('0' + h).slice(-2) +
    ':' +
    ('0' + m).slice(-2) +
    ':' +
    ('0' + s).slice(-2) +
    '.' +
    ('00' + ms).slice(-3);
  timeButton.innerHTML = timestring;
}
setInterval(timer, 1);

function usedTime() {
  let usedTime = fromID('used-time-button');
  usedTime.innerHTML = '0000std00min';
}
setInterval(usedTime, 1);
