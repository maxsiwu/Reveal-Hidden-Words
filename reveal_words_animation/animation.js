
//create block that hides the charaters underneath
$(document).ready(function(){
	var what = $('.what');
	what.append('<div class="block"></div>');
	$('.block').addClass('bar');

});
// changing the width of the grey block
$('#button').click(function(){
	//bounce back to original form after
	$('.block').animate({width: "0px"}, {easing:"easeInBack"})
			   .delay(1000)
			   .animate({width:"200px"},{easing:"easeOutBounce"});
});
//just some bg
 $('div').particleground({
        dotColor: '#ff0000',
        lineColor: '#ff0000'
    });