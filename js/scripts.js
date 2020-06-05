$(document).ready(function() {
  $("button").click(function(event) {
    const question1 = $("select#question1").val();

    if (question1 === "yes") {
      $("#python").hide();
      $("#javascript").hide();
      $("#c").show();
    } else {
      $("#c").hide();
      $("#python").hide();
      $("#javascript").show();
    }

  event.preventDefault();
  
  });

});