import React from 'react'
import style from './NavBar.module.css'
import { Logo } from '../Logo/Logo'
import { BtnLogin } from './Components/BtnLogin'
import { BtnRegister } from './Components/BtnRegister'
import { useLocation, useNavigate } from "react-router-dom"
import { Links } from './Components/Links'


export function NavBar() {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={style.containNavBar}>

      <div className={`${style.nav} ${style.container}`}>
        <Logo />
        <Links />
        <div className={style.btns}>
          {
            location.pathname !== '/register' && location.pathname !== '/login' &&
            (
              <>
                <BtnRegister />
                <BtnLogin />
              </>
            )
          }
          {location.pathname === '/login' && <BtnRegister />}
          {location.pathname === '/register' && <BtnLogin />}
        </div>
      </div>
    </nav>
  )
}


