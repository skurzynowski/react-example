import React from 'react';
import './App.css';
import Main from './pages/Main';
import User from './pages/User';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/user" exact component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
