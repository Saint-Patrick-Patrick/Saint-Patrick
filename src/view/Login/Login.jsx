import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import { authUser, loginUser } from "../../features/apiPetitions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("tkn", token);
      authUser(token, dispatch);
    }
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      .then(() => navigate("/walet"))
      .catch((err) => console.log(err));
  };

  const handlePassportLogin = (e) => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/${e.target.id}`;
  };

  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <img src="img/Logosaint.png" alt="Logo de la empresa" />
        <input
          type="text"
          id="correo"
          name="email"
          value={form.email}
          placeholder="Ingresa tu correo electrónico o documento"
          onChange={handleChange}
        />
        <label htmlFor="correo">Login</label>
        <div className="password-container">
          <input
            type="password"
            id="contrasena"
            name="password"
            value={form.password}
            placeholder="Ingresa tu contraseña"
            onChange={handleChange}
          />
          <label htmlFor="contrasena">Password</label>
          <a href="#" style={{ float: "right" }}>
            ¿Olvidaste tu Contraseña?
          </a>
        </div>
        <br />
        <div className="btn-google" id="google" onClick={handlePassportLogin}>
          Iniciar con Google
        </div>
        <button
          className="btn-facebook"
          id="facebook"
          onClick={handlePassportLogin}
        >
          Iniciar con Facebook
        </button>
        <button className="btn-submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
