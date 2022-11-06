import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    const {categoryName} = useParams();

    useEffect(() => {
        const prodCollection = collection(db, 'productos');
        
        const referencia = categoryName
            ? query(prodCollection, where('category', '==', categoryName))
            : prodCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoader(false);
            });
        return () => setLoader(true);
    }, [categoryName]);

    if (loader) {
        return (
            <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center',}}>
                <HashLoader style={{ marginTop: '100px' }}/>
            </div>
        );
    }

    return (
        <div className="contenedor-itemList">
            <main>
                <ItemList items={items} />
            </main>
        </div>
    );
};

export default ItemListContainer;
