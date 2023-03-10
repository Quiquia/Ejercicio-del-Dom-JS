const d = document;

export function relojDigital(clock, btnPlay, btnStop) {
  let clockTiempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTiempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTiempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarma(sound, btnPlay, btnStop) {
  let alarmTiempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTiempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTiempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
