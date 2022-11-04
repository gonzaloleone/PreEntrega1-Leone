import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, deleteAll, deleteOne, precioTotal } = useContext(CartContext);
    const precio = precioTotal()

    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <div className="cart-detail"
                    key={prod.id}
                >
                    <img src={prod.img} alt={prod.title} width="150px" />
                    <div className="cart-detail-info">
                        <h2>{prod.title}</h2>
                        <h3>Precio: ${prod.price}</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h4>Subtotal: ${prod.price * prod.cantidad}</h4>
                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <div className='price-delete'>
            <h2 className='total-price'>Total: ${precio}</h2>
            <button className='delete-all' onClick={deleteAll}>Eliminar todo el carrito</button>
            </div>
        </div>
    );
};

export default Cart;