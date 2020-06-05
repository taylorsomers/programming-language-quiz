$(document).ready(function() {
  $("button").click(function(event) {
    const question1 = $("select#question1").val();

    if (question1 === "functions-only") {
      $("#javascript").hide();
      $("#no").hide();
      $("#python").hide();
      $("#c").show();
    } else {
      $("#c").hide();
      $("#no").hide();
      $("#python").hide();
      $("#javascript").show();
    }

  event.preventDefault();
  
  });

});