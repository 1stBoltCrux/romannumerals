function romanize3(number){
  for (var i = 2; i < 3; i++) {
    var number3 = number[2]
    console.log(number);
    if (number3 === "1"){
      return "C";
    } else if (number3 === "2"){
      return "CC";
    } else if (number3 === "3"){
      return "CCC";
    } else if (number3 === "4"){
      return "CD";
    } else if (number3 === "5"){
      return "D";
    } else if (number3 === "6"){
      return "DC";
    } else if (number3 === "7"){
      return "DCC";
    } else if (number3 === "8"){
      return "DCCC";
    } else if (number3 === "9"){
      return "CM";
    } else {

    }
  }
}
function romanize2(number){
  for (var i = 1; i < 2; i++) {
    var number2 = number[1]
    console.log(number);
    if (number2 === "1"){
      return "X";
    } else if (number2 === "2"){
      return "XX";
    } else if (number2 === "3"){
      return "XXX";
    } else if (number2 === "4"){
      return "XL";
    } else if (number2 === "5"){
      return "L";
    } else if (number2 === "6"){
      return "LX";
    } else if (number2 === "7"){
      return "LXX";
    } else if (number2 === "8"){
      return "LXXX";
    } else if (number2 === "9"){
      return "XC";
    } else {

    }
  }
}
function romanize(number){
  for (var i = 0; i < 1; i++) {
    var number = number[0]
    console.log(number);
    if (number === "1"){
      return "I";
    } else if (number === "2"){
      return "II";
    } else if (number === "3"){
      return "III";
    } else if (number === "4"){
      return "IV";
    } else if (number === "5"){
      return "V";
    } else if (number === "6"){
      return "VI";
    } else if (number === "7"){
      return "VII";
    } else if (number === "8"){
      return "VIII";
    } else if (number === "9"){
      return "IX";
    } else {
      return "zero doesn't exist in rome";
    }
  }
}


// function romanize2(number){
//   for (var i = 1; i < 2; i++) {
//     var number2 = number[1]
//     console.log(number);
//     if (number2 === "1"){
//       return "X";
//     } else if (number2 === "2"){
//       return "XX";
//     } else if (number2 === "3"){
//       return "XXX";
//     } else if (number2 === "4"){
//       return "XL";
//     } else if (number2 === "5"){
//       return "L";
//     } else if (number2 === "6"){
//       return "LX";
//     } else if (number2 === "7"){
//       return "LXX";
//     } else if (number2 === "8"){
//       return "LXXX";
//     } else if (number2 === "9"){
//       return "XC";
//     } else {
//
//     }
//   }
// }




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var inputSplit = input.split("");
    var reverseInput =inputSplit.reverse();
    console.log(inputSplit);
    var output = romanize3(reverseInput) + romanize2(reverseInput) + romanize(reverseInput);
    $(".output").append(output);
  });
});
