import React from 'react';
import {
  BrowserRouter, Switch, Route, Link
} from 'react-router-dom'
import Home from './components/Home';
import './App.css';
import Keyword from './components/Keyword';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <h1>Routing Practice</h1>
        <div>
          <Link to="/">Reset</Link>
          ||
          <Link to="/home">Home</Link>
          ||
          <Link to="/TryMe!">Keyword</Link>
          ||
          <Link to="/1000000000000000000000000">Number</Link>
        </div>
        <Switch>
          {/* route for home to display Welcome */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/:keyword/:textcolor?/:backgroundcolor?">
            <Keyword />
          </Route>
          <Route path="">

          </Route>
          <Route path="/">
            <h1>Click the Links</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
