$(document).ready(function(){

	var strToType = "abcdefghijklmnopqrstuvwxyz";
	var charCount = 0;
	var time = 0;
	var color;
	var failed = false;
	var timer;

	$('#str-to-type').html(strToType);
	$('#text-input').focus();

	$('#text-input').keydown(function(e) {
	 	var c = String.fromCharCode(e.which);
	 	if (e.which == 13) {
	 		reset();
	 	}
	 	if (!strToType.includes(c.toLowerCase())) {
	 		return false;	
	 	}
	 	console.log(strToType.charAt(charCount));
	 	if (charCount == 0) {
	 		$('#result').show();
	 		timer = setInterval(function() {
	 			time++;
	 			$('#time').html((time/100).toFixed(2) + " s");
	 		}, 10);
	 	}
	 	if (c.toLowerCase() != strToType.charAt(charCount)) {
	 		color = "red";
	 		failed = true;
	 		fail();
	 		clearInterval(timer);
	 	}
	 	else {
	 		color = "green";
	 	}

	 	console.log(charCount);
	 	console.log(strToType.length);
	 	if (charCount == strToType.length-1) {
	 		clearInterval(timer);
	 		if (failed == true) {
	 			fail();
	 		}
	 		else {
	 			win();
	 		}
	 	}

	 	$('#result').append('<span style="color: ' + color + '">' + c + '</span>');
	 	charCount++;
	});

	$('#reset').click(reset);

	function fail() {
		$('#status').css("color", "red");
		$('#status').html("FAILED !");
	}

	function win() {
		$('#status').css("color", "green");
		$('#status').html("BRAVO !");
	}

	function reset() {
		$('#text-input').val("");
		$('#result').html("");
		time = 0;
		charCount = 0;
		time = 0;
		failed = false;
		clearInterval(timer);
		$('#status').html("");
		$('#time').html("0 s");
		$('#text-input').focus();
	}
});
