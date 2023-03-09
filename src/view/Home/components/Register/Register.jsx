import React, { useState } from 'react'
import validationForm from './validator'

export default function Register() {

    const [errors, setErrors] = useState()
    const [form, setForm]  = useState({
        cardNum: null,
        DNI: null,
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
            
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='cardNum' value={form.cardNum} onChange={handleChange}/>
            <input type="text" name='DNI' value={form.DNI} onChange={handleChange}/>
            <input type="password" name='password' value={form.password} onChange={handleChange}/>
            <input type="password" name='confirmPassword' value={form.confirmPassword} onChange={handleChange}/>
            <input type="submit" value={'Registrarse'}/>
        </form>
    </div>
  )
}
