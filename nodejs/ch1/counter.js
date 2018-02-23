// Load node events module and point directly to EventEmitter
const EventEmitter = require('events').EventEmitter;
// console.log(EventEmitter);

// Define our Counter function
const Counter = function(i) {
	this.increment = function() {
		i++;
		this.emit('incremented', i);
	}
}

// Base our Counter on Nodes EventEmitter
Counter.prototype = new EventEmitter();

// lets see hem in action
const counter = new Counter(10);
// Define a callback function which logs the number n you give it
const callback = function(n){
	console.log(n);
}

// Counter is an EventEmitter, so it comes with addListener
counter.addListener('incremented', callback);
counter.increment(); // 11
counter.increment(); // 12