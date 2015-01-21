$(document).ready(function(){
	console.log("jQuery: OPERATIONAL");

	$('#convertBtn').on('click', function(){
		//converts the temp in the input box
		var cTemp = $('#tempInC').val();
		var fTemp = ((cTemp * 9) / 5) + 32;
		var fTemp = parseFloat(fTemp).toFixed(1);
		console.log("You entered: " + cTemp + " degrees, in Celcius.");
		console.log("Temperature in F: " + fTemp)
		$('#tempInC').val('');
		$('#result1').html(fTemp + "&deg; F");
	})

	$('#convertBtn2').on('click', function(){
		//converts the temp in the input box
		var fTemp2 = $('#tempInF').val();
		var cTemp2 = ((fTemp2 - 32) * 5) / 9;
		var cTemp2 = parseFloat(cTemp2).toFixed(1);
		console.log("You entered: " + fTemp2 + " degrees, in Fahrenheit.");
		console.log("Temperature in C: " + cTemp2)
		$('#tempInF').val('');
		$('#result2').html(cTemp2 + "&deg; C");
	})

})