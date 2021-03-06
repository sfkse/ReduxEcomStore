
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './components/Home';
import './sass/main.scss'

const App = () => {
  const cartItems = useSelector(state => state.cart)
  const [search, setSearch] = useState()

  const handleChange = (e) => {

    setSearch(e.target.value)
  }

  return (
    <BrowserRouter>
      <div className="container">
        <div className="navbar" >
          <div className="navbar__container">
            <div className="navbar__logo">
              <h1 className="navbar__logo-text"> <Link to="/" className="navbar__link" >Just Shop.</Link></h1>
              <div className="navbar__search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="navbar__account">
              <IconContext.Provider value={{ className: "navbar__icon" }}>
                <FaUserAlt />
              </IconContext.Provider>
              <Link to="/cart" className="navbar__cart">
                <IconContext.Provider value={{ className: "navbar__icon" }}>
                  <FaShoppingCart />
                </IconContext.Provider>
                <span className="navbar__icon navbar__cart--qty">{cartItems?.cartItems?.length}</span>
              </Link>

            </div>
          </div>
        </div >
        <HamburgerMenu />
      </div>

      <Switch>
        <Route path="/" exact render={() => <Home search={search} />} />
        <Route path="/cart" render={() => <Cart search={search} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
