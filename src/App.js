import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading/Heading';
import InputData from './Components/InputForm/Input';
import ListItem from './Components/ListItem/Listitem';
import Footer from './Components/Footer/Footer';

function App() {
  const [todo, setTodo] = useState([
    { input: 'Do all exercises!', isCompleted: true, id: 'g1' },
    { input: 'Finish the course!', isCompleted: false, id: 'g2' },
  ]);

  let [filterValue, setFilterValue] = useState('all');

  let filterTodo = todo.filter((elem) => {
    if (filterValue === 'active') {
      return elem.isCompleted === false;
    } else if (filterValue === 'completed') {
      return elem.isCompleted === true;
    } else {
      return elem;
    }
  });

  const filterHandler = (value) => {
    setFilterValue(value);
  };

  const addTodoHandler = (enteredText) => {
    setTodo((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({
        input: enteredText,
        isCompleted: false,
        id: Math.random().toString(),
      });
      return updatedTodo;
    });
  };

  const deleteItemHandler = (todoId) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((todos) => todos.id !== todoId);
      return updatedTodo;
    });
  };

  const countNumberOfActiveTodo = () => {
    let count = 0;
    todo.map((elem) => {
      if (elem.isCompleted === false) {
        count = count + 1;
      }
    });
    return count;
  };

  return (
    <div>
      <Heading></Heading>
      <InputData onAddTodo={addTodoHandler}></InputData>
      <ListItem items={filterTodo} onDeleteItem={deleteItemHandler}></ListItem>
      <Footer
        count={countNumberOfActiveTodo(todo)}
        filterValueHandler={filterHandler}
      ></Footer>
    </div>
  );
}

export default App;
