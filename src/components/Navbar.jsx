import logot from '../assets/img/logot.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className="cabecera">
            <div className="logo">
                <a href="index.html"><img src={logot} alt="logo"/></a>
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
                    <button className="botones" id="openLogin" >INICIAR SESIÓN</button>
                    <button className="botones" id="openRegister">REGISTRARSE</button>
                </div>
                </nav>
            </div>

            <dialog id="myModal">
            </dialog>
        </div>

    )
}
export default Navbar;