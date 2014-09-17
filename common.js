

var ctx;

function initCtx(canvas){
	if(canvas.getContext){
		ctx = canvas.getContext("2d");
	}else{
		alert('Your browser is not supporting HTML5!');
	}
}

function drawScene(){
	var cherry = new Cherry(ctx);
}


function canvasStart(){
	var canvas = document.getElementById("myCanvas");
	initCtx(canvas);
	drawScene();
}
