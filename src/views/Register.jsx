import './Register.css';
import imgUser from '../assets/img/user.png';

const Register = (props) => {
    return(
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
    )
}

export default Register;