/*
const what = "Hello"
console.log(what);

const wat = true;
//{} = object, [] = Array
const nicoInfo = {
    name: "Nico",
    age: "55",
    gender: "Male",
    isHandsome: true,
    favMovies: [
        "Along the gods", "LOTR", "Oldboy"
    ],
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        }, {
            name: "Cheeseburger",
            fatty: true
        }
    ]
};
console.log(nicoInfo.gender);

nicoInfo.gender = "Female"
console.log(nicoInfo.gender);

function sayHello(name, age) {
    console.log('Hello!',name,"you have", age,"years of age.");
}

sayHello("Nicolas",15);

function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Nicolas",15);
const calculater = {
    plus:function(a,b){
        return a + b;
    }
}
const plus = calculater.plus(5, 5)
console.log(plus)
*/
/*
const title = document.getElementById("title");
const title = document.querySelector("#title"); // 주로 이방법 사용
title.innerHTML = "Hi From JS"; // title id 내용 바꿔줌
title.style.color = "red"; 
document.title = "I own you now";
*/
const title = document.querySelector("#title");

function handleResize(){
    console.log();
    console.log("I have been resized")
}
window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color = "red";
}
title.addEventListener("click", handleClick);



