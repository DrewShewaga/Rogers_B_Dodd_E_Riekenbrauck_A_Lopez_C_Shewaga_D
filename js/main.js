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

    
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

var slides = document.querySelectorAll('.panel');
    
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
        .setPin(slides[i])
        .addTo(controller);
    }



//EVENT HANDLING
navIcon.addEventListener('click', toggleMenu);


})();
