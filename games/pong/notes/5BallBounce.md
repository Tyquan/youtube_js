## Bouncing The Ball

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
			var boxX = 0;
			var boxSpeedX = 5;

			window.onload = function(){
				canvas = document.getElementById('gameCanvas');
				canvasContext = canvas.getContext('2d');

				var framesPerSecond = 30;
				setInterval(() => {
					moveEverything();
					drawEverything();
				}, 1000 / framesPerSecond);

			};

			function drawEverything() {
				// background
				colorRectTemplate(0,0,canvas.width, canvas.height, 'black');
				
				// Paddle 1
				colorRectTemplate(0,100,10, 100, 'white');
				
				// Box
				colorRectTemplate(boxX,20,40, 40, 'red');
			}

			function moveEverything(){
				boxX = boxX + boxSpeedX;
				// if the box hits the end of the canvas
				if (boxX >= canvas.width) {
					// flip its direction
					boxSpeedX = -boxSpeedX;
				}

				// if the box hits the start of the canvas
				if (boxX <= 0) {
					// flip its direction
					boxSpeedX = -boxSpeedX;
				}
			}

			// Creating Rectangles Easily
			function colorRectTemplate(leftX, topY, width, height, drawColor){
				canvasContext.fillStyle = drawColor;
				canvasContext.fillRect(leftX, topY, width, height);
			}
		</script>
	</body>
	</html>