let a  = 5; //변수 만들기 let 은 바뀔 수 있다
const b  = 2; // const는 값이 바뀔 수 없다

const myName = "CHO"

console.log(a +b)

a = 2; // a가 let 으로 선언 되있어서 바꿀 수 있다.
console.log(a +b)

const amIFat = false; // boolean true / false / null
let something; //undefined

const daysOfWeek = ["mon","tue","wed","thu","fri","sat"]; //array
console.log(daysOfWeek);
console.log(daysOfWeek[5]);

//Add one more day to the array
daysOfWeek.push("sun")

//object
const player = {
    name:"nico",
    points: 10,
    fat: true,
    
}
console.log(player.name) //player["namae"] 도 똑같은 역활
player.fat = false //porperty 수정
player.lastName = "potato" //property 추가
console.log(player)

//function