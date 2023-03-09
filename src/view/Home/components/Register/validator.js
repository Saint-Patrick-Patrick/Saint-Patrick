const validationForm = {
    errors: {},
    cardNum: (form) => {
        if(form.cardNum.length!==16){
            validationForm.errors.cardNum = 'Introduza un múmero de tarjeta válido'
        }else if(!form.cardNum){
            validationForm.errors.cardNum = 'Debe completar este campo'
        }else if(!form.cardNum.match(/^[0-9]*$)/)){
            validationForm.errors.cardNum = 'Solo números son aceptados'
        }else{
            delete validationForm.errors.cardNum
        }
        return validationForm.errors
    },
    DNI: (form) => {
        if(form.DNI.length>8 || form.DNI.length<7){
            validationForm.errors.DNI = 'El número de DNI debe tener 7 u 8 dígitos'
        }else if(!form.DNI){
            validationForm.errors.DNI = 'Debe completar este campo'
        }else if(!form.DNI.match(/^[0-9]*$)/)){
            validationForm.errors.DNI = 'Solo números son aceptados'
        }else{
            delete validationForm.errors.DNI
        }
        return validationForm.errors
    },
    password: (form) => {
        if(!form.password){
            validationForm.errors.password = 'La contraseña no puede estar vacio'
        }if(form.password.length<8){
            validationForm.errors.password = 'La contraseña debe tener al menos un largo de 8 caracteres'
        }else if(form.password.length>25){
            validationForm.errors.password = 'La contraseña debe tener un largo menor a 25 caracteres'
        }else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,26}$/.test(form.password)){
            validationForm.errors.password = `El repetir contraseña debe tener al menos 1 letra minúscula, 1 numero y 1 letra Mayúscula`
        }else{
            delete validationForm.errors.password
        }
        return validationForm.errors
    },
    confirmPassword: (form) => {
      
        if(form.confirmPassword !== form.password){
            validationForm.errors.confirmPassword = 'La contraseña y el repetir contraseña no son las mismas'
        }else{
            delete validationForm.errors.confirmPassword
        }
        return validationForm.errors
    }
}

export default validationForm