import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; //-> import por default
import { products } from '../mock/productsMock';
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
            })
            .finally(() => {
                setLoading(false);
            });

            return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <HashLoader style={{ marginTop: '100px' }}/>
                {/* <h1>Cargando...</h1> */}
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
