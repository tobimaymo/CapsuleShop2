import React from 'react'
import ItemListContainer from '../../components/ItemList/ItemListContainer'

const Todos = ({ItemData}) => {
  return (
    <div className='bg-light'>
        <ItemListContainer ItemData={ItemData}/>
    </div>
  )
}

export default Todos