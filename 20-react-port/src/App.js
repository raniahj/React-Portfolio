import React from 'react';
import logo from './logo.svg';
import Nav from "./components/Nav";
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
