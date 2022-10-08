import CartWidget from './CartWidget';
import {Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='contenedor'>
            <Link to="/">
                <h1 style={{color: 'white'}}>GL INDUMENTARIA</h1>
            </Link>
            <nav className="navBar">
            <ul className= "navUl">
                <li className= "navLi">
                    <NavLink to="/category/remeras" className= "navLink">REMERAS</NavLink>
                </li>
                <li className= "navLi">
                    <NavLink to="/category/buzos" className= "navLink">BUZOS</NavLink>
                </li>
                <li className= "navLi">
                    <NavLink to="/category/jeans" className= "navLink">JEANS</NavLink>
                </li>
                <li className= "navLi">
                    <NavLink to="/category/contacto" className= "navLink">CONTACTO</NavLink>
                </li>
                <li className= "navLi">
                    <NavLink to="/cart" className= "navLink"><CartWidget/></NavLink>
                </li>
            </ul>
            </nav>

                        
        </div>

    
        
    )
}

export default NavBar
