import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget(){
    const { totalUnidades } = useContext(CartContext);
    const total = totalUnidades();

    
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{total}</span>
        </>
    )
}

export default CartWidget
