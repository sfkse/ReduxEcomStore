import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './sass/main.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Header />
        <Main />
      </div>

      <Switch>
        <Route path="/" exact />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
