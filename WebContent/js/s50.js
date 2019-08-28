/**
 * s50.js
 * 
 * Slide 50
 */

$(function() {
	$('#colorOn').click(function() {
		$('#msg1').addClass('red');
	});

	$('#colorOff').click(function() {
		$('#msg1').removeClass('red');
	});

	$('#swapColor').click(function() {
		$('#msg2').toggleClass('red');
	});

	$('#swapColor2').click(function() {
		$('#msg3').addClass('red');
		$('#msg3').removeClass('yellow');
	});

	$('#swapColor3').click(function() {
		$('#msg3').addClass('yellow');
		$('#msg3').removeClass('red');
	});

	$('#swapColor4').click(function() {
		
		if ($('#msg4').hasClass('red'||'blue')) {
			$('#msg4').addClass('yellow');
			$('#msg4').removeClass('red'||'blue')
		} else if ($('#msg4').hasClass('yellow'||'red')) {
			$('#msg4').addClass('blue');
			$('#msg4').removeClass('yellow'||'red');
		} else {
			$('#msg4').addClass('red');
			$('#msg4').removeClass('yellow'||'blue')
		}})
	});

