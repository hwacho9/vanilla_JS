const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // padStart(string 이 가져야 하는 길이를 설정, "뭐를 채워 넣을 것인지")
    const minutes = String(date.getMinutes()).padStart(2, "0"); //padStart 는 String 에만 사용 가능
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1초마다 실행 setInterval(함수, ms)
