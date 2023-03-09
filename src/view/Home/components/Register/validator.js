const validationForm = {
    errors: {},
    /* cardNum: (form) => {
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
    }, */
    firstname:(form) => {
        if(form.firstname.length<2){
            validationForm.errors.firstname = 'El nombre debe ser mas largo que 2 letras'
        }else if(form.firstname.length>20){
            validationForm.errors.firstname = 'El nombre debe tener menos de 20 letras de largo'
        }else if(!form.firstname){
            validationForm.errors.firstname = 'El nombre no puede estar vacio'
        }else if(!form.firstname.match(/^(?=.{2,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i)){
            validationForm.errors.firstname = "El nombre no puede tener caracteres especiales o espacios antes y después del nombre"
        }else{
            delete validationForm.errors.firstname
        }
        return validationForm.errors
    },
    lastname: (form) => {
        if(form.lastname.length<4){
            validationForm.errors.lastname = 'El apellido debe ser mas largo que 4 letras'
        }else if(form.lastname.length>20){
            validationForm.errors.lastname = 'El apellido debe tener menos de 20 letras de largo'
        }else if(!form.lastname){
            validationForm.errors.lastname = 'El apellido no puede estar vacio'
        }else if(!form.lastname.match(/^(?=.{4,20}$)[a-z]+(?:['_.\s][a-z]+)*$/i)){
            validationForm.errors.lastname = "El nombre no puede tener caracteres especiales o espacios antes y después del nombre"
        }else{
            delete validationForm.errors.lastname
        }
        return validationForm.errors
    },
    email:  (form) => {
        if(!form.email){
            validationForm.errors.email = 'El email no puede estar vacio'
        }else if(!form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
            validationForm.errors.email = "Debe introducir un formato de e-mail válido"
        }else{
            delete validationForm.errors.email
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
            validationForm.errors.password = `La contraseña debe tener al menos 1 letra minúscula, 1 numero y 1 letra Mayúscula`
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