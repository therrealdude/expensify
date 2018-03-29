import React from 'react';

export default Option = (props) => (
    <div>
      <p>{props.option}</p>
      <button className="button button--link" onClick={(e) => {
        props.handleDeleteOption(props.option)
      }}>remove</button>
    </div>
  );
