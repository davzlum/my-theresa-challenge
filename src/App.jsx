import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/movie/:movieId" component={Detail} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
