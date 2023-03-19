import React from 'react'
import style from './Links.module.css'
import { NavLink } from 'react-router-dom'

export const Links = () => {
  return (
    <div className={style.linkcontainer}>
        <div>
            <NavLink to = '/about' activeClassName = {style.active} className = {style.links}  >
            <h3 className={`${style.h3}`}>Nosotros</h3> 
            </NavLink>
        </div>

        <div>
            <NavLink to = '/products' className = {style.links} >
            <h3 className={`${style.h3}`}>Nuestros productos</h3> 
            </NavLink>
        </div>

        <div>
            <NavLink to = '/benefits' className = {style.links}>
            <h3 className={`${style.h3}`}>Tenemos beneficios para ti</h3> 
            </NavLink>
        </div>
    </div>
  )
}
