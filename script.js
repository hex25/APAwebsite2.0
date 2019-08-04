const navbar = document.getElementById('navbar');
const page1 = document.getElementById('page1');
const navbarButton = document.getElementById('navbar-button');

let isClicked = false;
navbarButton.onclick = function() {
    if (isClicked === false) {
        navbar.style.visibility = 'visible';
        navbarButton.src= 'menuclose.png';
        isClicked = true;
    } else  {
        navbar.style.visibility = 'hidden';
        navbarButton.src= 'menuicon.png';
        isClicked = false;
    }
    
}