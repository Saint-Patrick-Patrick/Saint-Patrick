import React, { useState } from 'react'
import { registerUser } from '../../../../features/apiPetitions'
import validationForm from './validator'

export default function Register() {

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
            registerUser(form)
            .then((data) => {console.log(data), alert('Usuario Registrado correctamente')})
            .catch((e) => console.log(e))
        }else{
            alert('Debe completar todos los campos sin errores')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', minHeight:'500px', justifyContent:'space-around'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <small>Nombre</small>
                <input type="text" name='firstname' value={form.firstname} onChange={handleChange} placeholder='Nombre'/>
                <small>{errors?.firstname}</small>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <small>Apellido</small>
                <input type="text" name='lastname' value={form.lastname} onChange={handleChange} placeholder='Apellido'/>
                <small>{errors?.lastname}</small>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <small>Correo</small>
                <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='Correo'/>
                <small>{errors?.email}</small>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <small>Contraseña</small>
                <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='Contraseña'/>
                <small>{errors?.password}</small>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <small>Confirmar Contraseña</small>
                <input type="password" name='confirmPassword' value={form.confirmPassword} onChange={handleChange} placeholder='Confirmar Contraseña'/>
                <small>{errors?.confirmPassword}</small>
            </div>
        
            <input type="submit" value={'Registrarse'}/>
        </form>
    </div>
  )
}
