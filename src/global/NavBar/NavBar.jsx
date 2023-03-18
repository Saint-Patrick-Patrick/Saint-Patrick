import React from 'react'
import style from './NavBar.module.css'
import {Logo} from '../Logo/Logo'
import { NavLink , useLocation, useNavigate } from "react-router-dom"


export function NavBar () {

    const location = useLocation()
    const navigate = useNavigate()

    function handledInicioSesion (e) {
      e.preventDefault()
      navigate('/iniciasesion')
    }

    function handledRegister(e){
      e.preventDefault()
      navigate('/register')
    }

    function handledClosed (e) {
      e.preventDefault()
      navigate('/')
    }

  return (
    <nav className = {style.containNavBar}>

      
      {location.pathname === '/register' ? (
        <div >
            <button className = {style.btnInicio} onClick = {handledInicioSesion}>Inisio Sesion</button>
            <button className = {style.btnClosed} onClick = {handledClosed}> X</button>
        </div>    
      ): (
        <div className={style.nav}>
          <Logo/>
          <div>
            <NavLink to = '/about'>
            <h3>Sobre Nosotros</h3> 
            </NavLink>
            </div>

            <div>
            <NavLink to = '/productos'>
            <h3>Nuestros productos</h3> 
            </NavLink>
            </div>

            <div>
            <NavLink to = '/beneficios'>
            <h3>Tenemos beneficios para ti</h3> 
            </NavLink>
            </div>
          <button className = {style.register} onClick = {handledRegister}>Register</button>
          <button className = {style.btnInicio} onClick = {handledInicioSesion}>Inisio Sesion</button>
        </div>
      )


      }
        

    </nav>
  )
}


