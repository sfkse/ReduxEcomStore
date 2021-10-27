import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './components/Cart';
import Home from './components/Home';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


