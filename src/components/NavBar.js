import CartWidget from './CartWidget';
import './componente.css';

function NavBar() {
    return (
        <div className='contenedor'>
            <h1>GL INDUMENTARIA</h1>
            <nav className="navBar">
            <ul className= "navUl">
                <li className= "navLi">
                    <a className= "navLink" href="">INICIO</a>
                </li>
                <li className= "navLi">
                    <a className= "navLink" href="">PRODUCTOS</a>
                </li>
                <li className= "navLi">
                    <a className= "navLink" href="">PREGUNTAS</a>
                </li>
                <li className= "navLi">
                    <a className= "navLink" href="">CONTACTO</a>
                </li>
                <li className= "navLi">
                    <a className= "navLink" href=""><CartWidget/></a>
                </li>
            </ul>
            </nav>

                        
        </div>

    
        
    )
}

export default NavBar
