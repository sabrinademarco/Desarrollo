let intentos = 3;
let userName = 'gus';
let passWord = '123';

function checkLogin(){
    while(intentos>0){
        let inputUsername=prompt("Ingrese su nombre d usuario: ")
        let inputPassword=prompt("Ingrese su contraseña: ")

        if (inputUsername== userName && inputPassword == passWord){
            alert('Inició correctamente')
            break;
        }
        else{
            intentos--
            alert(`Usuario o contraseña incorrectos, intentos restantes: ${intentos}`)
        }
    
    }
    if (intentos==0){
        alert('Has agotado tus intentos')
    }
}

checkLogin()