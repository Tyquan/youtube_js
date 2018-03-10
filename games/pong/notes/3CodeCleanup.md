## Code Cleanup

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
			var boxX = 0;

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
				canvasContext.fillStyle = 'black';
				canvasContext.fillRect(0, 0, canvas.width, canvas.height);
				//Paddle 1
				canvasContext.fillStyle = 'white';
				canvasContext.fillRect(0, 100, 10, 100);
				// Ball
				canvasContext.fillStyle = 'red';
				canvasContext.fillRect(boxX, 20, 40, 40);
			}
			function moveEverything(){
				boxX = boxX + 10;
			}
		</script>
	</body>
	</html>