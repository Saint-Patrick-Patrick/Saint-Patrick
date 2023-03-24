import React from 'react'
import style from './Links.module.css'
import { NavLink } from 'react-router-dom'
import { NavLinkActive } from './NavLinkActive'

const links = [
  {
    id: 1,
    path: 'about',
    name: 'Nosotros'
  },
  {
    id: 2,
    path: 'products',
    name: 'Nuestros productos'
  },
  {
    id: 3,
    path: 'benefits',
    name: 'Tenemos beneficios para ti'
  }
]
export const Links = () => {
  return (
    <div className={style.linkcontainer}>
      {
        links.map((link) => (
          <NavLinkActive key={link.id} linkPath={`/${link.path}`} nameDescription={link.name} />
        ))
      }

    </div>
  )
}
