import React from 'react';

const ListItemElement = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const statusChangeHandler = (event) => {};

  return (
    <li>
      <div className="list_element">
        <input
          type="checkbox"
          onClick={statusChangeHandler}
          className="checkbox checkbox_field"
          defaultChecked={props.isCompleted ? true : false}
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
