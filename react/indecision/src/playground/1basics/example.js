const app = {
	title: 'Indecision App',
	subTitle: 'Put your life in the hands of a Computer',
	options: ['one', 'two']
};
const template = (
	<div className="App">
    	{app.title && <h1>{app.title}</h1>}
    	{app.subTitle && <p>{app.subTitle}</p>}
    	<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
	    <ul>
	    	<li>{Item one}</li>
	    	<li>Item two</li>
	    </ul>
  	</div>
);

const user = {
	name: 'Thomas',
	age: 31,
	location: 'Brooklyn'
};

function getLocation(location){
	if (location){
		return (<p>location: {location}</p>);
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{user.age && (user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);