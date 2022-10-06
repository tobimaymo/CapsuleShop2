import './ItemList.css'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from "firebase/firestore"
import { db } from '../../firebaseConfig';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import Categories from './Categories';


function ItemListContainer() {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const getAlbums = async () => {
            const q = query(collection(db, "album"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id })
            });
            setItems(docs);
        };
        getAlbums();
    }, [])
    
 return (
    <>
        <div className="album py-5 bg-light" id="divMain">
            <Categories/>
                <div id="contenedor-productos">
			            <ItemList productos={items} />
                </div>
        </div>
    </>
 );
}

export default ItemListContainer