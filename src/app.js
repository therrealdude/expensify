const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
}

const getName = obj.getName.bind(obj);
console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer.',
      options: ['Thing One', 'Thing Two', 'Thing Four']
    };
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleAddOption(option){
      console.log(option);
      if (!option){
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
      console.log(this.state.options);
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} />
        <AddOption  handleAddOption={this.handleAddOption}/>
        <RemoveAll options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} option={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>{this.props.option}</p>
    );
  }
}



class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: error
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class RemoveAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(<User name="Dan" age="28"/>, document.getElementById('app'));
