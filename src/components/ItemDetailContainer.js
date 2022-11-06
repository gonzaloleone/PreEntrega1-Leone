import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    const {id}= useParams()

    useEffect(() => {
        const prodCollection = collection(db, 'productos');
        const ref = doc(prodCollection, id);

        getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoader(false);
            });

            return () => setLoader(true);
    }, [id]);

    if (loader) {
        return (
            <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center',}}>
                <HashLoader style={{ marginTop: '100px' }}/>
            </div>
        );
    }


    return (
        <div className="contenedor-itemList">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;