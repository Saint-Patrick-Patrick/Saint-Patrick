import React from 'react'
import style from './Links.module.css'
import { NavLink } from 'react-router-dom'

export const Links = () => {
  return (
    <div className={style.linkcontainer}>
        <div>
            <NavLink to = '/about' activeClassName = {style.active} className = {style.links}  >
            <h3 className={`${style.h3}`}>About us</h3> 
            </NavLink>
        </div>

        <div>
            <NavLink to = '/products' className = {style.links} >
            <h3 className={`${style.h3}`}>Our Products</h3> 
            </NavLink>
        </div>

        <div>
            <NavLink to = '/benefits' className = {style.links}>
            <h3 className={`${style.h3}`}>We have benefits for you</h3> 
            </NavLink>
        </div>
    </div>
  )
}
