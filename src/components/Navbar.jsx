import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"> <h1>Bazar.F.L</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos/baño">Baño</Link></li>
                <li><Link className="menu-link" to="/productos/cocina">Cocina</Link></li>
                <li><Link className="menu-link" to="/productos/vasos y tazas">Vasos y Tazas</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>

            </ul>
        </nav>
    )
}

export default Navbar