import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div id="titulo-categoria" className='paddingcategory'>
        <Link to="/CapsuleShop2/album/BTS" className='button-74'>BTS</Link>
        <Link to="/CapsuleShop2/album/Taylor Swift" className='button-74'>Taylor Swift</Link>
        <Link to="/CapsuleShop2/album/" className='button-74'>Todos</Link>
        <Link to="/CapsuleShop2/album/Otros" className='button-74'>Otros</Link>
        
    </div>
  )
}

export default Categories