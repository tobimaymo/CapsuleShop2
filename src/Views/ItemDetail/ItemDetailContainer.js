import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore"
import { db } from '../../firebaseConfig';
import { async } from '@firebase/util';
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"
import "./ItemClass.css"

function ItemDetailContainer (){
    const [producto, setProducto] = useState({})
    let {id} = useParams()

    useEffect(() => {
        const getAlbums = async () => {
            const q = query(collection(db, "album"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id })
            });
            setProducto(docs.find(prod => prod.id === id));
        };
        getAlbums();
    }, [])
return (
    <>
 <ItemDetail data={producto}/>
    </>
)
}

export default ItemDetailContainer