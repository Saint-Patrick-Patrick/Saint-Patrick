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
                <h1>
                    Transferir dinero <br/>
                    nunca había sido <br/>
                    tan seguro, fácil y <br/>
                    rápido.              
                </h1>
                <button className ={style.masinfobtn} onClick={ handledMasInfo}>Mas Informacion</button>
            </div>
            
            <div  className={style.containimg}>
              <img src={Heroimg} className = {style.imghero} alt="" />
            </div>
        </div>
    )
}