// JavaScript Document
(() => {



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
