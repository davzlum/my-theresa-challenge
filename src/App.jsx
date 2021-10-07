import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:detailId" component={Detail} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
