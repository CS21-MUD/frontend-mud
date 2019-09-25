import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import PlayArea from './components/PlayArea/PlayArea';
import Login from './components/Forms/Login'


function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Login}/>
        <Route exact path="/play" component={PlayArea}/>
    </div>
  );
}

export default App;
