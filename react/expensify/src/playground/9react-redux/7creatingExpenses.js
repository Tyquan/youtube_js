/*
	Creating Expense Add / Edit Form
*/

// ./components/ExpenseForm.js
import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text" 
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
          >
          </textarea>
          <br />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}









// ./components/AddExpensePage.js
import React from 'react';
import ExpenseForm from './ExpenseForm';
const AddExpensePage = () => {
	return (
		<div>
			<h2>Add Expense</h2>
			<ExpenseForm />
		</div>
	);
};
export default AddExpensePage;