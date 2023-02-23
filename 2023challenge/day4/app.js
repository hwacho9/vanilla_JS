const h1 = document.querySelector("h1")
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const superEventHandler = {
    handleMouseEnter: function () {
        h1.innerText = "The mouse is here!";
        h1.style.color= colors[0];   
    },
    handleMouseLeave: function () {
        h1.innerText = "The mouse is gone!";
        h1.style.color = colors[1];
    },
    handleWindowResize: function () {
        h1.innerText = "You just resized!";
        h1.style.color = colors[2];
    },
    handleRightClick: function () {
        h1.innerText = "That was a right click!";
        h1.style.color = colors[4];
    }
};  

h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);