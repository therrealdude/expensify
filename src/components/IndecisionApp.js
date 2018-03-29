import React from 'react';
import AddOption from './AddOption.js'
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import RemoveAll from './RemoveAll.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer.',
    options: [],
    selectedOption: false
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: this.state.options[randomNum] }))
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((o) => o !== option)
    }))
  };
  handleAddOption = (option) => {
      console.log(option);
      if (!option){
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
      console.log(this.state.options);
      this.setState((prevState) => ({
          options: prevState.options.concat(option)
      }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  };
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options){
        this.setState(() => ({ options }));
      }
    }
    catch (e){
      //Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
          <div className="widget">
            <Options options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption  handleAddOption={this.handleAddOption}/>
            <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal}/>
          </div>
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
