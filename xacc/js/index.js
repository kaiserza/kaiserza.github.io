$( document ).ready(function() {
    console.log( "ready!" );

    var $form = $("form#preorder"), 
	url = "https://script.google.com/macros/s/AKfycbxDHApgvTu_0Ixvz2ynJDYM9LvJPGdBloC6JX1qykBiOzji4pYQ/exec"

	$('#submit-form').on('click', function(e) {
		e.preventDefault();
		var jqxhr = $.ajax({
		    url: url,
		    method: "GET",
		    dataType: "json",
		    data: $form.serializeObject(),
		    success: function(){
		    	console.log("success");
		    }
		});
	})

});


