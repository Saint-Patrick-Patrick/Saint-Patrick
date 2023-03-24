import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './Links.module.css'


export const NavLinkActive = ({ linkPath, nameDescription }) => {
  const { pathname } = useLocation()

  return (
    <div>
      <NavLink
        to={linkPath}
        className={pathname === linkPath ? `${style.active}` : style.links}
      >
        <h3 className={`${style.h3}`}>{nameDescription}</h3>
      </NavLink>
    </div>
  )
}
