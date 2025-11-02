import logo from './assets/logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <button className="order_button">Order Here</button>
    </div>
  );
}

export default App;
