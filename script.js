function checkSum(event) {
  event.preventDefault();

  var num1Input = document.getElementById('num1');
  var num2Input = document.getElementById('num2');
  var num3Input = document.getElementById('num3');
  var num4Input = document.getElementById('num4');
  var resultDiv = document.getElementById('result');

  var num1 = parseInt(num1Input.value, 10);
  var num2 = parseInt(num2Input.value, 10);
  var num3 = parseInt(num3Input.value, 10);
  var num4 = parseInt(num4Input.value, 10);

  var sum = num1 + num2 + num3 + num4;

  if (sum > 350) {
    document.getElementById("result").innerHTML= "true";
  } else {
    document.getElementById("result").innerHTML= "false";
  }
}