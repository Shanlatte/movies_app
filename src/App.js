import React from 'react';
import './App.css';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';


function App() { 

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
