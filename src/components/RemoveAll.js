import React from 'react';

class RemoveAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="button button--link" onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );
  }
}

export default RemoveAll;
