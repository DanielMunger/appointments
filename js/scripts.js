$(document).ready(function(){
  $("form#name").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    $("#output-name").text(name1);
  });
  $("form#date").submit(function(event){
    event.preventDefault();
    var date1 = $("#date1").val();
    $("#output-date").text(date1);
  });
  $("form#start-time").submit(function(event){
    event.preventDefault();
    var start = $("#start").val();
    $("#output-start").text(start);
  });
  $("form#end-time").submit(function(event){
    event.preventDefault();
    var end = $("#end").val();
    $("#output-end").text(end);
    alert("You have successfully made an appointment with me!")
  });
});
