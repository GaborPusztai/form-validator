const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateFotm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'orange';
        messageContainer.style.borderColor = 'orange';
        return;
    }
    // Check to see if passwords match
    if (passwordEl1.value === passwordEl2.value) {
        passwordsMatch = true;
        passwordEl1.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'orange';
        messageContainer.style.borderColor = 'orange';
        passwordEl1.style.borderColor = 'orange';
        passwordEl2.style.borderColor = 'orange';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateFotm();
    // Submit data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
} 

// event listener
form.addEventListener('submit', processFormData)