$(document).ready(function() {
	$(".put-form").on("submit", function(e){
		e.preventDefault();
		var teamUrl = $(this).attr("action");
		var teamData = $(this).serialize();

		$.ajax({
			method: "PUT",
			url: teamUrl,
			data: teamData
		}).done(function(data){
			alert("team edited!");
			window.location = "/teams";
		});
	}); //end put form



	$(".delete-link").on("click", function(e){
		e.preventDefault();
		var teamUrl = $(this).attr("href");

		$.ajax({
			method: "DELETE",
			url: teamUrl
		}).done(function(data){
			alert("Sad to see you go! :(");
			window.location = "/teams";
		}); //end ajax function
	}); //end delete link




});
