// JavaScript Document
(() => {
//VARIABLE STACK
let navIcon = document.querySelector('.navIcon'),
    navList = document.querySelector('.navList');



//FUNCTIONS
function toggleMenu() {
    if (navList.classList.value == 'navList hidden') {
        navList.classList.remove('hidden');
    }
    else {
        navList.classList.add('hidden');
    }
}


//EVENT HANDLING
navIcon.addEventListener('click', toggleMenu);


})();
