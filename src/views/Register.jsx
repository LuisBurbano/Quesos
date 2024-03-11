import './Register.css';
import imgUser from '../assets/img/user.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState } from 'react';

const Register = (props) => {
        const [usuario, setUsuario] = useState('');
        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
    
        const handleUsuarioChange = (event) => {
            setUsuario(event.target.value);
        };
    
        const handleNombreChange = (event) => {
            setNombre(event.target.value);
        };
    
        const handleApellidoChange = (event) => {
            setApellido(event.target.value);
        };
    
        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };
    
        const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
    
            try {
                const response = await axios.post('localhost:3000/login', {
                    EMAILUSUARIO: email,
                    PASSUSUARIO: password
                });
    
                // Manejar la respuesta si es necesario
    
            } catch (error) {
                console.error('Error al registrar usuario:', error);
                setError('Error al intentar registrarse');
            }
        };  
    return(
        <>
        <Navbar/>
        <div className="register">
        <div className="titulo">
            <h1>Registro</h1>
        </div>
        <div className="imagen">
            <img src={imgUser} alt="usuario"/>
        </div>
        <form className="register_form" method="post" id="registerForm">
            <script src="js/main.js"></script>
            <div className="elemento">
                <input type="text" name="usuario" placeholder=" " required/>
                <label for="input">Usuario</label>
            </div>
            <div className="elemento">
                <input type="text" name="nombre" placeholder=" " required/>
                <label for="input">Nombre</label>
            </div>
            <div className="elemento">
                <input type="text" name="apellido" placeholder=" " required/>
                <label for="input">Apellido</label>
            </div>
            <div className="elemento">
                <input type="email" name="email" placeholder=" " required/>
                <label for="input">Correo Electrónico</label>
            </div>
            <div className="elemento">
                <input type="password" name="password" placeholder=" " required/>
                <label for="input">Contraseña</label>
            </div>
            <div className="boton_register">
                <input type="submit" value="Registrarse" onclick="validateRegisterForm()"/>
            </div>
        </form>
    </div>  
    <Footer/>  
    </>
    )
}

export default Register;