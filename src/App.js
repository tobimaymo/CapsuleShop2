import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './Views/ItemDetail/ItemDetailContainer'
import FooterBar from "./components/Footer/FooterBar";
import Autor from "./components/Autor/Autor";
import Todos from "./Views/Todos/Todos";
import Shop from "./Views/Shop/Shop";
import Cart from "./Views/Cart/Cart";
import { CartProvider } from "./Context/CartContext";

function App (){

    return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path={'/CapsuleShop2/detail/:id'} element={<ItemDetailContainer />} />
            <Route path={'/CapsuleShop2/shop'} element={<Shop/>}/>
            <Route path={'/CapsuleShop2/cart'} element={<Cart/>}/>
            <Route path={'/CapsuleShop2/album/:autor'} element={<Autor/>}/>
            <Route path={'/CapsuleShop2/album'} element={<Todos/>}/>
            <Route path={'/CapsuleShop2/'} element={<Todos/>}/>
          </Routes>
        </div>
        <FooterBar />
      </Router>
    </CartProvider>
    );
}

export default App;
