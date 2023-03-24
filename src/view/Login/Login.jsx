import React, { useEffect, useState } from "react";
import style from './Login.module.css'
import logoGoogle from '../../assets/Logo_Google.svg'
import logoFacebook from '../../assets/Logo_Facebook.svg'
import { authUser, loginUser } from "../../features/apiPetitions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (token) {
        localStorage.setItem("tkn", token);
        authUser(token, dispatch).then(e => window.location.pathname = '/wallet')
      }
    }, 50)
  }, []);



  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(form, dispatch)
      .then(() => navigate("/wallet"))
      .catch((err) => console.log(err));
  };

  const handlePassportLogin = (e) => {
    console.log(e.target.id)
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/${e.target.id}`;
  };

  return (
    <div className={style.formcontainer}>
      <h1>Inicio de Sesión</h1>

      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="correo" className={style.label}>Login</label>
        <input
          className={style.inputext}
          type="text"
          id="correo"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <label className={style.label} htmlFor="contrasena">Password</label>
        <div className={style.password_container}>
          <input
            className={style.inputpassword}
            type="password"
            id="contrasena"
            name="password"
            value={form.password}
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>

        <button className={style.btn_submit}>Iniciar sesión</button>

        <div className={style.btn_google} id="google" onClick={handlePassportLogin}>
          <img src={logoGoogle} alt="" id="google"/>
          <h3 id="google">Iniciar con Google</h3>
        </div>
        <div className={style.btn_facebook} id="facebook" onClick={handlePassportLogin}>
          <img src={logoFacebook} alt="" id="facebook"/>
          <h3 id="facebook">Iniciar con Facebook</h3>
        </div>

        <a href="#">
            ¿Olvidaste tu Contraseña?
        </a>
      </form>


    </div>
  );
}

export default Login;
