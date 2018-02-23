import React from "react";

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
		this.state = {
			title: 'Visibility Toggle',
			visibility: false,
	        description: 'This is meant to be shown or hidden based on you clicking the button above'
		};
	}

	handleVisibilityToggle(){
		this.setState((prevState) => {
			return {
              visibility: !prevState.visibility
			};
		});
	}

	render() {
		return (
			<div>
				{this.state.title && <h1>{this.state.title}</h1>}
				<button 
				    onClick={this.handleVisibilityToggle}>
				    {this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
	    	    {this.state.visibility && (
	    		    <div>
	    			    <p>{this.state.description}</p>
	    		    </div>
	    	    )}
			</div>
		);
	}
}

export default Toggle;