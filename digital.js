"use strict";

let hour = document.querySelector(".hour");
let minute = document.querySelector(".min");
// TO-DO: am-pm, seconds

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  hour.textContent = h;
  minute.textContent = m;
}

updateClock();

setInterval(updateClock, 60000);
