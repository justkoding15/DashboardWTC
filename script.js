function updateTime() {
  const clock = document.getElementById("clock");
  const greeting = document.getElementById("greeting");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;

  let greet = "";
  if (now.getHours() < 12) {
    greet = "Selamat pagi!";
  } else if (now.getHours() < 15) {
    greet = "Selamat siang!";
  } else if (now.getHours() < 18) {
    greet = "Selamat sore!";
  } else {
    greet = "Selamat malam!";
  }

  greeting.textContent = greet;
}

setInterval(updateTime, 1000);
updateTime();
