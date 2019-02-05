var colors=generateRandomColors(6);

var pickedColor=pickColor();
var num;
var divList=document.getElementsByClassName("square");
var pickedColorDisplayMsg=document.getElementById("pickedColorDisplay");
var result=document.querySelector("#resultMsg");
var newColors=document.getElementById("newColors");
var h1=document.querySelector("h1");
var gameOver=false;
pickedColorDisplayMsg.textContent=pickedColor;
pickedColorDisplayMsg.style.textTransform="uppercase";

// new colors
newColors.addEventListener("click", generateNewColors);


for(var i=0;i<divList.length;i++){
	divList[i].style.backgroundColor=colors[i];

	divList[i].addEventListener("click",function(){ 
		if(this.style.backgroundColor===pickedColor){
			result.textContent="Correct";
			gameOver=true;
			changeColors();
			newColors.textContent="Play Again?"
		}else{
			this.style.backgroundColor="#232323";
			result.textContent="Try Again";
		}
	});
}

function changeColors(){
	for(var i=0; i<divList.length;i++){
		divList[i].style.backgroundColor=pickedColor;
	}
	h1.style.backgroundColor=pickedColor;
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(numOfColors){
	var arr=[];

	for(var i=0;i<numOfColors;i++){
		arr.push(randomColor());
	}

	return arr;
}

function generateNewColors(){
	if(gameOver===true){
		newColors.textContent="New Colors";
	}
	gameOver=false;
	result.textContent="";
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	for(var i=0;i<divList.length;i++){
		divList[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#232323";
	pickedColorDisplayMsg.textContent=pickedColor;
	pickedColorDisplayMsg.style.textTransform="uppercase";
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}