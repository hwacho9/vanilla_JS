const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기함
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
    /* 
    form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
    preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

    addEventListener의 첫 번째 인자는 이벤트이고 이벤트와 관련된 함수에서 그 이벤트에 대한 정보를 함수의 첫 번째 인자에 저장해둔다. 
    그 정보 안에는 preventDefault라는 메소드가 있는데 이것은 브라우저가 submit 했을 때 새로고침이 안 되게 막는 역할 등을 한다.

    conole.log(event) 를 하면 정보를 볼 수 있다.
    */
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; // input value 값
    localStorage.setItem(USERNAME_KEY, username) // setItem("key", "value") 로컬저장소에 저장한다
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)  {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}
