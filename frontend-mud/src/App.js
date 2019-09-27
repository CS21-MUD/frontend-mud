import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Register from './components/Forms/Register'
import Login from './components/Forms/Login'
import PrivateRoute from "./utils/PrivateRoute";
import Core from "./components/Core";


function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <PrivateRoute exact path="/play" component={Core}/>
    </div>
  );
}

export default App;
