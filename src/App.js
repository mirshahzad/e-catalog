import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Homepage from './Homepage';
//import List from './etc';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Homepage/>

      </header>
    </div>
  );
}

export default App;
