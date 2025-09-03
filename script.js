function updateClock() {
  const now = new Date();

  // Convert to IST (UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);

  const sec = ist.getSeconds();
  const min = ist.getMinutes();
  const hr = ist.getHours() % 12;

  document.getElementById("second").style.transform = `translateX(-50%) rotate(${sec * 6}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${min * 6}deg)`;
  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hr * 30 + min * 0.5}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
