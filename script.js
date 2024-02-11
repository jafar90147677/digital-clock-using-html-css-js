function showTime() {
  const date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").innerHTML = time;

  setTimeout(showTime, 1000);
}

showTime();
