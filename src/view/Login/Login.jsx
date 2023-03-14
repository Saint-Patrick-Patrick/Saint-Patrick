import React, { useState } from 'react';
import './Login.css';
import '../../App.css';
import { authFacebook, authGoogle, loginUser } from '../../features/apiPetitions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(form, dispatch)
        .then(() => navigate('/walet'))
        .catch((err) => console.log(err))
    }
    
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        authGoogle(dispatch)
        .then(() => window.location.href = "localhost:5173/walet")
        .catch((err) => console.log(err))

    }

    const handleFacebookLogin = (e) => {
        e.preventDefault()
        authFacebook(dispatch)
        .then(() => window.location.href = "localhost:5173/walet")
        .catch((err) => console.log(err))

    }

return (
    <div>
    <h1>Inicio de Sesión</h1>
    <form onSubmit={handleSubmit}>
        <img src="img/Logosaint.png" alt="Logo de la empresa" />
        <input type="text" id="correo" name="email" value={form.email} placeholder="Ingresa tu correo electrónico o documento" onChange={handleChange}/>
        <label htmlFor="correo">Login</label>
        <div className="password-container">
        <input type="password" id="contrasena" name="password" value={form.password} placeholder="Ingresa tu contraseña" onChange={handleChange}/>
        <label htmlFor="contrasena">Password</label>
        <a href="#" style={{float: 'right'}}>¿Olvidaste tu Contraseña?</a>
        </div>
        <br />
        <button className="btn-google" onClick={handleGoogleLogin}>Iniciar con Google</button>
        <button className="btn-facebook" onClick={handleFacebookLogin}>Iniciar con Facebook</button>
        <button className="btn-submit">Iniciar sesión</button>
    </form>
    
    </div>
);
}

export default Login;
