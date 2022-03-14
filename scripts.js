function checkNavBar() {
    if(window.scrollY > 0){
        document.getElementById("navBar").style.background = "#fffd";
        document.getElementById("navBar").style.backdropFilter = "blur(15px)";
        document.getElementById("navBar").style.color = "black";
        document.getElementById("navBar").style.boxShadow = "0px 3px 3px rgba(0, 0, 0, .5)";
        document.getElementById("navBar").style.textShadow = "none";
    } else {
        document.getElementById("navBar").style.background = "transparent";
        document.getElementById("navBar").style.backdropFilter = "none";
        document.getElementById("navBar").style.color = "white";
        document.getElementById("navBar").style.boxShadow = "none";
        document.getElementById("navBar").style.textShadow = "1px 1px 2px rgba(0, 0, 0, .7)";
    }
}
