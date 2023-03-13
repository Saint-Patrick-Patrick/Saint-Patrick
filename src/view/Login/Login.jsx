import React from 'react';
import './Login.css';
import './global.css';
import 'font-awesome/css/font-awesome.min.css';

function Login() {
return (
    <div>
    <h1>Inicio de Sesión</h1>
    <form>
        <img src="img/Logosaint.png" alt="Logo de la empresa" />
        <input type="text" id="correo" name="correo" placeholder="Ingresa tu correo electrónico o documento" />
        <label htmlFor="correo">Login</label>
        <div className="password-container">
        <input type="password" id="contrasena" name="contrasena" placeholder="Ingresa tu contraseña" />
        <label htmlFor="contrasena">Password</label>
        <a href="#" style={{float: 'right'}}>¿Olvidaste tu Contraseña?</a>
        </div>
        <br />
        <button className="btn-google">Iniciar con Google</button>
        <button className="btn-facebook">Iniciar con Facebook</button>
        <button className="btn-submit">Iniciar sesión</button>
    </form>
    </div>
);
}

export default Login;