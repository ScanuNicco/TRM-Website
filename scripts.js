function checkNavBar() {
    if(window.scrollY > 0){
        document.getElementById("navBar").classList.add("scrollNotTop");
    } else {
        document.getElementById("navBar").classList.remove("scrollNotTop");
    }
}

var navOpen = false;
function toggleMobileNav() {
    if(!navOpen){
        document.getElementById("navLinks").classList.add("showMobileDropdown");
        document.getElementById("mobileMenu").innerHTML = "&times;";
    } else {
        document.getElementById("navLinks").classList.remove("showMobileDropdown");
        document.getElementById("mobileMenu").innerHTML = "&#9776;";
    }
    navOpen = !navOpen;
}

document.body.onscroll= checkNavBar;

/* pretty sure this was only used for the removed easter egg, keeping in case we need it
function showWindow(id) {
	document.getElementById(id).style.top = "10vh";
	document.body.style.overflowY = "hidden";
}

function closeWindow(id) {
	document.getElementById(id).style.top = "-100vh";
	document.body.style.overflowY = "auto";
}
*/
