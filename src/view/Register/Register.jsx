import React, { useState } from 'react'
import style from "./Register.module.css"
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { registerUser } from '../../features/apiPetitions'
import validationForm from './validator'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState()
    const [form, setForm]  = useState({
        email: '',
        firstname: '',
        lastname:'',
        password: '',
        confirmPassword:''
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setErrors(validationForm[name]({...form, [name]:value}))    
        setForm({...form, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!Object.keys(errors).at(0)){
            delete form.confirmPassword
            registerUser(form, dispatch)
            .then(() => {alert('Usuario Registrado correctamente')})
            .then(() => navigate('/wallet'))
            .catch((e) => console.log(e))
            setForm({
                email: '',
                firstname: '',
                lastname:'',
                password: '',
                confirmPassword:''
            })
            
        }else{
            alert('Debe completar todos los campos sin errores')
        }
    }

  return (
    <div className={style.formcontainer}>
        <h1>Registrate</h1>
     
        <form  className = {style.form} onSubmit={handleSubmit}>
            
                <label className={style.label}>Nombre</label>
                <input 
                className = {style.inputext}
                type="text" 
                name='firstname' 
                value={form.firstname} 
                onChange={handleChange} 
                placeholder='Nombre'/>
                <small>{errors?.firstname}</small>
           
            
                <label className={style.label}>Apellido</label>
                <input 
                className = {style.inputext}
                type="text" 
                name='lastname' 
                value={form.lastname} 
                onChange={handleChange} 
                placeholder='Apellido'/>
                <small>{errors?.lastname}</small>
            
                <label className={style.label}> Correo</label>
                <input 
                className = {style.inputext}
                type="text" 
                name='email' 
                value={form.email} 
                onChange={handleChange} 
                placeholder='Correo'/>
                <small>{errors?.email}</small>
            
                <label className={style.label}>Contraseña</label>
                <div>
                <input 
                className = {style.inputpassword}
                type="password" 
                name='password' 
                value={form.password} 
                onChange={handleChange} 
                placeholder='Contraseña'/>
                <small>{errors?.password}</small>
                <span className={style.eye}><FiEye/></span>
                <span className={style.eye}><FiEyeOff/></span>

                </div>
            
                <label className={style.label}>Confirmar Contraseña</label>
                <div>
                <input 
                className = {style.inputpassword}
                type="password" 
                name='password' 
                value={form.password} 
                onChange={handleChange} 
                placeholder='Contraseña'/>
                <small>{errors?.password}</small>
                <span className={style.eye}><FiEye/></span>
                <span className={style.eye}><FiEyeOff/></span>

                </div>
            
        
            <button className={style.btn_submit} type="submit" value={'Registrarse'}>Registrar</button>
        </form>
       
    </div>
  )
}
