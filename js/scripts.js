$(document).ready(function() {
  $("button").click(function(event) {
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();

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