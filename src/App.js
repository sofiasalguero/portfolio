import React, {} from 'react';
import './App.css';
import { Navbar, Footer } from './components';
import { Home } from './Pages';
import Router from './router';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router/>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
