import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
        <span></span>
      </div>
    );
  }
}

class Action extends Component {
  render(){
    return (
      <div>
        <button
          onClick={this.props.makeDecision}
          disabled={this.props.hasOptions}
        >
          What Should I Do
        </button>
      </div>
    );
  }
}

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=> {
      return {
        //shorthand syntax
        error
      };
    });
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Options extends Component {
  render(){
    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => {
          return <Option key={option} optionText={option} />
        })}
      </div>
    );
  }
}

class Option extends Component {
  render(){
    return (
      <div>
        <p>
          {this.props.optionText}
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.makeDecision = this.makeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      title: "Indecision App",
      subTitle: 'Put your life in the hands of a computer',
      options: []
    };
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  makeDecision() {
    let randomNumber = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    // if no data was entered
    if (!option) {
      return "Enter Valid Value To Add Item";
    } 
    // if we are added duplicated data (data that already exists)
    else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  render() {
    return (
      <div className="App">
        <Header 
          title={this.state.title} 
          subTitle={this.state.subTitle} 
        />
        <Action 
          hasOptions={this.state.options.length <= 0}
          makeDecision={this.makeDecision} 
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions} 
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

export default App;