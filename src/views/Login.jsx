import React, { useState } from 'react';
import userPng from '../assets/img/user.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Login = (props) => {
  // Estado para almacenar el correo electrónico y la contraseña del usuario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Manejadores de cambios para los campos de correo electrónico y contraseña
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Hacer una solicitud GET al servidor para obtener los datos del usuario
      const response = await axios.get(`http://localhost:3000/login/${email}`);
      const userData = response.data;

      // Verificar si los datos del usuario son válidos
      if (!userData || userData.PASSUSUARIO !== password) {
        setError('Correo electrónico o contraseña incorrectos');
        return;
      }

      // Autenticación exitosa, redirige al usuario a la página de inicio
      window.location.href = '/admin';
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al intentar iniciar sesión');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="titulo">
          <h1>Iniciar Sesión</h1>
        </div>
        <div className="imagen">
          <img src={userPng} alt="usuario" />
        </div>
        <form className="log_in" onSubmit={handleSubmit}>
          <div className="elemento">
            <input type="text" id="usuario" name="usuario" placeholder="Usuario" required value={email} onChange={handleEmailChange} />
          </div>
          <div className="elemento">
            <input type="password" id="password" name="password" placeholder="Contraseña" required value={password} onChange={handlePasswordChange} />
          </div>
          <div className="boton_log_in">
            <input type="submit" value="Iniciar Sesión" />
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <Footer />
    </>
  );
};

export default Login;
