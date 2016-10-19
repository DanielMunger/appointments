$(document).ready(function(){
  $("form#name").submit(function(event){
    event.preventDefault();
    var name1 = $("#name1").val();
    alert(name1);
    $(".output").text(name1);
  });
});
