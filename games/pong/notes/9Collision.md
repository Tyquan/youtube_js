## Paddle Reset and Collision

> pong.js

	var canvas;
	var canvasContext;
	var ballX = 50;
	var ballY = 50;
	var ballSpeedX = 10;
	var ballSpeedY = 4;

	// paddle 1 Y axis position
	var paddle1Y = 250;
	var paddle2Y = 250;
	const PADDLE_HEIGHT = 100;
	const PADDLE_THICKNESS = 20;

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
		// Paddle 1 (Left)
		colorRectTemplate(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		// Paddle 2 (Right)
		colorRectTemplate(canvas.width - PADDLE_THICKNESS , paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

		colorCircleTemplate(ballX, ballY, 10, 'white');
	}

	function moveEverything(){
		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;

		if (ballX >= canvas.width) {
			// Bounce the ball if it gets blocked by right paddle
			if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
				// change its direction
				ballSpeedX = -ballSpeedX;
			} else {
				// Make the ball reset when it touches the right side of the canvas
				ballReset();
			}
		}
		if (ballX < 0) {
			// Bounce the ball if it gets blocked by left paddle
			if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
				// change its direction
				ballSpeedX = -ballSpeedX;
			} else {
				// Make the ball reset when it touches the left side of the canvas
				ballReset();
			}
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
	// make the ball Reset
	function ballReset(){
		// flip the direction the ball is going when its reset
		ballSpeedX = -ballSpeedX;
		// start the ball at the center of the canvas
		ballX = canvas.width / 2;
		ballY = canvas.width / 2;
	}

> idex.html

	<!DOCTYPE html>
	<html>
	<head>
		<title>T.R - PONG</title>
	</head>
	<body>
		<canvas id="gameCanvas" width="800" height="600"></canvas>
		<script type="text/javascript" src="./pong.js"></script>
	</body>
	</html>