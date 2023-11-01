
import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home'
import Header from './components/headerFooter/Header' 
import Footer from './components/headerFooter/Footer'

import CartProduct from './components/CartProduct';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Order from './components/Order';
import OrderSuccessfully from './components/OrderSuccessfully';


function App() {

  
  return (
    <>

      <BrowserRouter>
       
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart-product" element={<CartProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path={'/login'} element={<Login/>}/>
            <Route exact path={'/register'} element={<Register/>}/>
            <Route exact path={'/order'} element={<Order/>}/>
            <Route exact path={'/order-successfull'} element={<OrderSuccessfully/>}/>
          </Routes>
          <Footer/>
  
      </BrowserRouter>

    </>
  );
}

export default App;
