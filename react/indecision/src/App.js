import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';
import './App.css';

class App extends Component {
  state = {
    title: "Indecision App",
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    // explicitly returns an object
    localStorage.clear("options");
    this.setState(() => ({
      options: []
    }));
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }
  makeDecision = () => {
    let randomNumber = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNumber];
    //alert(option);
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  }
  handleClearSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    });
  }
  handleAddOption = (option) => {
    // if no data was entered
    if (!option) {
      return "Enter Valid Value To Add Item";
    } 
    // if we are added duplicated data (data that already exists)
    else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({
        options: prevState.options.concat([option])
    }));
  }
  // Fires immediately
  componentDidMount(){
    try {
      console.log('Fetching Data from localStorage');
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (e) {
      // do nothing
    }
  }
  // fires after a state gets updated
  componentDidUpdate(prevState, prevProps){
    console.log("Updating Data to localStorage");
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount(){
    console.log("Fires After Component Ends");
  }
  render() {
    return (
      <div className="App">
        <Header
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

// Default Properties
App.defaultProps = {
  options: []
};

export default App;