import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = {
	title: 'Indecision App',
	subTitle: 'Put your life in the hands of a Computer',
	options: ['one', 'two', "Go to the store"]
};


const onFormSubmit = (e) => {
	// stop the page refresh
	e.preventDefault();
	// get the element from the form
	const option = e.target.elements.option.value;
	if (option){
		app.options.push(option);
		e.target.elements.option.value = '';
		rerender();
	}
};

const removeAll = () => {
	app.options = [];
	rerender();
};

const onMakeDecision = () => {
	const randomNumber = Math.floor(Math.random() * app.options.length);
	console.log(randomNumber);
	const option = app.options[randomNumber];
	alert(option);
};

const rerender = () => {
	const template = (
		<div className="App">
	    	{app.title && <h1>{app.title}</h1>}
	    	{app.subTitle && <p>{app.subTitle}</p>}
	    	<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
	    	<button disabled={app.options.length === 0 } onClick={onMakeDecision}>What should I Do</button>
	    	<button onClick={removeAll}>Remove All</button>
		    <ol>
		    	{
		    		app.options.map((option) => {
		    			return <li key={option}>{option}</li>
		    		})
		    	}
		    </ol>
		    <form onSubmit={onFormSubmit}>
		    	<input type="text" name="option" />
		    	<button >Add Option</button>
		    </form>
		    <span></span>
	  	</div>
	);

	ReactDOM.render(template, document.getElementById('root'));
		registerServiceWorker();
};

rerender();