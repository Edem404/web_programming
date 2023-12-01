// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
import AboutCard from './components/aboutCard/aboutCard';
import Cart from './components/cart/cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/catalog/:id" element={<AboutCard/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
