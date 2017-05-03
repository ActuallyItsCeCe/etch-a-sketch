$(document).ready(function(){
// Make the x Axis	
	for(var x = 0; x < 16; x++) {
// Add Y Axis
		for(var y = 0; y < 16; y++){
// Adding the div for filled in squares
			var unit = $('div class="unit"></div>');
			unit.appendTo('.sketch');
		};
	};
// adding the hover action
$('.unit').hover(draw);
buttonPress();
});	

// Edit the colors when hovering
function draw() {
	var currentOp = +$(this).css('opacity');
	if (currentOp < 1) {
		currentOp += 0.1;
		$(this).css({"opacity", currentOp})
	};
};

//Reset the table
function buttonPress() {
	$('button').on('click', function(){
		$('.unit').css({"opacity", "0.1");
	})
}