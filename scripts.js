// scripts.js
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Form validation and submission logic here
    alert('Login form submitted');
});

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordField.setAttribute('type', 'password');
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});
