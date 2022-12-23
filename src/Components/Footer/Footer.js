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
      <div className="footer_content wrapper">
        <div className="todo_count">{props.activeCount} item left</div>
        <ul className="filter">
          <li>
            <button
              className="all"
              // borderColor: 'rgba(175, 47, 47, 0.2)'
              style={
                props.activeValue == 'all'
                  ? { borderColor: 'rgba(175, 47, 47, 0.2)' }
                  : {}
              }
              onClick={allFilterHandler}
            >
              All
            </button>
          </li>
          <li>
            <button
              className="active"
              style={
                props.activeValue == 'active'
                  ? { borderColor: 'rgba(175, 47, 47, 0.2)' }
                  : {}
              }
              onClick={activeFilterHandler}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className="completed"
              style={
                props.activeValue == 'completed'
                  ? { borderColor: 'rgba(175, 47, 47, 0.2)' }
                  : {}
              }
              onClick={completedFilterHandler}
            >
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
