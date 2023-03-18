import React from 'react'
import style from './NavBar.module.css'
import {Logo} from '../Logo/Logo'
import { BtnLogin } from './Components/BtnLogin'
import { BtnRegister } from './Components/BtnRegister'
import { NavLink , useLocation, useNavigate } from "react-router-dom"
import { Links } from './Components/Links'


export function NavBar () {

    const location = useLocation()
    const navigate = useNavigate()

   


    function handledClosed (e) {
      e.preventDefault()
      navigate('/')
    }

  return (
    <nav className = {style.containNavBar}>

      
      {location.pathname === '/register' ? (
        <div >
            <BtnLogin/>
            <button className = {style.btnClosed} onClick = {handledClosed}> X</button>
        </div>    
      ): (
        <div className={style.nav}>
          <Logo/>          
          <Links/>  
        <div className={style.btns}>
          <BtnLogin/>
          <BtnRegister/>
          </div>
        </div>
      )


      }
        

    </nav>
  )
}


