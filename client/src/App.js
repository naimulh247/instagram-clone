import React,{useEffect, createContext, useReducer} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/SignIn'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatPost'
import {reducer, initialState} from './reducers/userReducers'


export const UserContext = createContext()

const Routing = () =>{
  const history = useHistory()
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

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{state:state, dispatch:dispatch}}>
      <BrowserRouter>
        <NavBar/>
        <Routing/>
        
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
