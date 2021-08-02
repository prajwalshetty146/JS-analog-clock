setInterval(() => {
  date = new Date();
  hourTime = date.getHours();
  minTime = date.getMinutes();
  secTime = date.getSeconds();
  
  hrotation = 30 * hourTime;
  mrotation = 6 * minTime;
  srotation = 6 * secTime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);
