window.onload = function (){
	SetbgImg();
	setpos();
	movepiece();
}

function SetbgImg(){
	var x = document.getElementById("puzzlearea").style.background= "url('background.jpg')";
}
var klam = [];
function setpos(){ //Set position of puzzle in solved state 
	var klam = $("#puzzlearea div");
	$("#puzzlearea div").addClass("puzzlepiece");
	var x = 0;
	var q = 0;
	for (var i = 0; i < 15; i++){
		if (i < 4 ){
				x = 0;
			}
				else if(i > 3 && i < 8){
					x = 1;
				}
					else if(i > 7 && i < 12){
								x = 2;
					}
						else	{
									x = 3;
								}
			klam[i].style.top = 100 * x + "px";
			klam[i].style.left = 100 * q + "px";
			klam[i].style.backgroundPosition = q * -100 + "px " + -x * 100 + "px";
			q++;
			if (q == 4){
				q = 0;
			}
		}
	}
function movepiece(){ // set animation to puzzle pieces
	var klam = $("#puzzlearea div");
	$("#puzzlearea div").addClass("puzzlepiece");
	var emptyTop=300;
	var emptyLeft=300;
	for (var i = 0; i < 15; i++){ // set puzzle pieces to behave correctly 
		klam[i].addEventListener('click',function(){
			var selectedTileTop=parseInt(this.style.top);
			var selectedTileLeft=parseInt(this.style.left);
			var tempT=emptyTop;
			var tempL=emptyLeft;
			if (selectedTileTop == tempT - 100 && selectedTileLeft == tempL || selectedTileTop == tempT  + 100 && selectedTileLeft == tempL ||  selectedTileTop == tempT  && selectedTileLeft == tempL -100 ||  selectedTileTop == tempT  && selectedTileLeft == tempL + 100 ){
			emptyTop=selectedTileTop;
			emptyLeft=selectedTileLeft;
			this.style.top = tempT +'px';
			this.style.left = tempL +'px';
			}
		});	
			klam[i].addEventListener('mouseover', function(){ // set hover property 
			var selectedTileTop=parseInt(this.style.top);
			var selectedTileLeft=parseInt(this.style.left);
			var tempT=emptyTop;
			var tempL=emptyLeft;
			if (selectedTileTop == tempT - 100 && selectedTileLeft == tempL || selectedTileTop == tempT  + 100 && selectedTileLeft == tempL ||  selectedTileTop == tempT  && selectedTileLeft == tempL -100 ||  selectedTileTop == tempT  && selectedTileLeft == tempL + 100 ){
				$(this).addClass("movablepiece");
			}
			else {
				$(this).removeClass("movablepiece");
			}

	}); 
}
		document.getElementById("shufflebutton").addEventListener("click", function shuffle(){ // shuffle puzzle pieces in a random order
			var x = Math.floor(Math.random() * 25);
				for (var i = 0; i < x; i++){
					for (var y = 14; y > 0; y--){
						var top = parseInt(klam[y].style.top);
						var left = parseInt(klam[y].style.left);
						var tempT = emptyTop;
						var tempL = emptyLeft;
						if (top == tempT - 100 && left == tempL || top == tempT  + 100 && left == tempL ||  top == tempT  && left == tempL -100 ||  top == tempT  && left == tempL + 100 ){
							emptyTop=top;
							emptyLeft=left;
							klam[y].style.top = tempT + 'px';
							klam[y].style.left = tempL + 'px';
						}
					}
				
				}				
			return x;});	
}
function endofGame(){
	var end = shuffle();
	if (end > 0){
		
	}
}

