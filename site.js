let clickedElem = document.querySelectorAll('.elem');

for (i = 0; i < clickedElem.length; i++) {
    clickedElem[i].addEventListener('click', show);
}

// let target = document.querySelectorAll('.subElem');

// for (i = 0; i < target.length; i++) {
//     target[i].addEventListener('click', show);
// }

function toggle() {
    document.querySelector(".container").classList.toggle("show");
}

function show() {
    // let choosenOption = document.querySelectorAll(".subElem");
    // let setOption = oneOption.style.display == "flex";
    let oneOption = document.querySelector(".subElem");
    oneOption.classList.toggle("show2");
    // for (i = 0; i < choosenOption.length; i++) {
    //     if (!setOption) {
            
    //     }
    // }
        // document.querySelector(".subElem").
}

// classList.toggle("show2");

document.querySelector('.mobileMenu').addEventListener('click', toggle);

// document.querySelector('.options').addEventListener('click', appears);