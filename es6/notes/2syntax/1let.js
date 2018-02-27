/*
	Variable scoping with let
*/
var a = "Hello";
console.log("var keyword:", a);

let b = "Hello";
console.log("let keyword:", b);


// Blocked Scope (stand alone)
{
	let b = "Goodbye";
	console.log("b inside scope:",b);
	let salary = 90000;
}

// scope protects the variable from getting called outside the blocked scope
console.log(salary); // undefined


// Example

function run() {
    let b = 2;
    console.log(b);
    {
        // TODO replace this line with code
        let b = 3;
        console.log(b);
    }
}

run();