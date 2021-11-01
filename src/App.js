import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Save from './components/Save';
import './App.css';

const App = () => {
  /*const initialState = JSON.parse(localStorage.getItem("todos")) || [];*/
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  /*useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);*/
  return (
    <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            />
          </div>
          <div>
            <TodoList todos={todos} setTodos={setTodos}/>
          </div>
          <div>
            <Save/>
          </div>
        </div>
    </div>
  );
}

export default App;
