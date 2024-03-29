import logot from '../assets/img/logot.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    const mostrarModal = () => {
        setMostrarLogin(true);
    };

    const cerrarModal = () => {
        setMostrarLogin(false);
    }

    return (

        <div className="cabecera">
            <div className="logo">
                <a href="index.html"><img src={logot} alt="logo" /></a>
            </div>

            <div className="navbar" id="menu">
                <nav>
                    <ul>
                        <li><Link to="/">INICIO</Link></li>
                        <li><a className='dropdown-arrow' href='#'>¿QUIÉNES SOMOS?</a>
                            <ul className='sub-menus'>
                                <li><Link to="/fundacion">FUNDACIÓN</Link></li>
                                <li><Link to="/comunidad">COMUNIDAD</Link></li>
                                <li><Link to="/productos">PRODUCTOS</Link></li>

                            </ul>
                        </li>
                        <li><Link to="/eventos">EVENTOS</Link></li>
                    </ul>
                    <div className="opciones">
                        <ul>
                            <li>
                                <Link to="/login">INICIAR SESIÓN</Link>
                            </li>
                            <li>
                                <Link to="/register">REGISTRARSE</Link>

                            </li>
                        </ul>


                    </div>
                </nav>
            </div>

        </div>

    )
}
export default Navbar;