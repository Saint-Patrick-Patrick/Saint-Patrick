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

   


    

  return (
    <nav className = {style.containNavBar}>

      
      {location.pathname === '/register' ? (
      <div className={style.nav}>
        <div className={style.links}>
        <Logo/>          
        <Links/>  
        </div>
      <div className={style.btns1}>
        <BtnLogin/>
      </div>
      </div>   
      ): location.pathname === '/login' ?(
        <div className={style.nav}>
          <div className={style.links}>
          <Logo/>          
          <Links/>  
          </div>
        <div className={style.btns1}>
          <BtnRegister/>
        </div>
        </div>   
        ):(
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


