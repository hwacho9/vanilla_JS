// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const BodyColor = document.querySelector("body");
const BLUE = "#4233F2";
const ORANGE = "#FF8000";
const YELLOW = "#EBBF3A";

function colorChange() {
    const Width = window.innerWidth;
    console.log(Width);
    if (Width < 400) {
        BodyColor.style.backgroundColor = BLUE;
    } else if (Width >= 401 && Width < 800) {
        BodyColor.style.backgroundColor = ORANGE;
    } else {
        BodyColor.style.backgroundColor = YELLOW;
    }
}

window.addEventListener("resize", colorChange);
