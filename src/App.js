import React, {} from 'react';
import './App.css';
import { Navbar, Footer } from './components';
import { Home } from './Pages';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
