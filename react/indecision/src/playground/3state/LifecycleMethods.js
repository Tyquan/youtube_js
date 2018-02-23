// Fires immediately
componentDidMount(){
	console.log('Fetching Data');
}
// fires after a state gets updated
componentDidUpdate(){
	console.log("Updating Data");
}

componentWillUnmount(){
	console.log("Fires After Component Ends");
}