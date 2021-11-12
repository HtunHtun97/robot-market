import * as React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
