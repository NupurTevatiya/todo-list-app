import React from 'react';
import Form  from './Components/Form';
import './App.css';
import Header from './Components/Header';

const App = () => {

  return (

   <>
   <Header/>
     <div className="wrapper">
      <h1>Todo List</h1>
      <Form/>
    </div>
   </>
    
  );
}

export default App;
