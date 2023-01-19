//SELECTOR
function fromID(elementId) {
  return document.getElementById(elementId);
}

//date for date button
let dateButton = fromID('date-button');
function dateForDateButton() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth();
  let d = date.getDate();
  let datestring =
    '-' + ('0' + m + 1).slice(-2) + '-' + ('0' + d).slice(-2) + '-' + y + '-';
  dateButton.innerHTML = datestring;
}
setInterval(dateForDateButton, 1000);

//timer for time button
let timeButton = fromID('time-button');
function timeForTimeButton() {
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
setInterval(timeForTimeButton, 1);

function usedTime() {
  let usedTime = fromID('used-time-button');
  usedTime.innerHTML = '00d00:00:00';
}
setInterval(usedTime, 1);
