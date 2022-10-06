import React from 'react'
import Categories from '../../components/ItemList/Categories';
import ItemListContainer from '../../components/ItemList/ItemListContainer';
import "./Home.css"

const Home = () => {
  return (
    <div className='bg-dark'>
      <div className="paddingcategory">
        <Categories/>
      </div>
        <div className="headercontainer position-relative overflow-hidden text-center bg-dark">
          <div>
            <img src={process.env.PUBLIC_URL + "/img/midnights.gif"} alt="midnightsgif" className="midnights headerimagen"/>
            <div className="centered">
              <p>21/10/22</p>
            </div>
          </div>
        </div>
        <div className='ofertasList'>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/midnightsjadegreen.png"} alt="midnightsimg1" className="imgOferta"/>
            <p className='colorOferta'> Midnights: Jade Green Edition Vinyl </p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/midnightsmahogany.png"} alt="midnightsimg1" className="imgOferta"/>
            <p className='colorOferta'> Midnights: Mahogany Edition Vinyl </p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/img/mydnightsbloodmoon.png"} alt="midnightsimg1" className="imgOferta"/>
            <p className='colorOferta'> Midnights: Blood Moon Edition Vinyl </p>
          </div>

        </div>

    </div>
  )
}

export default Home