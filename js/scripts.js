var garbageArray = [];
function romanize4(number){
  for (var i = 3; i < 4; i++) {
    var number4 = number[3]
     if (number4 === "1"){
        garbageArray.push("M");
      } else if (number4 === "2"){
        garbageArray.push("MM");
      } else if (number4 === "3"){
        garbageArray.push("MMM");
      } else {

      }
    }
  }
function romanize3(number){
  for (var i = 2; i < 3; i++) {
    var number3 = number[2]
    if (number3 === "1"){
      garbageArray.push("C");
    } else if (number3 === "2"){
      garbageArray.push("CC");
    } else if (number3 === "3"){
      garbageArray.push("CCC");
    } else if (number3 === "4"){
      garbageArray.push("CD");
    } else if (number3 === "5"){
      garbageArray.push("D");
    } else if (number3 === "6"){
      garbageArray.push("DC");
    } else if (number3 === "7"){
      garbageArray.push("DCC");
    } else if (number3 === "8"){
      garbageArray.push("DCCC");
    } else if (number3 === "9"){
      garbageArray.push ("CM");
    } else {

    }
  }
}
function romanize2(number){
  for (var i = 1; i < 2; i++) {
    var number2 = number[1]
    if (number2 === "1"){
      garbageArray.push("X");
    } else if (number2 === "2"){
      garbageArray.push("XX");
    } else if (number2 === "3"){
      garbageArray.push("XXX");
    } else if (number2 === "4"){
      garbageArray.push("XL");
    } else if (number2 === "5"){
      garbageArray.push("L");
    } else if (number2 === "6"){
      garbageArray.push("LX");
    } else if (number2 === "7"){
      garbageArray.push("LXX");
    } else if (number2 === "8"){
      garbageArray.push("LXXX");
    } else if (number2 === "9"){
      garbageArray.push("XC");
    } else {

    }
  }
}
function romanize(number){
  for (var i = 0; i < 1; i++) {
    var number = number[0]
    if (number === "1"){
      garbageArray.push("I");
    } else if (number === "2"){
      garbageArray.push("II");
    } else if (number === "3"){
      garbageArray.push("III");
    } else if (number === "4"){
      garbageArray.push("IV");
    } else if (number === "5"){
      garbageArray.push("V");
    } else if (number === "6"){
      garbageArray.push("VI");
    } else if (number === "7"){
      garbageArray.push("VII");
    } else if (number === "8"){
      garbageArray.push("VIII");
    } else if (number === "9"){
      garbageArray.push("IX");
    } else {

    }
  }
}
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    if (input > 3999) {
      alert("You can't do that!");
    } else {
    var inputSplit = input.split("");
    var reverseInput = inputSplit.reverse();
     romanize4(reverseInput);
     romanize3(reverseInput);
     romanize2(reverseInput);
     romanize(reverseInput);
    var garbageString = garbageArray.join("");
    $(".output").text(garbageString);
     garbageArray.splice(0, 4);
   }
  });
});
