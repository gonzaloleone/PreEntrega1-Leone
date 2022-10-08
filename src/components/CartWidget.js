import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget(){
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>1</span>
        </>
    )
}

export default CartWidget
