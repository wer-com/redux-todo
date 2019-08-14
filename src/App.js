import React from 'react';
import './App.css';
import TodoView from "./components/todoView";
import Header from "./components/header";
import AddItem from "./components/additem";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddItem/>
      <TodoView/>
    </div>
  );
}

export default App;
