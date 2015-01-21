$(document).ready(function(){
	console.log("DOM: Operational.")
	$('.groceryCaption').hide();

	// PSEUDOCODE 101---
	// On click on button, accept and save the input box on the left.
	// Append the class, 'item', to the input values.
	// Add saved data to the list on the right.	
	// Reset the input field.

	// VARIABLES & FUNCTIONS
	
	var allItems = [];

	var addItem = function() {
		var item = $('#myImp').val();

		// check if there's somethign in input field
		if (item == ""){
			console.log("ERROR 404: Item (in the supermarket) not found.");
			$("#myImp").effect("shake", {times:7, distance:3, direction:"up"}, 350);
		}
		else {
			allItems.push(item);
			$('#myList').append('<li class="item">' + item.toUpperCase() + '</li>');
			$('#myImp').val('');
			console.log(allItems);
			console.log("You just added " + item.toUpperCase() + " to this list. Dis gon' be bananas.")
		};
	}

	var crossOut = function() {
		$('#myList').on('click', '.item', function(){
			$(this).toggleClass('checkedOff');
		})
	}

	var clearAll = function() {
		$("#clearList").on('click', function() {
			$(".item").remove();
			console.log("Items removed? Dis just got bananas.")
		})
	}

	// EVENTS
	$('#itemBtn').click(addItem)

	$(document).keydown(function(key) {
		if (key.keyCode == 13) {
			addItem();
		}
	})

	$('#groceriesSteak').mouseenter(function(){
		$('#captionForSteak').fadeIn(120);
	})
	$('#groceriesSteak').mouseleave(function(){
		$('#captionForSteak').fadeOut(120);
	})

	$('#groceriesAsparagus').mouseenter(function(){
		$('#captionForAsparagus').fadeIn(120);
	})
	$('#groceriesAsparagus').mouseleave(function(){
		$('#captionForAsparagus').fadeOut(120);
	})

	$('#groceriesRice').mouseenter(function(){
		$('#captionForRice').fadeIn(120);
	})
	$('#groceriesRice').mouseleave(function(){
		$('#captionForRice').fadeOut(120);
	})

	crossOut();

	clearAll();


})