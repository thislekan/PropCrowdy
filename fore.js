let navbar = document.getElementById("navbar");
let navlinks = document.querySelectorAll("nav div a");
console.log(navlinks);
//console.log(pageYOffset);
/*window.addEventListener("scroll", () => {
    var distY = window.pageYOffset||document.documentElement.scrollTop;
    let shrinkon = 120;
    if (distY === 300) {
        console.log("Hello");
    }
})*/

window.addEventListener("scroll", () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 150) {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
	navbar.style.zIndex = 3;
        for (var i = 0; i < navlinks.length - 1; i++) {
            navlinks[i].style.color = "black";
        }
    }else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.color = "white";
        for (var i = 0; i < navlinks.length - 1; i++) {
            navlinks[i].style.color = "white";
        }
    }
})