import { createContext, useState } from 'react';

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            alert('Ya está en el carrito flaco, sumale la cantidad');
        } else {
            setCart([...cart, producto]);
        }

    };

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll }}>
            {children}
        </CartContext.Provider>
    );
};

export default Provider;