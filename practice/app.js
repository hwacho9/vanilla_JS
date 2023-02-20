const title = document.getElementById("title"); 
//document는 HTMl 을 뜻한다, getElementById란 함수를 이용해 id를 통해 element 를 가져올 수 있다

title.innerText = "Got you!"; // javascript 를 통해 html 수정
console.log(title.id);
console.log(title.className); //title의 class 가져오기

const titles = document.querySelector(".hello h1"); 
// querySelector는 element를 css 방식으로 검색할 수 있다. > heelo class 안에 있는 h1 선택
// 첫번쨰 엘리멘트만 가져온다 > 다가져오려면 querySelectorAll 사용

console.log(titles);

titles.style.color = "blue";

