import React from 'react'
import style from './BtnLogin.module.css'
import {useNavigate } from "react-router-dom"

export const BtnLogin = () => {

 const navigate = useNavigate()

 function handledLogin (e) {
    e.preventDefault()
    navigate('/login')
  }
  
  return (
    <div>
        <button className = {`${style.btnLogin} ${style.btn1}`} onClick = {handledLogin}>Inicia sesion</button>
    </div>
  )
}
