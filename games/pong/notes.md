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

## Circle Draw Details

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
			var ballX = 0;
			var ballSpeedX = 5;

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
				
				// ball
				colorCircleTemplate(ballX, 150, 10, 'white');
			}

			function moveEverything(){
				ballX = ballX + ballSpeedX;
				if (ballX >= canvas.width) {
					ballSpeedX = -ballSpeedX;
				}
				if (ballX <= 0) {
					ballSpeedX = -ballSpeedX;
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

## Paddle AI and Scoring

> pong.js

	var canvas;
	var canvasContext;
	var ballX = 50;
	var ballY = 50;
	var ballSpeedX = 10;
	var ballSpeedY = 4;

	// scores
	var player1Score = 0;
	var player2Score = 0;

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
		// Playing Field
		colorRectTemplate(0,0,canvas.width, canvas.height, 'black');

		// Paddle 1 (Left)
		colorRectTemplate(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		// Paddle 2 (Right)
		colorRectTemplate(canvas.width - PADDLE_THICKNESS , paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		 // Ball
		colorCircleTemplate(ballX, ballY, 10, 'white');

		// scores (Inherits the last fill color (white))
		canvasContext.fillText(player1Score, 100, 100);
		canvasContext.fillText(player2Score, canvas.width - 100, 100);
	}

	function moveEverything(){

		// Update the AI Movement
		computerMovement();

		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;

		if (ballX >= canvas.width) {
			// Bounce the ball if it gets blocked by right paddle
			if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
				// change its direction
				ballSpeedX = -ballSpeedX;
			} else {
				// give player1 a point
				player1Score = player1Score + 1;
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
				// give player2 a point
				player2Score = player2Score + 1;
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

	// give the AI Ability to automaticlly move
	function computerMovement(){
		// calculate the center of the paddle
		var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
		// if the right paddle is above the ball
		if (paddle2YCenter < ballY) {
			// move the paddle down a bit
			paddle2Y = paddle2Y + 5;
		} else {
			// move the paddle up a bit
			paddle2Y = paddle2Y - 5;
		}
	}

## Ball Control and Winning

> pong.js

	var canvas;
	var canvasContext;
	var ballX = 50;
	var ballY = 50;
	var ballSpeedX = 10;
	var ballSpeedY = 4;

	// scores
	var player1Score = 0;
	var player2Score = 0;
	const winningScore = 3;

	var showWinScreen = false;

	// paddle 1 Y axis position
	var paddle1Y = 250;
	var paddle2Y = 250;
	const PADDLE_HEIGHT = 100;
	const PADDLE_THICKNESS = 10;

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
		// Playing Field
		colorRectTemplate(0,0,canvas.width, canvas.height, 'black');

		// show this text id a player has won
		if (showWinScreen) {
			canvasContext.fillStyle = 'white';
			canvasContext.fillText("Click to Continue", 100, 100);
			return;
		}

		// Paddle 1 (Left)
		colorRectTemplate(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		// Paddle 2 (Right)
		colorRectTemplate(canvas.width - PADDLE_THICKNESS , paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		 // Ball
		colorCircleTemplate(ballX, ballY, 10, 'white');

		// scores (Inherits the last fill color (white))
		canvasContext.fillText(player1Score, 100, 100);
		canvasContext.fillText(player2Score, canvas.width - 100, 100);
	}

	function moveEverything(){
		// enable winScreen
		if (showWinScreen) {
			return;
		}
		computerMovement();

		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;

		if (ballX < 0) {
			if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
				ballSpeedX = -ballSpeedX;
				// allow randomness based on where the ball hits the paddle
				var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
				ballSpeedY = deltaY * 0.35;
			} else {
				player2Score = player2Score + 1; // must be Before ballreset()
				ballReset();
			}
		}
		if (ballX >= canvas.width) {
			if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
				ballSpeedX = -ballSpeedX;
				// allow randomness based on where the ball hits the paddle
				var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
				ballSpeedY = deltaY * 0.35;
			} else {
				player1Score = player1Score + 1; // must be Before ballreset()
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
		// check for a winner
		if (player1Score >= winningScore || player2Score >= winningScore) {
			// restart the scores
			player1Score = 0;
			player2Score = 0
			// enable win screen
			showWinScreen = true;
		}
		// flip the direction the ball is going when its reset
		ballSpeedX = -ballSpeedX;
		// start the ball at the center of the canvas
		ballX = canvas.width / 2;
		ballY = canvas.width / 2;
	}

	// give the AI Ability to automaticlly move
	function computerMovement(){
		// calculate the center of the paddle
		var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
		// if the right paddle is above the ball
		if (paddle2YCenter < ballY) {
			// move the paddle down a bit
			paddle2Y = paddle2Y + 5;
		} else {
			// move the paddle up a bit
			paddle2Y = paddle2Y - 5;
		}
	}

## Mouse Click

> pong.js

	var canvas;
	var canvasContext;
	var ballX = 50;
	var ballY = 50;
	var ballSpeedX = 10;
	var ballSpeedY = 4;

	// scores
	var player1Score = 0;
	var player2Score = 0;
	const winningScore = 10;

	var showWinScreen = false;

	// paddle 1 Y axis position
	var paddle1Y = 250;
	var paddle2Y = 250;
	const PADDLE_HEIGHT = 100;
	const PADDLE_THICKNESS = 10;

	window.onload = function(){
		canvas = document.getElementById('gameCanvas');
		canvasContext = canvas.getContext('2d');
		var framesPerSecond = 30;

		setInterval(() => {
			drawEverything();
			moveEverything();
			
		}, 1000 / framesPerSecond);

		// enable mouse click on win
		canvas.addEventListener('mousedown', handleMouseClick);

		// enable vertical mouse input control
		canvas.addEventListener('mousemove', (e) => {
		  var mousePos = calculateMousePosition(e);
		  paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2); // make the mouse move at the center of the paddle
		});

	};

	function drawEverything() {
		// Playing Field
		colorRectTemplate(0,0,canvas.width, canvas.height, 'black');

		// show this text id a player has won
		if (showWinScreen) {
			canvasContext.fillStyle = 'white';
			// show who won
			if (player1Score >= winningScore){
				canvasContext.fillText("Left Player Won!", 350, 200);
			} else if (player2Score >= winningScore) {
				canvasContext.fillText("Right Player Won!", 350, 200);
			}
			
			canvasContext.fillText("Click to Restart The Game", 350, 300);
			return;
		}

		// Paddle 1 (Left)
		colorRectTemplate(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		// Paddle 2 (Right)
		colorRectTemplate(canvas.width - PADDLE_THICKNESS , paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
		 // Ball
		colorCircleTemplate(ballX, ballY, 10, 'white');

		// scores (Inherits the last fill color (white))
		canvasContext.fillText(player1Score, 100, 100);
		canvasContext.fillText(player2Score, canvas.width - 100, 100);
	}

	function moveEverything(){
		// enable winScreen
		if (showWinScreen) {
			return;
		}
		computerMovement();

		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;

		if (ballX < 0) {
			if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
				ballSpeedX = -ballSpeedX;
				// allow randomness based on where the ball hits the paddle
				var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
				ballSpeedY = deltaY * 0.35;
			} else {
				player2Score = player2Score + 1; // must be Before ballreset()
				ballReset();
			}
		}
		if (ballX >= canvas.width) {
			if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
				ballSpeedX = -ballSpeedX;
				// allow randomness based on where the ball hits the paddle
				var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
				ballSpeedY = deltaY * 0.35;
			} else {
				player1Score = player1Score + 1; // must be Before ballreset()
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
		// check for a winner
		if (player1Score >= winningScore || player2Score >= winningScore) {
			// enable win screen
			showWinScreen = true;
		}
		// flip the direction the ball is going when its reset
		ballSpeedX = -ballSpeedX;
		// start the ball at the center of the canvas
		ballX = canvas.width / 2;
		ballY = canvas.width / 2;
	}

	// give the AI Ability to automaticlly move
	function computerMovement(){
		// calculate the center of the paddle
		var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
		// if the right paddle is above the ball
		if (paddle2YCenter < ballY) {
			// move the paddle down a bit
			paddle2Y = paddle2Y + 5;
		} else {
			// move the paddle up a bit
			paddle2Y = paddle2Y - 5;
		}
	}

	function handleMouseClick (evt) {
		if (showWinScreen) {
			player2Score = 0;
			player1Score = 0;
			showWinScreen = false;
		}
	}