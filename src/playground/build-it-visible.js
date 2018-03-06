class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false
    }
  }
  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render(){
    return (
        <div className="wrapper">
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
          {this.state.visible && <p>Here are details.</p>}
        </div>
      );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
