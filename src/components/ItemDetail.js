import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const { addToCart, getProductQuantity } = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addToCart(item, numero);
        toast.success('Producto agregado!', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    const quantity = getProductQuantity(item.id);

    return (
        <div className="container-detail">
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>

                {unidades === 0 ? (
                    <ItemCount prueba={prueba} stock={item.stock} initial={quantity} />
                ) : (
                    <Link to="/cart"><h1>Ir al carrito</h1></Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;