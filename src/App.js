
import HamburgerMenu from './components/HamburgerMenu';
import Navbar from './components/Navbar';
import './sass/main.scss'

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <HamburgerMenu />
    </div>
  );
}

export default App;
