// JavaScript Document
(() => {
//VARIABLE STACK
let navIcon = document.querySelector('.navIcon'),
    navList = document.querySelector('.navList');



//FUNCTIONS
function toggleMenu() {

    navList.classList.toggle("moveNav");


}

    
// var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave'
//     }
// });

// var slides = document.querySelectorAll('.panel');
    
//     for (var i=0; i<slides.length; i++) {
//         new ScrollMagic.Scene({
//             triggerElement: slides[i]
//         })
//         .setPin(slides[i])
//         .addTo(controller);
//     }



//EVENT HANDLING
navIcon.addEventListener('click', toggleMenu);




function getResults() {

	console.log('hit get results');

	fetch('./product/read.php')
	.then(res => res.json())
	.then(data => {
	  console.log(data);


	  data.forEach((item, index) => {

	  	// THIS IS THE NAME OF OUR PRODUCT
	  	// SELECT THE PROPER QUERY WHEN ITS AVAILABLE
	    // document.querySelector("#test1").textContent = item.product_name;

	    // every Linked Table needs to be accsessed via another Loop, due to how Pan 
	    item.product_desc.forEach(desc => {
	    	// THIS IS THE DESCRIPTION OF OUR PRODUCT
		  	// SELECT THE PROPER QUERY WHEN ITS AVAILABLE
			// document.querySelector("#test2").textContent += desc.product_desc;
        });


	  });
	})
	.catch(function(error) {
	  console.log(error);
	});
}

// fire off the fetch call
getResults();

})();
