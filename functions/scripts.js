function nextItem (){
	$('ul li:not(.done)').first().removeClass('active').addClass('done');
	$('ul li:not(.done)').first().addClass('active');
}

$('.next-button').click(nextItem);

console.log('starting...');