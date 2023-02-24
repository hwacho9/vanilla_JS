const h1 = document.querySelector("h1");
const blueviolet = "blueviolet";
const yellow = "yellow";
const aqua = "aqua";

function checkWindowSize() {
    const size = window.innerWidth;
    if(size < "600") {
        document.body.classList.remove(blueviolet);
        document.body.classList.add(aqua);
    } else if(size >= "600" && size < "1200") {
        document.body.classList.remove(aqua);
        document.body.classList.remove(yellow);
        document.body.classList.add(blueviolet);
    } else if(size >= "1200"){
        document.body.classList.remove(blueviolet);
        document.body.classList.add(yellow);
    }

}

window.addEventListener("resize", checkWindowSize);
