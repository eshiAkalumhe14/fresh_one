import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <button className="order_button">Order Here</button>
    </div>
  );
}

export default App;
