import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'

const CardWidget = () => {
  const {cartSize} = useContext(CartContext)
  return (
    <div className='CounterSection'>
        <Link to={'/CapsuleShop2/cart'}>
          <button id="boton-carrito">
            <span id="contadorCarrito">{cartSize}</span>
            <img src={process.env.PUBLIC_URL + "/img/carritowhite.png"} alt='carrito' className="bi me-2" width="40" height="40"></img>
          </button>        
        </Link>
      </div>
  )
}

export default CardWidget