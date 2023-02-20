const title = document.getElementById("title"); 
//document는 HTMl 을 뜻한다, getElementById란 함수를 이용해 id를 통해 element 를 가져올 수 있다

title.innerText = "Got you!"; // javascript 를 통해 html 수정
console.log(title.id);
console.log(title.className); //title의 class 가져오기

const h1 = document.querySelector(".hello h1"); 
// querySelector는 element를 css 방식으로 검색할 수 있다. > heelo class 안에 있는 h1 선택
// 첫번쨰 엘리멘트만 가져온다 > 다가져오려면 querySelectorAll 사용

console.log(h1);

function handleTitleClick(){
    h1.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
    console.log("mouse is here!");
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; 
    //bdoy, head, title 과 같은 element 는 querySelector 없이 선택가능
}

function handleWindowCopy(){
    alert("coiper!");
}

function handleWindowOffline(){
    alert("SOS no WiFi")
}

function handleWindowOnline(){
    alert("ALL GOOD")
}

h1.addEventListener("click", handleTitleClick); // addEventListener를 통해 event 를 감지한다 
// handleTitleClick 에 ()를 붙히지 않음으로서 event가 작동됬을 때 함수를 실행할지 정한다
// h1(element 이름) html element mdn 을 검색해서 Web APIs 가 포함되있는 사이트로 들어간다
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);