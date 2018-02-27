/*
	The .map(); method

	Create new arrays on each element of an array
*/

let points = [10,20,30];

let addOne = (element) => {
	return element + 1;
}

let newPoints = points.map(addOne);
console.log(newPoints);

// Example 2

let grades = [80, 75, 66, 76, 95];
let newGrades = grades.map((grade) => {
	// what do we want to do with each grade?
	return grade + 5;
});

console.log(newGrades);