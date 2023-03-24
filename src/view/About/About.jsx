import React from "react";
import { NavLink } from "react-router-dom";
import colaborators from "./colaborators";
import style from "./About.module.css";

export default function About() {
  const handleClick = (link) => {
    window.open(link)
  }
  return (
    <div className={style.container}>
      <div className={style.descriptionContainer}>
        <div className={style.text}>
          <h1>Hola 👋, bienvenido a Saint Patrick!</h1>
          <p>
            Somos un neobanco moderno y vibrante diseñado para brindar la mejor
            experiencia bancaria en línea para nuestros clientes. Nuestro
            objetivo es simplificar la banca y hacerla más accesible para todos,
            al mismo tiempo que proporcionamos un servicio seguro y confiable.{" "}
          </p>
          <p>
            Creemos que la banca en línea no debería ser una molestia, sino una
            experiencia emocionante y sin complicaciones. Si quieres descubrir
            cómo podemos ayudarte a alcanzar tus metas financieras, unete a
            nosotros haciendo click en el siguiente boton:
          </p>
        </div>
        <div className={style.buttonDiv}>
          <NavLink to={"/register"}>
            <button>Registrate</button>
          </NavLink>
        </div>
      </div>
      <div className={style.colabContainer}>
        <div><h3>COLABORADORES</h3></div>

        <div className={style.blur}></div>
        <div className={style.colaborators}>
          {colaborators?.map((c, i) => (
            <img key={i} src={c.image} alt={c.link} onClick={() => handleClick(c.link)} />
          ))}
        </div>

      </div>
    </div >
  );
}
