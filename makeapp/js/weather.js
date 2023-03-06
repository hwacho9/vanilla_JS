const API_KEY = "d437a794b2b3ea71301453062adb4a81";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //fetch는 promise이다 promise 는 당장 무너가 일어나지 않고 시간이 좀 걸린뒤 일어나는것
    //then 으로 서버의 응답을 기다린다 URL을 fetch 하고 그 다음으로 response를 받는다 그리고 response의 json 을 받는다
    //내용을 추출하고 data를 받는다
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//여기까지 현재 위치 파악
