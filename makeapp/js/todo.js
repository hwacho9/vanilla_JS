const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //후에 변수를 수정 할 수 있게 let사용

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos Array의 내용을 localStorage에 넣는다.
    //JSON.stringfy() 는 JS object 나 array또는 어떤 JS코드건 간에 string 으로 바꿔준다
    //array 모양으로 저장되게 한다 [1,2,3,4] > "[1,2,3,4]"
    //JSON.parse 는 array로 변환해준다 살아있는 JS object로

}

function deleteToDo(event) {
    // console.log(event.target.parentElement.innerText);
    /* tareget 은 클릭된 HTMl element 이다, HTML element 에는 하나 이상의 
    property 가있다 parentElement는 클릭된 element 의 부모이다 
    */
    const li = event.target.parentElement; // 우리가 삭제하고 싶은 li
    li.remove();
    toDos = toDos.filter(toDo => toDo.id  !== parseInt(li.id));
    //우리가 클릭한 li.id와 다른 toDo는 남김
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; // HTMl에 li id를 제공해야한다 
    const span = document.createElement("span");
    span.innerText = newTodo.text; //obj를 받지만 text만 출력 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li 에 span을 넣어 준다
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id : Date.now(), //random id 제공
    };
    toDos.push(newTodoObj); //array 에 푸쉬 
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) { //forEach에서 item 를 공짜로 넘겨준다
    console.log("this is the turn of", item);
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);  

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //string > array 변환
    toDos = parsedToDos; // toDos array 를 가지고 와서 toDos array 에 복원 
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach(sayHello); //forEach 는 array 의 각 item에 대해 function을 실행하게 해준다
    // parsedToDos.forEach((item) => consolo.log("this is the turn of", item)) 과 똑같다
}

