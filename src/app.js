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
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer.',
      options: []
    };
  }
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
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((o) => o !== option)
    }))
  }
  handleAddOption(option){
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
  }
  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption  handleAddOption={this.handleAddOption}/>
        <RemoveAll options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      {props.options.length == 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) =>
          <Option
            key={option}
            option={option}
            handleDeleteOption={props.handleDeleteOption}/>)
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <p>{props.option}</p>
      <button onClick={(e) => {
        props.handleDeleteOption(props.option)
      }}>remove</button>
    </div>
  );
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
    this.setState(() => ({
        error: error
    }));
    if (!error){
      e.target.elements.option.value = '';
    }
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
