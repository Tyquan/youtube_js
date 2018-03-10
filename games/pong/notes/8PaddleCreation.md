## Oficial Paddle Creation With Mouse Input

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

			// paddle 1 Y axis position
			var paddle1Y = 250;
			const PADDLE_HEIGHT = 100;

			// CALCULATE THE MOUSE POSION
			function calculateMousePosition(evt) {
				var rect = canvas.getBoundingClientRect();
				var root = document.documentElement;
				// calculate the mouse X axis position
				var mouseX = evt.clientX - rect.left - root.scrollLeft;
				// calculate the mouse Y axis position
				var mouseY = evt.clientY - rect.top - root.scrollTop;
				return {
					x: mouseX,
					y: mouseY
				};
			}

			window.onload = function(){
				canvas = document.getElementById('gameCanvas');
				canvasContext = canvas.getContext('2d');

				var framesPerSecond = 30;
				setInterval(() => {
					drawEverything();
					moveEverything();
					
				}, 1000 / framesPerSecond);

				// enable vertical mouse input control
				canvas.addEventListener('mousemove', (e) => {
				  var mousePos = calculateMousePosition(e);
				  paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2); // make the mouse move at the center of the paddle
				});

			};

			function drawEverything() {
				colorRectTemplate(0,0,canvas.width, canvas.height, 'black');
				// Paddle 1
				colorRectTemplate(0,paddle1Y,10, PADDLE_HEIGHT, 'white');
				colorCircleTemplate(ballX, ballY, 10, 'white');
			}

			function moveEverything(){
				ballX = ballX + ballSpeedX;
				ballY = ballY + ballSpeedY;

				if (ballX >= canvas.width) {
					ballSpeedX = -ballSpeedX;
				}
				if (ballX <= 0) {
					ballSpeedX = -ballSpeedX;
				}
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
			function colorCircleTemplate(centerX, centerY, radius, drawColor){
				canvasContext.fillStyle = drawColor;
				canvasContext.beginPath();
				canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
				canvasContext.fill();
			}
		</script>
	</body>
	</html>