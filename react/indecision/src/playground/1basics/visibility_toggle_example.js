const app = {
	title: 'Visibility Toggle',
	description: 'This is meant to be shown or hidden based on you clicking the button above'
};

let visibility = false;

const onHideDescription = () => {
	visibility = !visibility;
	rerender();
};

const rerender = () => {
	const template = (
		<div className="App">
	    	{app.title && <h1>{app.title}</h1>}
	    	<button onClick={onHideDescription}>{visibility ? 'Hide Details' : 'Show Details'}</button>
	    	{visibility && (
	    		<div>
	    			<p>{app.description}</p>
	    		</div>
	    	)}
	  	</div>
	);

	ReactDOM.render(template, document.getElementById('root'));
		registerServiceWorker();
};

rerender();