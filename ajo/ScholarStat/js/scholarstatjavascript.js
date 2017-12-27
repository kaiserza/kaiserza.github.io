var $form = $('form#scholarstat-register'),
    url = 'https://script.google.com/macros/s/AKfycbwuzIJAlVYOcyA3mom0BRVJ0mXJ-Jq6p4ByGEdWMvQvDEdNAnVZ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function(){
    }
    // do something
  });
})