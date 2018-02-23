import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return (
		<div>
			Edit Expense with id of {props.match.params.id}
		</div>
	);
};

export default EditExpensePage;