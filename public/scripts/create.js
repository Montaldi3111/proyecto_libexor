const createForm = document.querySelector('.create')
const nameInput = document.querySelector('.name');
const priceInput = document.querySelector('.price');
const descriptionInput = document.querySelector('.description');
const quantityInput = document.querySelector('.quantity');
const colorInput = document.querySelector('.color');
const typeInput = document.querySelector('.type');
const brandInput = document.querySelector('.brand');

nameInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    nameInput.classList.remove('success');
    nameInput.classList.remove('focus');
    nameInput.classList.remove('error');


    let regex = /^(?=(?:[^\A-Za-z0-9]*[\A-Za-z0-9]){2})[~,?,!]*\S+(?: \S+){0,}$/
    if(!regex.test(value)){
        nameInput.classList.remove('success');
        nameInput.classList.add('error');
        error.innerHTML = 'Debe ingresar un nombre válido'
    } else {
        nameInput.classList.remove('error');
        nameInput.classList.add('success');
        error.innerHTML = ''
    }
    
})

priceInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    priceInput.classList.remove('success')
    priceInput.classList.remove('focus')
    priceInput.classList.remove('error')

    let regex = /^[0-9]*$/
    if(!regex.test(value)){
        priceInput.classList.remove('success');
        priceInput.classList.add('error');
        error.innerHTML = 'Debes ingresar un número'
    } else {
        priceInput.classList.remove('error');
        priceInput.classList.add('success');
        error.innerHTML = '';
    }
})

descriptionInput.addEventListener('keyup', e => {
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    descriptionInput.classList.remove('success');
    descriptionInput.classList.remove('focus');
    descriptionInput.classList.remove('error');

    let regex = /^([a-z0-9]{5,})$/
    if(!regex.test(value)){
        descriptionInput.classList.remove('success');
        descriptionInput.classList.add('error');
        error.innerHTML = 'El texto tiene que ser mayor a 5 caracteres'
    } else {
        descriptionInput.classList.remove('error');
        descriptionInput.classList.add('success');
        error.innerHTML = ''
    }
    })

quantityInput.addEventListener('keyup', e =>{
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    quantityInput.classList.remove('success')
    quantityInput.classList.remove('focus')
    quantityInput.classList.remove('error')

    let regex = /^[0-9]*$/
    if(!regex.test(value)){
        quantityInput.classList.remove('success')
        quantityInput.classList.add('error');
        error.innerHTML = 'Debes ingresar un número'
    } else {
        quantityInput.classList.remove('error')
        quantityInput.classList.add('success');
        error.innerHTML = ''
    }
})

colorInput.addEventListener('change', e =>{
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    colorInput.classList.remove('success');
    colorInput.classList.remove('focus');
    colorInput.classList.remove('error');

    if(value==0){
        colorInput.classList.remove('success');
        colorInput.classList.add('error');
        error.innerHTML = 'Este campo es obligatorio'
    } else {
        colorInput.classList.remove('error');
        colorInput.classList.add('success');
        error.innerHTML = ''
    }

})

typeInput.addEventListener('change', e =>{
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    typeInput.classList.remove('success');
    typeInput.classList.remove('focus');
    typeInput.classList.remove('error');

    if(value==0){
        typeInput.classList.remove('success');
        typeInput.classList.add('error');
        error.innerHTML = 'Este campo es obligatorio'
    } else {
        typeInput.classList.remove('error');
        typeInput.classList.add('success');
        error.innerHTML = ''
    }

})

brandInput.addEventListener('change', e =>{
    let target = e.target;
    let value = target.value;
    let fieldset = target.parentElement;
    let error = fieldset.querySelector('.error-msg');

    brandInput.classList.remove('success');
    brandInput.classList.remove('focus');
    brandInput.classList.remove('error');

    if(value==0){
        brandInput.classList.remove('success');
        brandInput.classList.add('error');
        error.innerHTML = 'Este campo es obligatorio'
    } else {
        brandInput.classList.remove('error');
        brandInput.classList.add('success');
        error.innerHTML = ''
    }

})

createForm.addEventListener('submit', e =>{
    e.preventDefault();
    let target = e.target;
    let inputs = document.querySelectorAll('input:not([type=file])')
    let textarea = document.querySelectorAll('textarea');
    let allInputs = inputs.length+textarea.length+3;
    let validInputs = 3;
    inputs.forEach(input =>{
        if(input.classList.contains('success')){
            validInputs++;
        }
    })
    textarea.forEach(text =>{
        if(text.classList.contains('success')){
            validInputs++;
        }
    })

    if(allInputs==validInputs){
        e.submit();
    } else {
        alert('Revisar los campos')
    }
})