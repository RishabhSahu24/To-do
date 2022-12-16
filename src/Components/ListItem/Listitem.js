import React, { useState } from 'react';
import ListItemElement from './ListItemElement';

import './ListItem.css';

const ListItem = (props) => {
  return (
    <section>
      <ul className="ul">
        {props.items.map((elem) => (
          <ListItemElement
            key={elem.id}
            id={elem.id}
            isCompleted={elem.isCompleted}
            onDelete={props.onDeleteItem}
            statusChangeHandler={props.items}
          >
            {elem.input}
          </ListItemElement>
        ))}
      </ul>
    </section>
  );
};

export default ListItem;
