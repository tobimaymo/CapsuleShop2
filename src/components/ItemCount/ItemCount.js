import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial)

    const suma = () =>{
        if (stock > count){
            setCount(count + 1)
        }
    }
    const resta = ()=>{
        if(count > 1){
            setCount(count -1)
        }
    }
    const AgregarCantidad = ()=>{
        onAdd(count)
    }
  return (
    <>
    <div>
        <div className='count'> {count}</div>
        <div>
            <Link to={'/CapsuleShop2/cart'} className="button-75" onClick={AgregarCantidad}>Comprar</Link>
        </div>
        <div>
        <button className="button-74" onClick={resta}> - </button>
        <button className="button-74" onClick={suma}> + </button>
        </div>
    </div>
    </>
  )
}

export default ItemCount