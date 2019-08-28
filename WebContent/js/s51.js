/**
 * s51.js
 * 
 * Slide 51
 */
$(function() {
	let important = false;

	$('#changeMsg1').click(function() {
		let msg = $('#msg1');
		$('#target').html(msg.html());
		if (important) {
			msg.html('An <b>important</b> message');
		} else {
			msg.html('A <i>plain</i> message');
		}
		important = !important;
	});

	$('#changeTextMsg1').click(function() {
		let msg = $('#msg1');
		$('#target').text(msg.text());
		if (important) {
			msg.text('An <b>important</b> message');
		} else {
			msg.text('A <i>plain</i> message');
		}
		important = !important;
	});

	$('#changeMsg2').click(function() {
		let msg = $('#msg2');
		$('#target').text(msg.val());
		if (important) {
			msg.val('Important');
		} else {
			msg.val('Plain');
		}
		important = !important;
	});

	$('#upsize').click(function() {
		let msg = $('#msg3');
		let cur = parseInt(msg.css('font-size'));
		msg.css('font-size', cur * 2);
	});

	$('#downsize').click(function() {
		let msg = $('#msg3');
		let cur = parseInt(msg.css('font-size'));
		msg.css('font-size', cur > 1 ? cur / 2 : 1);
	});

	let wn = 0;
	let wr = 0;
	let tg = 0;

	$("#roll").click(function() {
		let n = Math.floor((Math.random() * 6) + 1);
		tg = ++tg;
		$('#msgex').val(n);
		if (n > 3) {
			$("<p>You won</p>").css({
				color : 'green'
			}).appendTo('#result');
			// $('#resultarea').text($('#resultarea').text() + 'You won\n');
			$('#resultarea').append('You won\n');
			wn = ++wn;
		} else if (n <= 3) {
			$("<p>You lost</p>").css({
				color : 'red'
			}).appendTo('#result');
			// $('#resultarea').text($('#resultarea').text() + 'You lost\n');
			$('#resultarea').append('You lost\n');
		}
		wr = Math.floor((wn / tg) * 100);
		$('#result').prop('title', 'Your win rate is ' + wr + '%\n');
		if (n === 1) {
			$('#dice').prop('src', './pic/dice1.png');
		} else if (n === 2) {
			$('#dice').prop('src', './pic/dice2.png');
		} else if (n === 3) {
			$('#dice').prop('src', './pic/dice3.png');
		} else if (n === 4) {
			$('#dice').prop('src', './pic/dice4.png');
		} else if (n === 5) {
			$('#dice').prop('src', './pic/dice5.png');
		} else if (n === 6) {
			$('#dice').prop('src', './pic/dice6.png');
		}
	})
});
