import React from 'react'
import {Link} from 'react-router-dom'
import style from './Logo.module.css'
import logo from '../../assets/logo.svg'


export const Logo = () => {
  return (
    <div >
        <Link to = '/'>
        <img className = {style.logo} src={logo} alt="" />
        </Link>
      

    </div>
  )
}
