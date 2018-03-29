function romanize(number){
  if (number === 1){
    return "I";
  } else if (number === 2){
    return "II";
  } else if (number === 3){
    return "III";
  } else if (number === 4){
    return "IV";
  } else if (number === 5){
    return "V";
  } else if (number === 6){
    return "VI";
  } else if (number === 7){
    return "VII";
  } else if (number === 8){
    return "VIII";
  } else if (number === 9){
    return "IX";
  } else {
    return "zero doesn't exist in rome";
  }
}




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = romanize(input);
    $(".output").text(output);
  });
});
