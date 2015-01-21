$(document).ready(function() {
	console.log("DOM: Operational.")

	$("#registerNow").hide()

	// TOGGLE ABOUT ME
	$("#navAbout").click(function() {
		$("#aboutPage").animate({right:'15px'}, 200)
	})
	$(".aboutButton").click(function() {
		$("#aboutPage").fadeOut(150)
		$("#aboutPage").animate({right:'-1000px'}, 200)
		$("#aboutPage").fadeIn("fast")
	})

	// TOGGLE HOW IT WORKS
	$("#navHow").click(function() {
		$("#howPage").animate({right:'15px'}, 200)
	})
	$(".aboutButton").click(function() {
		$("#howPage").fadeOut(150)
		$("#howPage").animate({right:'-1000px'}, 200)
		$("#howPage").fadeIn("fast")
	})

	// TOGGLE FAQS
	$("#navFAQs").click(function() {
		$("#FAQpage").animate({right:'15px'}, 200)
	})
	$(".aboutButton").click(function() {
		$("#FAQpage").fadeOut(150)
		$("#FAQpage").animate({right:'-1000px'}, 200)
		$("#FAQpage").fadeIn("fast")
	})

	// TOGGLE REGISTER
	$("#buttonToAction").click(function() {
		$("#registerNow").fadeIn(150)
	})
	$("#closeRegistration").click(function() {
		$("#registerNow").fadeOut(150)
	})

});