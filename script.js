function calculate() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
  
    if (!isNaN(side1) && !isNaN(side2)) {
      var hypotenuse = pythagoras(side1, side2);
      drawTriangle(side1, side2, hypotenuse); // Draw the triangle first
      document.getElementById("result").innerText = "The length of the hypotenuse is: " + hypotenuse.toFixed(2);
    } else {
      document.getElementById("result").innerText = "Please enter valid numbers for both sides.";
    }
  }
  
  function pythagoras(a, b) {
    // Calculate the length of the hypotenuse of a right triangle
    // using the Pythagorean theorem
    return Math.sqrt(a ** 2 + b ** 2);
  }

  function drawTriangle(a, b, c) {
    var canvas = document.getElementById("triangleCanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(50, canvas.height - 50 - b * 10);
    ctx.lineTo(50 + a * 10, canvas.height - 50);
    ctx.closePath();
    
    ctx.stroke();
  
    // Display side lengths (rounded to integers)
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(Math.floor(a), 50 + a * 5 - 10, canvas.height - 30);
    ctx.fillText(Math.floor(b), 30, canvas.height - 50 - b * 5 + 5);
  
    // Calculate midpoint of hypotenuse
    var hypotenuseMidX = (50 + (50 + a * 10)) / 2;
    var hypotenuseMidY = (canvas.height - 50 + (canvas.height - 50 - b * 10)) / 2;
  
    // Display hypotenuse (rounded to integer)
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(50 + a * 10, canvas.height - 50);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillText(Math.floor(c), hypotenuseMidX, hypotenuseMidY);
  }
  

  