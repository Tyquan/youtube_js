// ./reducers/filters
import moment from 'moment'; // changed
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'), // changed
	endDate: moment().endOf('month') // changed
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
	}
};
export default filtersReducer;











// ./components/ExpenseListFilters.js
import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({
			calendarFocused
		}));
	};
	render() {
		return (
			<div>
				<input 
					type="text" 
					value={this.props.filters.text} 
					onChange={(e) => {
						this.props.dispatch(setTextFilter(e.target.value));
						console.log(e.target.value);
					}} 
				/>
				<select
					value={this.props.filters.sortBy} 
					onChange={(e) => {
						if (e.target.value === 'date') {
							this.props.dispatch(sortByDate());
						} 
						if (e.target.value === 'amount') {
							this.props.dispatch(sortByAmount());
						}
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker 
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
}
export default connect(mapStateToProps)(ExpenseListFilters);














// ./selectors/expenses.js
import moment from 'moment';
export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const createdAtMoment = moment(expense.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
		// sorting below
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1; // a comes first
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1; // greater amount comes first
		} else {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};







// Redux dev tools
// ./store/configureStore.js
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
	const store = createStore(combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	}), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};