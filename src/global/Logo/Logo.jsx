import React from 'react'
import style from './Logo.module.css'
import logo from '../../assets/logo.svg'


export const Logo = () => {
  return (
    <div >
        <img className = {style.logo} src={logo} alt="" />

    </div>
  )
}
