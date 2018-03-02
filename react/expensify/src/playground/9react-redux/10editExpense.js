// ./components/ExpenseListItem.js
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {removeExpense} from '../actions/expenses';
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
			<p>${amount} - {createdAt}</p>
			<button onClick={() => {
				dispatch(removeExpense({ id }));
			}}>
				Remove
			</button>
		</Link>
	</div>
);
export default connect()(ExpenseListItem);








// ./components/EditExpensePage.js
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseForm 
				expense={props.expense}
				onSubmit={(expense) => {
					// dispach changes
					props.dispatch(editExpense(props.expense.id, expense));
					console.log('Updated:',expense);
					// redirect to the dashboard
					props.history.push('/');
				}}
			/>
			<button 
				onClick={() => {
					props.dispatch(removeExpense({
						id: props.expense.id 
					}));
					// redirect to the dashboard
					props.history.push('/');
				}}
			>
				Remove
			</button>
		</div>
	);
};
const mapStateToProps = (state, props) => {
	return {
		// find a match
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id;
		})
	};
};
export default connect(mapStateToProps)(EditExpensePage);









// ./components/ExpenseForm.js
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
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
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // Set error state
      this.setState(() => ({ error: 'Please provide Description and Amount' }));
    } else {
      // Clear the error
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        calendarFocused: false
      });
      console.log('Submitted');
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
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










// ./components/ExpenseListItem.js (button removed)
import React from 'react';
import { Link } from 'react-router-dom';
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
			<p>${amount} - {createdAt}</p>
		</Link>
	</div>
);
export default ExpenseListItem;