/*
	Arrow functions

	function(){...} vs () => {...}
	Arrow functions are anonymous

	Anonymous functions usually dont have a named identifier
*/

// named identifier
function blastOff(){
	console.log('3...');
}
blastOff();

// Anonymous function
setTimeout(function(){
	console.log('2...');
}, 3000);

// Arrow function
setTimeout(() => {
	console.log('1...');
}, 6000);

// Arrow function Example2
const blastOff2 = () => {
	console.log('Blast Off!!!!');
};
setTimeout(blastOff2, 9000);