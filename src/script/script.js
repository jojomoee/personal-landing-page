function fromID(elementId) {
  return document.getElementById(elementId);
}

let dateButton = fromID('d-a');
let timeButton = fromID('z-a');

//date for date button
function dateForDateButton() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth();
  let d = date.getDate();
  let datestring =
    '-' + ('0' + m + 1).slice(-2) + '-' + ('0' + d).slice(-2) + '-' + y + '-';
  dateButton.innerHTML = datestring;
}
setInterval(dateForDateButton, 100);

//timer for time button TODO
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
