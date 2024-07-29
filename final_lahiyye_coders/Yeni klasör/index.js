document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm form');
    const signupForm = document.querySelector('#signupForm form');
    const switchLinks = document.querySelectorAll('.switch-link');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    const forgotPasswordBtn = document.querySelector('.forgot-password-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    function togglePasswordVisibility(passwordInput, toggleBtn) {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        toggleBtn.querySelector('img').src = `${type === 'password' ? 'Hide' : 'Show'}.svg`;
        toggleBtn.querySelector('img').alt = `${type === 'password' ? 'Hide' : 'Show'}`;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());


    function handleSubmit(e, formType) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value.trim();
        const password = form.querySelector('input[type="password"]').value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (formType === 'signup') {
            const name = form.querySelector('input[name="name"]').value.trim();
            if (name.length < 2) {
                alert('Please enter your full name.');
                return;
            }
            console.log('Sign up submitted:', { name, email, password });
        } else {
            console.log('Login submitted:', { email, password });
        }

        form.reset();
    }

    function handleForgotPassword() {
        const email = prompt('Please enter your email address:');
        if (email && validateEmail(email)) {
            console.log('Password reset requested for:', email);
            alert('If an account exists for this email, you will receive password reset instructions.');
        } else if (email) {
            alert('Please enter a valid email address.');
        }
    }

    function handleClose() {
        console.log('Form closed');
    }

    function switchForm(e) {
        e.preventDefault();
        const targetForm = e.target.dataset.form;
        document.getElementById('loginForm').classList.toggle('hidden');
        document.getElementById('signupForm').classList.toggle('hidden');
    }

    loginForm.addEventListener('submit', (e) => handleSubmit(e, 'login'));
    signupForm.addEventListener('submit', (e) => handleSubmit(e, 'signup'));

    togglePasswordBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => togglePasswordVisibility(passwordInputs[index], btn));
    });

    forgotPasswordBtn.addEventListener('click', handleForgotPassword);

    closeBtns.forEach(btn => {
        btn.addEventListener('click', handleClose);
    });

    switchLinks.forEach(link => {
        link.addEventListener('click', switchForm);
    });
});


// function togglePasswordVisibility() {
//     const passwordInput = document.querySelector('.password-input');
//     const hideIcon = document.querySelector('.hide-icon');
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         hideIcon.src = 'Show.svg';
//     } else {
//         passwordInput.type = 'password';
//         hideIcon.src = 'Hide.svg';
//     }
// }
