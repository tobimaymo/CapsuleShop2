import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

function ItemDetail ({data}) {
  const [goToCart, setGoToCart] = useState(0);
  const {addItem} = useContext(CartContext); 

  const onAdd = (quantity) => {
      setGoToCart(quantity)
      addItem(data, quantity);
  };

  return (
    <div className={`${data.alt}`}>
      <div className="CardDetail">
        <div className="sombreadogeneral">
            <img src={data.img} alt={data.alt} className="bd-placeholder-img card-img-top"/>
        </div>
        <div className="infoAlbum copperplate">
          <small>{data.autor} presents</small>
          <p className="tituloDetail">{data.titulo}</p>
            <p className="descDetail">{data.descripcion}</p>
            <div className="d-flex justify-content-evenly align-items-center">
              <p className="precioDetail">${data.precio}</p>
              <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default ItemDetail