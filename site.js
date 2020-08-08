let clickedElem = document.querySelectorAll('.options');

for (i = 0; i < clickedElem.length; i++) {
    let target = clickedElem[i].nextElementSibling;
    clickedElem[i].addEventListener('click', function () {
        let notNeed = document.querySelectorAll(".subElem");
        for (j = 0; j < notNeed.length; j++) {
            if (notNeed[j].classList.contains("show2")) {
                notNeed[j].classList.remove("show2");
            } else {
                target.classList.toggle("show2");
            }
        }
    });
}

function toggle() {
    document.querySelector(".container").classList.toggle("show");
}

document.querySelector('.mobileMenu').addEventListener('click', toggle);