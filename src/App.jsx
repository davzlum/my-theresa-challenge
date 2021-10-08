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
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:category/:movieId" component={Detail} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
