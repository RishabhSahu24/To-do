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
        <input
          type="checkbox"
          className="checkbox checkbox_field"
          checked={props.isCompleted ? true : false}
          onClick={checkboxClickHandler}
        />
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
    </li>
  );
};

export default ListItemElement;
