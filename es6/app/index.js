// let isPassing = (grade) => {
// 	return grade >= 70
// };

// let scores = [90, 85, 67, 71, 70, 55, 92];

// let passing = scores.filter(isPassing);
// console.log(passing);

let scores = [90, 85, 67, 71, 70, 55, 92];

let passing = scores.filter(element => element >= 70);
console.log(passing);