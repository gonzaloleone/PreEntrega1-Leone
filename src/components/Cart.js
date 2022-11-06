import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteAll, deleteOne, precioTotal } = useContext(CartContext);
    const precio = precioTotal()

    if (cart.length === 0) {
        return <h1>Aún no hay productos</h1>;
    }

    return (
        <div className="contenedor-cart">
            {cart.map((prod) => (
                <div className="detalle-cart"
                    key={prod.id}
                >
                    <img src={prod.img} alt={prod.title} width="150px" />
                    <div className="info-cart">
                        <h2>{prod.title}</h2>
                        <h3>Precio: ${prod.price}</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h4>Subtotal: ${prod.price * prod.cantidad}</h4>
                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <div className='eliminar'>
            <h2 className='precio-total'>Total: ${precio}</h2>
            <button className='delete-all' onClick={deleteAll}>Eliminar todo el carrito</button>
            <Link to="/checkout" className="link-checkout">
                Checkout
            </Link>
            </div>
        </div>
    );
};

export default Cart;