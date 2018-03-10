## Moving The Ball Vertically

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
			var ballX = 50;
			var ballY = 50;
			var ballSpeedX = 10;
			var ballSpeedY = 4;

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
				colorRectTemplate(0,0,canvas.width, canvas.height, 'black');
				
				colorRectTemplate(0,100,10, 100, 'white');
				
				// replace hardcoded Y axis position with ballY
				colorCircleTemplate(ballX, ballY, 10, 'white');
			}

			function moveEverything(){
				ballX = ballX + ballSpeedX;
				// update the balls Y axis Position
				ballY = ballY + ballSpeedY;

				if (ballX >= canvas.width) {
					ballSpeedX = -ballSpeedX;
				}
				if (ballX <= 0) {
					ballSpeedX = -ballSpeedX;
				}

				// Move Vertically
				if (ballY >= canvas.height) {
					ballSpeedY = -ballSpeedY;
				}
				if (ballY <= 0) {
					ballSpeedY = -ballSpeedY;
				}
			}
			
			function colorRectTemplate(leftX, topY, width, height, drawColor){
				canvasContext.fillStyle = drawColor;
				canvasContext.fillRect(leftX, topY, width, height);
			}
			// Creating Circles Easily Template
			function colorCircleTemplate(centerX, centerY, radius, drawColor){
				canvasContext.fillStyle = drawColor;
				canvasContext.beginPath();
				canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
				canvasContext.fill();
			}
		</script>
	</body>
	</html>