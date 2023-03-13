var formulario = document.getElementById('form-login')
var nombre = document.getElementById('nombre-login')
var pass = document.getElementById('pass-login')
var email = document.getElementById('email-login')
var nacimiento = document.getElementById('nacimiento-login')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")
var expEsp = RegExp("[^\s]+")
var expMail = RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    var error = ""
  /*  if(nombre.value.match(expEsp)){
        error += "El nombre no debe llevar espacios " 
    }*/if(!pass.value.match(expMay)){
        error += "la contraseña debe tener una mayuscula "
    }if(!pass.value.match(expMin)){
        error += "la contraseña debe tener una minuscula "
    }if(!pass.value.match(expNum)){
        error += "la contraseña debe tener un numero "
    }/*if(pass.value.match(expEsp)){
        error += "la contraseña no debe contener espacios "
    }if(email.value.match(expMail)){
        error += "El formato de correo no coincide "
    }*/
    
    if (error==""){
        alert("Bienvenido "+document.getElementById('nombre-login').value)
        formulario.closeWindow()
    }else{
        alert(error)
    }
    
    formulario.reset();
    

})