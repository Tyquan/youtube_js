# Playing with Canvas (Creating Pong)

## Basic Setup

> Create a canvas and and some rectangles

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

			window.onload = function(){
				canvas = document.getElementById('gameCanvas');
				canvasContext = canvas.getContext('2d');
				canvasContext.fillStyle = 'black';
				canvasContext.fillRect(0, 0, canvas.width, canvas.height);
				canvasContext.fillStyle = 'red';
				canvasContext.fillRect(100, 200, 50, 25);
				canvasContext.fillStyle = 'red';
				canvasContext.fillRect(30, 30, 25, 25);

				canvasContext.fillStyle = 'blue';
				canvasContext.fillRect(canvas.width / 2, canvas.height / 2, 25, 25);

			};
		</script>
	</body>
	</html>