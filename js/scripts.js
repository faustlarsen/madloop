$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let arrays = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    arrays.forEach(function(array) {
    let result = $("input#" + array).val();
    $("." + array).text(result);
  }); 
    $("#story").show();
    event.preventDefault();
  });
});





