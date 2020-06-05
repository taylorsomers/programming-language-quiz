$(document).ready(function() {
  $("button").click(function(event) {
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();

    if (question1 === "null" || question2 === "null" || question3 === "null" || question4 === "null" || question5 === "null") {
      alert("Please answer all the questions. Seriously, it's not that long of a quiz.");
    } else if (question3 != "other") {
      $("#c").hide();
      $("#javascript").hide();
      $("#python").hide();
      $("#no").show();
    } else {
      $("#c").hide();
      $("#no").hide();
      $("#python").hide();
      $("#javascript").show();
    }

  event.preventDefault();
  
  });

});