$( function(){ // In $() gewrappte Funktionen werden nach dem laden der DOM ausgeführt.
  $("#load_text_button").on("click", function(event) {
    $("#ajax-target").load("text.html");  
  });
});
