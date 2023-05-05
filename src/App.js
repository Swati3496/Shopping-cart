import React, { useState, useEffect } from "react";
import Book from "./component/book";
import Navbar from "./component/navbar";
import Cart from "./component/cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutForm from "./component/Checkout";
import Payment from "./component/Payment";


const App = () => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    setShow(true);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };



  return (
    <BrowserRouter>
          <Navbar setShow={setShow} size={cart.length} />
          

      

      {/* {show ? (
        <Book handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} */}

    <Routes>
    <Route path='/' element={<Book handleClick={handleClick} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        <Route path='/checkout' element={<CheckoutForm />} />
        <Route path='/payment' element={<Payment/>}/>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
