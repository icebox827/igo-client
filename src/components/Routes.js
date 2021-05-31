import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../containers/Navbar';
import Home from '../containers/Home';
import Cars from '../containers/Cars';
import Reservation from '../containers/Reservation';
import '../styles/App.css';
import store from '../store';

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reservation' component={Reservation} />
          <Route exact path='car' component={Cars}  />
        </Switch>
      </Router>
    </Provider>
  )
  
};

export default Routes;