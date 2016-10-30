var shuffule = 0; 
window.onload = function (){
	setpos();
	movepiece();
}

var klam = [];
var badboy=[];
function setpos(){ //Set position of puzzle in solved state 
	var klam = $("#puzzlearea div");
	$("#puzzlearea div").addClass("puzzlepiece");
	var x = 0;
	var q = 0;
	for (var i =0; i < 15; i++){
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
			endofGame(); // check if puzzle is solve
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
			$("body").css("background-color", "white");
			var x = Math.floor(Math.random() * 250);
			var t = 1;
				for (var i = 0; i < x; i++){
					for (var y = 0; y < 15; y++){
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
			});	
}
function endofGame(){ // determine if the puzzle is solved and display 
	var klam = $("#puzzlearea div");
	var x = 0;
	var q = 0;
	var won = 1;
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
		if (klam[i].style.top == 100 * x + "px" && klam[i].style.left == 100 * q + "px"){
			won++;
		}
			q++;
			if (q == 4){
				q = 0;
			}
	} if (won == 16){
			$("body").css("background-color", "blue");
	}
	else
	{$("body").css("background-color", "white");}
	}

