import React, { useEffect, useState } from 'react';

const ItemCount = ({ stock, initial = 1, prueba }) => {
    const [count, setCount] = useState(initial);
    
    const add = () => {
        prueba(count);
    };

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > 1 && setCount(count - 1);
    };


    useEffect(() => {
        setCount(initial);
    }, [initial]);

    return (
        <div className="count-contenedor">
            <div className="btn-count">
                <button disabled={count === stock} onClick={sumar}>
                    +
                </button>
                <p>{count}</p>
                <button disabled={count === 1} onClick={restar}>
                    -
                </button>
            </div>
            <button onClick={add} className="btn-addCart">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;