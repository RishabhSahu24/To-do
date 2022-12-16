import React, { useState } from 'react';
import './Input.css';

const InputData = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const todoInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      alert('No Data Entered');
      return;
    }
    props.onAddTodo(enteredValue);
  };

  return (
    <div className="header">
      <div className="input_container">
        <div className="icon">
          <span
            className="material-symbols-outlined"
            style={
              props.totalList > 0
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
          >
            expand_more{' '}
          </span>
        </div>
        <form className="input_box" onSubmit={formSubmitHandler}>
          <input
            type="text"
            id="text"
            className="main_input"
            placeholder="What needs to be done?"
            onChange={todoInputChangeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default InputData;
