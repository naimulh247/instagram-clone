import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route path="/"></Route>
    </BrowserRouter>
  );
}

export default App;
