import { createContext, useState } from 'react';

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]);
        }

    };

    const sumarCantidad = (prodAgregado) => {
        const carritoAct = cart.map((prodDelCart) => {
            if (prodDelCart.id === prodAgregado.id) {
                const prodAct = {
                    ...prodDelCart,
                    cantidad: prodAgregado.cantidad,
                };
                return prodAct;
            } else {
                return prodDelCart;
            }
        });

        setCart(carritoAct);
    };

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    const deleteAll = () => setCart([]);

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const totalUnidades = () => {
        let acc = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            acc = acc + prod.cantidad;
        });
        return acc;
    };

    const precioTotal = () => {
        let cont = 0;
        const copy = [...cart];
        copy.forEach((prod) => {
            cont = cont + prod.price * prod.cantidad;
        });
        return cont;
    };

     const prodQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };


    return (
        <CartContext.Provider value={{ cart, totalUnidades, addCart, deleteAll, deleteOne, prodQuantity, precioTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default Provider;