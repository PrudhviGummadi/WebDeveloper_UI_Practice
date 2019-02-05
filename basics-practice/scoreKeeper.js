var p1Score=0;
var p2Score=0;
var finalScore=5;
var p1Button=document.querySelector("#p1Button");
var p2Button=document.querySelector("#p2Button");
var reset=document.querySelector("#reset");
var p1Display=document.getElementById('p1Display');
var p2Display=document.getElementById('p2Display');
var targetScoreDisplay=document.querySelector("p span");
var numInput=document.querySelector("input[type=number]");
var gameOver=false;


p1Button.addEventListener("click",function(){
	
	if(!gameOver){
			p1Score++;
			p1Display.textContent=p1Score;
		if(p1Score>=finalScore){
			gameOver=true;
			p1Display.style.color="green";
		}
	}
	

});

p2Button.addEventListener("click",function(){
	
	if(!gameOver){
		p2Score++;
		p2Display.textContent=p2Score;
		if(p2Score>=finalScore){
			gameOver=true;
			p2Display.style.color="green";
		}
	}
	
});

reset.addEventListener("click",function(){
	gameOver=false;
	p1Display.style.color="black";
	p2Display.style.color="black";
	p2Display.textContent=0;
	p1Display.textContent=0;
	p1Score=0;
	p2Score=0;
	finalScore=5;
});

numInput.addEventListener("change",function(){
	finalScore=Number(this.value);
	targetScoreDisplay.textContent=finalScore;
});