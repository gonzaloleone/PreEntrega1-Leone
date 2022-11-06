import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [prodUnidades, setProdUnidades] = useState(0);

    const { addCart, prodQuantity } = useContext(CartContext);

    const prueba = (numero) => {
        setProdUnidades(numero);
        addCart(item, numero);
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

    const quantity = prodQuantity(item.id);

    return (
        <div className="detail-contenedor">
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
                    Producto importado y distribuido en Argentina. Excelente confort y calidad de primera marca. Fabricado con los mejores materiales del mercado para brindar la mayor comodidad y resistencia posible.
                </p>

                {prodUnidades === 0 ? (
                    <ItemCount prueba={prueba} stock={item.stock} initial={quantity} />
                ) : (
                    <Link to="/cart"><h1>Ir al carrito</h1></Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;