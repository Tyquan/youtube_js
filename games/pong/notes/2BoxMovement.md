## Create a box and make it move

> index.html

	<!DOCTYPE html>
	<html>
	<head>
		<title>T.R - PONG</title>
	</head>
	<body>
		<canvas id="gameCanvas" width="800" height="600"></canvas>
		<script type="text/javascript">
			var canvas;
			var canvasContext;
			// ball x position
			var boxX = 50;

			window.onload = function(){
				canvas = document.getElementById('gameCanvas');
				canvasContext = canvas.getContext('2d');

				// make the box move
				setInterval(moveBox, 1000)

			};
			function moveBox(){

				boxX = boxX + 50;
				// you have to redraw the background on every frame
				canvasContext.fillStyle = 'black';
				canvasContext.fillRect(0, 0, canvas.width, canvas.height);
				canvasContext.fillStyle = 'red';
				canvasContext.fillRect(boxX, 20, 40, 40);
			}
		</script>
	</body>
	</html>