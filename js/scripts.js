$(document).ready(function() {
  $("button").click(function(event) {
    let question1 = $("select#question1").val();
    let question2 = $("select#question2").val();
    let question3 = $("select#question3").val();
    let question4 = $("select#question4").val();
    let question5 = $("select#question5").val();
    let question6 = $("select#question6").val();
    let question7 = $("select#question7").val();

    if (question1 === "null" || question2 === "null" || question3 === "null" || question4 === "null" || question5 === "null" || question6 === "null" || question7 === "null") { 
      $("#c").hide();
      $("#javascript").hide();
      $("#no").hide();
      $("python").hide();
      alert("Please answer all the questions. Seriously, it's not that long of a quiz.");
    } else if (question2 != "ketchup-no" || question4 != "other" || question6 === "hate") {
      $("#c").hide();
      $("#javascript").hide();
      $("#python").hide();
      $("#no").fadeIn();
    } else if (((question1 === "back-end") && ((question3 === "procedural") || (question5 === "science"))) || ((question3 === "procedural") && (question5 === "science"))) {
      $("#c").hide();
      $("#javascript").hide();
      $("#no").hide();
      $("#python").fadeIn();
    } else if (question7 === "games") {
      $("#javascript").hide();
      $("#no").hide();
      $("#python").hide();
      $("#c").fadeIn();
    } else {
      $("#c").hide();
      $("#no").hide();
      $("#python").hide();
      $("#javascript").fadeIn();
    }

  event.preventDefault();
  
  });

});