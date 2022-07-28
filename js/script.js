const currentTime = () => {
    const el = document.querySelector("h1");
    let place = document.querySelector("select");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    if (place.value == 1) {
        let time = `${hh=hh+4}:${mm}:${ss}`;
    }
    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time;
}

currentTime();
setInterval(currentTime, 2000);
