import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading/Heading';
import InputData from './Components/InputForm/Input';
import ListItem from './Components/ListItem/Listitem';
import Footer from './Components/Footer/Footer';

function App() {
  const [todo, setTodo] = useState([
    { input: 'Do all exercises!', isCompleted: true, id: 'g1' },
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
    setFilterValue('all');
  };

  const deleteItemHandler = (todoId) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((todos) => todos.id !== todoId);
      return updatedTodo;
    });
  };

  const clearCompletedHandlerFunction = () => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter(
        (todos) => todos.isCompleted === false
      );
      return updatedTodo;
    });
  };

  const countNumberOfActiveTodo = () => {
    let activeCount = 0;
    todo.map((elem) => {
      if (elem.isCompleted === false) {
        activeCount = activeCount + 1;
      }
    });
    return activeCount;
  };

  const countNumberOfCompletedTodo = () => {
    let completedCount = false;
    todo.map((elem) => {
      if (elem.isCompleted === true) {
        completedCount = true;
      }
    });
    return completedCount;
  };

  const toggleStatus = (id) => {
    let newTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTodo(newTodo);
  };

  const updateStatusHandler = () => {
    let newTodo = todo.map((task) => {
      console.log(task.isCompleted);
      if (task.isCompleted === false) {
        task.isCompleted = true;
      }
      return task;
    });
    setTodo(newTodo);
  };

  console.log(todo);

  return (
    <div>
      <Heading></Heading>
      <InputData
        onAddTodo={addTodoHandler}
        totalList={todo.length}
        updateStatus={updateStatusHandler}
      ></InputData>
      <ListItem
        items={filterTodo}
        onDeleteItem={deleteItemHandler}
        onClickCheckboxHandler={toggleStatus}
      ></ListItem>
      <Footer
        activeCount={countNumberOfActiveTodo(todo)}
        completedCount={countNumberOfCompletedTodo(todo)}
        filterValueHandler={filterHandler}
        clearCompletedHandler={clearCompletedHandlerFunction}
        totalList={todo.length}
      ></Footer>
    </div>
  );
}

export default App;
