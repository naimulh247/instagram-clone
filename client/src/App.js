import React,{useEffect, createContext} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/SignIn'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatPost'


const UserContext = createContext()

const Routing = () =>{
  return (
    <Switch>
      <Route exact path="/">
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

      <Route path="/create">
        <CreatePost/>
      </Route>
    </Switch>
  )
} 


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      
      
    </BrowserRouter>
  );
}

export default App;
