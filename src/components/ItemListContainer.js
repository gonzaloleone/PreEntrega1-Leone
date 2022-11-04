import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryName} = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos');
        //const q = query(collectionProd, where('category', '==', categoryName));

        getDocs(collectionProd)
            .then((res) => {
                //console.log(res.docs);
                //.data()
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                //console.log(products);
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div
                style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center',}}
            >
                <HashLoader style={{ marginTop: '100px' }}/>
            </div>
        );
    }

    return (
        <div className="item-list-container">
            <main>
                <ItemList items={items} />
            </main>
        </div>
    );
};

export default ItemListContainer;
