import React, { useEffect, useState } from 'react';

const ItemCount = ({ stock, initial = 1, prueba }) => {
    const [count, setCount] = useState(initial);
    
    
    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > 1 && setCount(count - 1);
    };

    const add = () => {
        prueba(count);
    };

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    return (
        <div className="container-count">
            <div className="count-btn">
                <button disabled={count === stock} onClick={sumar}>
                    +
                </button>
                <p>{count}</p>
                <button disabled={count === 1} onClick={restar}>
                    -
                </button>
            </div>
            <button onClick={add} className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;