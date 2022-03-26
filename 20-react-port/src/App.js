import React from 'react';
import logo from './logo.svg';
import Nav from "./components/Nav";
import Contact from './components/Contact';
import About from './components/About';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
