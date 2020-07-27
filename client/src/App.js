import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Login'
import Signup from './components/screens/Signup'



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Route path="/">
        <Home/>
      </Route>
      
      <Route path="/signin">
        <Signin/>
      </Route>
      
      <Route path="/signup">
        <Signup/>
      </Route>
      
      <Route path="/profile">
        <Profile/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
