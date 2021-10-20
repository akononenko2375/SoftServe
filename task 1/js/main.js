let londonGMT = 1;
let localGMT = (new Date().getTimezoneOffset() / 60) * -1;

function clock(selector, gmt) {
  let date = new Date();
  let hours = addZero(date.getUTCHours());
  let minutes = addZero(date.getUTCMinutes());
  let seconds = addZero(date.getUTCSeconds());
  let time = hours + Number(gmt) + ":" + minutes + ":" + seconds;

  document.querySelector(selector).innerHTML = time;
}

const addZero = i => i < 10 ? "0" + i : i;

function clockStart() { 
  setInterval(() => clock(".local__time", localGMT), 1000);
  setInterval(() => clock(".london__time", londonGMT), 1000);
  clock(".local__time", localGMT);
  clock(".london__time", londonGMT)
}

clockStart()
