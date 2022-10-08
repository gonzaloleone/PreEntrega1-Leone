import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; //-> import por default
import { products } from '../mock/productsMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //estado

    const {categoryName} = useParams();

    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                )

                const prod = categoryName ? prodFiltrados : products;
                setTimeout(() => {
                    res(prod);
                }, 2000);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    //console.log(items);

    return (
        <div className="item-list-container">
            <main>
                <ItemList items={items} />
            </main>
        </div>
    );
};

export default ItemListContainer;
