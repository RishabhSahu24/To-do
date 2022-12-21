import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading/Heading';
import InputData from './Components/InputForm/Input';
import ListItem from './Components/ListItem/Listitem';
import Footer from './Components/Footer/Footer';

function App() {
  const [todo, setTodo] = useState([]);

  let [filterValue, setFilterValue] = useState('all');

  // TO SET FILTER VALUE
  const filterHandler = (value) => {
    setFilterValue(value);
  };

  // TO FILTER TODO
  let filterTodo = todo.filter((elem) => {
    if (filterValue === 'active') {
      return elem.isCompleted === false;
    } else if (filterValue === 'completed') {
      return elem.isCompleted === true;
    } else {
      return elem;
    }
  });

  //TO ADD NEW TODO
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

  //TO DELETE TODO
  const deleteItemHandler = (todoId) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((todos) => todos.id !== todoId);
      return updatedTodo;
    });
  };

  //TO CLEAR COMPLETED TODO
  const clearCompletedHandlerFunction = () => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter(
        (todos) => todos.isCompleted === false
      );
      return updatedTodo;
    });
  };

  //TO COUNT THE NUMBER OF ACTIVE TODO
  const countNumberOfActiveTodo = () => {
    let activeCount = 0;
    todo.map((elem) => {
      if (elem.isCompleted === false) {
        activeCount = activeCount + 1;
      }
    });
    return activeCount;
  };

  //TO COUNT THE NUMBER OF COMPLETED TODO
  const countNumberOfCompletedTodo = () => {
    let completedCount = false;
    todo.map((elem) => {
      if (elem.isCompleted === true) {
        completedCount = true;
      }
    });
    return completedCount;
  };

  //TO TOGGLE THE STATUS
  const toggleStatus = (id) => {
    let newTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTodo(newTodo);
  };

  //TO UPDATE THE STATUS
  const updateStatusHandler = () => {
    let flag = true;
    let newTodo = todo.map((task) => {
      if (task.isCompleted === false) {
        flag = false;
        task.isCompleted = true;
      }
      return task;
    });
    if (flag) {
      newTodo = todo.map((task) => {
        task.isCompleted = false;
        return task;
      });
    }
    setTodo(newTodo);
  };

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
