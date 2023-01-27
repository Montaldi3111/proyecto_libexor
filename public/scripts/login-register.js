const registerForm = document.forms.register
const usernameInput = document.querySelector(".username");
const emailInput = document.querySelector(".email");
const repeatEmailInput = document.querySelector(".repeat-email");
const passwordInput = document.querySelector(".password");
const repeatPasswordInput = document.querySelector(".repeat-password");

usernameInput.addEventListener("keyup", e => {
    let target = e.target
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')

    usernameInput.classList.remove('error');
    usernameInput.classList.remove('focus');
    usernameInput.classList.remove('success');


    let regex = /^([a-z0-9]|[-._](?![-._])){5,12}$/
    if(!regex.test(value)){
        usernameInput.classList.remove('success');
        usernameInput.classList.add('error');
        error.innerHTML = 'El nombre de usuario debe contener 5 caractreres minimo y 12 caracteres máximo'
    } else {
        usernameInput.classList.remove('error');
        usernameInput.classList.add('success');
        error.innerHTML = '';
    }
})

emailInput.addEventListener("keyup", e => {
    let target = e.target
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')

    emailInput.classList.remove('error');
    emailInput.classList.remove('focus');
    emailInput.classList.remove('success');

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if(!regex.test(value)){
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        error.innerHTML = 'Debe ingresar un email válido'
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        error.innerHTML = '';
    }
})


repeatEmailInput.addEventListener("keyup", e => {
    let target = e.target
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')
    let email = emailInput.value;

    repeatEmailInput.classList.remove('error');
    repeatEmailInput.classList.remove('focus');
    repeatEmailInput.classList.remove('success');

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if(!regex.test(value)){
        repeatEmailInput.classList.remove('success');
        repeatEmailInput.classList.add('error');
        error.innerHTML = 'Debes ingresar un email válido'
    } else {
        if(email != value){
            repeatEmailInput.classList.remove('success');
            repeatEmailInput.classList.add('error');
            error.innerHTML = 'El email debe coincidir'
        }else {
            repeatEmailInput.classList.remove('error');
            repeatEmailInput.classList.add('success');
            error.innerHTML = '';
        }
        
    }
})

passwordInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement
    let error = fieldset.querySelector('.error-msg')

    passwordInput.classList.remove('success');
    passwordInput.classList.remove('focus');
    passwordInput.classList.remove('error');

    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/
    if(!regex.test(value)){
        passwordInput.classList.remove('success');
        passwordInput.classList.add('error');
        error.innerHTML = 'La contraseña debe contener minimo 4 caracteres, una minuscula, una mayúscula y un número. La contraseña no puede contener caracteres especiales'
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        error.innerHTML = '';
    }
})

repeatPasswordInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg')
    let password = passwordInput.value;

    repeatPasswordInput.classList.remove('error');
    repeatPasswordInput.classList.remove('focus');
    repeatPasswordInput.classList.remove('success');

    if(password!=value){
        repeatPasswordInput.classList.remove('success');
        repeatPasswordInput.classList.add('error');
        error.innerHTML = 'Las contraseñas deben coincidir';
    } else {
        repeatPasswordInput.classList.remove('error');
        repeatPasswordInput.classList.add('success');
        error.innerHTML = ''
    }
})

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    let target = e.target;
    let allInputs = target.querySelectorAll('input:not([type=file])');
    console.log(allInputs)
    let validInputs = 0;
    allInputs.forEach(input => {
        if(input.classList.contains('success')&&input){
            validInputs++;
        }
    })
    console.log(validInputs)
    if(validInputs == allInputs.length){
        target.submit();
    } else {
        alert('Revisar los campos')
    }
})



