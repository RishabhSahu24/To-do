import React from 'react';
import './Footer.css';

const Footer = (props) => {
  const activeFilterHandler = () => {
    props.filterValueHandler('active');
  };

  const completedFilterHandler = () => {
    props.filterValueHandler('completed');
  };

  const allFilterHandler = () => {
    props.filterValueHandler('all');
  };

  const clearCompletedClickHandler = () => {
    props.clearCompletedHandler();
  };

  return (
    <footer
      style={
        props.totalList > 0
          ? { visibility: 'visible' }
          : { visibility: 'hidden' }
      }
    >
      <div className="footer_content">
        <div className="todo_count">{props.activeCount} item left</div>
        <ul className="filter">
          <li>
            <button className="all selected" onClick={allFilterHandler}>
              All
            </button>
          </li>
          <li>
            <button className="active" onClick={activeFilterHandler}>
              Active
            </button>
          </li>
          <li>
            <button className="completed" onClick={completedFilterHandler}>
              Completed
            </button>
          </li>
        </ul>
        <button
          className="clear_btn"
          style={
            !props.completedCount
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
          onClick={clearCompletedClickHandler}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
};

export default Footer;
