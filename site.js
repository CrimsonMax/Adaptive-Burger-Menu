let clickedElem = document.querySelectorAll('.elem');

for (i = 0; i < clickedElem.length; i++) {
    clickedElem[i].addEventListener('click', show);
}

let target = document.querySelectorAll('.subElem');

for (i = 0; i < target.length; i++) {
    target[i].addEventListener('click', show);
}

function toggle() {
    document.querySelector(".container").classList.toggle("show");
}

function show() {
    document.querySelector(".subElem").classList.toggle("show2");
}

document.querySelector('.mobileMenu').addEventListener('click', toggle);