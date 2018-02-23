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
        <button>What Should I Do</button>
      </div>
    );
  }
}

class AddOption extends Component {
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(`Option added: ${option}`);
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Options extends Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
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
  render() {
    const api = {
      title: "Indecision App",
      subTitle: 'Put your life in the hands of a computer',
      options: ['one', 'two', "Go to the store"]
    };
    return (
      <div className="App">
        <Header title={api.title} subTitle={api.subTitle} />
        <Action />
        <Options options={api.options} />
        <AddOption />
      </div>
    );
  }
}

export default App;