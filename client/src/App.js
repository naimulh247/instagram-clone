import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route path="/"></Route>
    </BrowserRouter>
  );
}

export default App;
