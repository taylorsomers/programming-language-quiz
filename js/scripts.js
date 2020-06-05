$(document).ready(function() {
  $("button").click(function(event) {
    const question1 = $("select#question1").val();

    if (question1 === "yes") {
      $("#c").show();
    } else {
      $("#javascript").show;
    }

  event.preventDefault();
  
  });

});