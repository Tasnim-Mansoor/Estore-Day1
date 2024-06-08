import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Notfound from './components/Notfound';

import Footer from './components/Footer';
import Productlists from './components/Productlists';
import Cart from './components/Cart';
import Checkout  from './components/Checkout ';
import "./index.css"
import AdminPage from "./components/AdminPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (

    <div className="App">
      <NavBarComp />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='*' element={<Notfound />}></Route>
        <Route path='/productlists' element={<Productlists />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Checkout' element={<Checkout />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>

      </Routes>
      <Footer/>
    </div>

  );
}
AOS.init();

export default App;
