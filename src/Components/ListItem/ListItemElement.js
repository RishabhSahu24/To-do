import React, { useState } from 'react';

const ListItemElement = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const checkboxClickHandler = (InputData) => {
    props.statusChangeHandler(props.id);
  };

  return (
    <li>
      <div className="list_element">
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox_field"
            checked={props.isCompleted ? true : false}
            onClick={checkboxClickHandler}
          />
        </div>
        <div className="list_content">
          <label
            htmlFor=""
            style={
              props.isCompleted
                ? { textDecoration: 'line-through', color: '#d9d9d9' }
                : {}
            }
          >
            {props.children}
          </label>
          <button onClick={deleteHandler} className="destory">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItemElement;
