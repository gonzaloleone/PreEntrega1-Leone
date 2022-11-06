import CartWidget from './CartWidget';
import {Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='contenedor-nav'>
            <Link to="/">
                <h1 style={{color: 'white', marginLeft:'10px'}}>GL INDUMENTARIA</h1>
            </Link>
            <nav className="navBar">
            <ul>
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
                    <NavLink to="/cart" className= "navLink"><CartWidget/></NavLink>
                </li>
            </ul>
            </nav>

                        
        </div>

    
        
    )
}

export default NavBar
