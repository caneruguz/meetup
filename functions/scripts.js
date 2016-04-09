
function nextItem (){
	$('ul li:not(.done)').first().removeClass('active').addClass('done');
	$('ul li:not(.done)').first().addClass('active');
}

$('.next-button').click(nextItem);


function addThings () {
	 console.log(arguments);
	 var total = 0;
	 for(var i = 0; i < arguments.length; i++){
	 		total = total + arguments[i];
	 }
	 return total;
}



