import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../mock/productsMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    //estado
    const {id}= useParams()

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((res, rej) => {
                const producto = products.find((prod) => prod.id === Number(id));

                setTimeout(() => {
                    res(producto);
                }, 2000);
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(item);

    return (
        <div className="item-list-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;