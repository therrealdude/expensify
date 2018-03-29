import React from 'react';
import RemoveAll from './RemoveAll.js';
import Option from './Option.js';

const Options = (props) => (
    <div>
      <div className="widget-header">
        <h3 class="widget-header__title">Your Options</h3>
        <RemoveAll handleDeleteOptions={props.handleDeleteOptions} options={props.options} />
      </div>
      {props.options.length == 0 && <p className="widget-message">Please add an option to get started!</p>}
      {
        props.options.map((option, index) =>
          <Option
            key={option}
            option={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}/>)
      }
    </div>
  );

export default Options;
