var numSquares = 6;
var colors =[];
var squares = document.querySelectorAll(".square");
var pickedColor; 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	// mode buttons event listeners.
    for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
   } 
   for(var i = 0; i < squares.length; i++){
	// add click listeners to squaress
	squares[i].addEventListener("click", function(){
    // grab color of clicked sqaure
        var clickedColor = this.style.background;
 
        if(clickedColor === pickedColor) {
   	       messageDisplay.textContent = "Correct!";
   	       resetButton.textContent = "play again";
   	       changeColors(clickedColor);
   	       h1.style.background = clickedColor;
           } else {
   	         this.style.background = "#232323";
   	         messageDisplay.textContent = "Try again";
   }

	});
}
reset();
 }
   function reset(){
    colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	// change colordispaly to match color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
	// change colors of square
    for(var i = 0; i < squares.length; i++){
    	if(colors[i]){
    		squares[i].style.display = "block";
    		squares[i].style.background = colors[i];
         } else {
         	squares[i].style.background = "none";
         }
    	}
      h1.style.background = "steelblue";
 }





resetButton.addEventListener("click", function(){
	// generate all new color
	reset();
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add click listeners to squaress
	squares[i].addEventListener("click", function(){
    // grab color of clicked sqaure
        var clickedColor = this.style.background;
 
        if(clickedColor === pickedColor) {
   	       messageDisplay.textContent = "Correct!";
   	       resetButton.textContent = "play again";
   	       changeColors(clickedColor);
   	       h1.style.background = clickedColor;
           } else {
   	         this.style.background = "#232323";
   	         messageDisplay.textContent = "Try again";
   }

	});
}


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		//chanhe each color 
		squares[i].style.background = color;
	}
}

  function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
// make an array
var arr = []
// return num random araay
for( var i = 0; i < num; i++){
	// add random color
   arr.push(randomColor())
  	//get random color and push into arr
}
// return that array
   return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// oick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}