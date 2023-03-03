const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 에 img 생성

bgImage.src = `img/${chosenImage}`; // 이미지를 선택하고 src로 img 폴더 뒤에 추가

document.body.appendChild(bgImage) //bgImage를 body 에 추가 append 는 가장 뒤에 prepend 는 가장 위에 오게한다

