import React from 'react'
import style from './HeroImage.module.css'
import { useNavigate } from 'react-router-dom'
import Heroimg from '../../../assets/Heroimg.png'

export function HeroImage(){

    const navigate = useNavigate()

    function handledMasInfo (e) {
        e.preventDefault()
        navigate('/productos')
    }
    return(
        <div className = {style.contain}>
            <div className={style.slogan}>
                <h1 >
                    Transferir dinero <br/>
                    nunca habia sido <br/>
                    tan seguro, fácil y <br/>
                    rápido.              
                </h1>
                <button onClick={ handledMasInfo}>Mas Informacion</button>
            </div>
            
            <div  className={style.containimg}>
              <img className = {style.imghero}src={Heroimg} alt="" />
            </div>
        </div>
    )
}