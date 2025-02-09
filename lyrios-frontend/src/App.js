import React from 'react';
import './App.css';
import Navbar from './components/NavBarElements';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import Session from './pages/session';
import Show from './pages/show';
import User from './pages/user';
import Edit from './pages/edit'
function App() {
  return (
    <div className="App">
      <h1>Lets get started with the Lyrios App!</h1>
        <Navbar />
        <Switch>
          <Route path='/session'>
            <Session/>
          </Route>
          <Route path='/show'>
            <Show/>
          </Route>
          <Route path='/user'>
            <User/>
          </Route>
          <Route path = '/edit'>
          <Edit/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
    </div>
  );
        }
export default App;