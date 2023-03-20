import React from 'react'
import style from './BtnRegister.module.css'
import {useNavigate } from "react-router-dom"

export const BtnRegister = () => {
    const navigate = useNavigate()

    function handledRegister (e) {
       e.preventDefault()
       navigate('/register')
     }
     
     return (
       <div>
           <button className = {`${style.btnRegister} ${style.btn1}`} onClick = {handledRegister}>Registrate</button>
       </div>
     )
}
