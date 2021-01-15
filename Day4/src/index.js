//import "./styles.css";

const timer = document.querySelector("h2");

// You're gonna need this
function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const today = new Date();
    const dday = xmasDay - today;

    const day = Math.floor(dday / (1000 * 60 * 60 * 24)); //일
    const hour  = Math.floor((dday / (1000 * 60 * 60)) % 24); //시간
    const minute = Math.floor((dday / (1000 * 60)) % 60); //분
    const second = Math.floor((dday / 1000) % 60); //초
    timer.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
