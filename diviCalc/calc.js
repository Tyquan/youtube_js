const amount = 2;
const divi = 5;
const stock = 5;

function getAmount(stockAmount, diviAmount, myAmount) {
	return (stockAmount * diviAmount) * myAmount;
}

console.log(getAmount(stock, divi, amount));