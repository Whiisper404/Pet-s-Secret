document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegisterForm()) {
                alert('Регистрация успешна! Теперь вы можете войти в систему.');
                window.location.href = 'login.html';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateLoginForm()) {
                alert('Вход выполнен успешно!');
                window.location.href = 'profile.html';
            }
        });
    }

    setupRealTimeValidation();
});

function validateRegisterForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    resetErrors();

    if (!name.value.trim()) {
        showError('nameError', 'Введите имя и фамилию');
        isValid = false;
    }
    if (!validateEmail(email.value)) {
        showError('emailError', 'Введите корректный email');
        isValid = false;
    }

    if (!validatePhone(phone.value)) {
        showError('phoneError', 'Введите корректный номер телефона');
        isValid = false;
    }

    if (password.value.length < 6) {
        showError('passwordError', 'Пароль должен содержать минимум 6 символов');
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError('confirmPasswordError', 'Пароли не совпадают');
        isValid = false;
    }

    return isValid;
}

function validateLoginForm() {
    let isValid = true;
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    resetErrors();

    if (!validateEmail(email.value)) {
        showError('loginEmailError', 'Введите корректный email');
        isValid = false;
    }

    if (!password.value) {
        showError('loginPasswordError', 'Введите пароль');
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    return re.test(phone);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.style.display = 'none';
        element.textContent = '';
    });
}

function setupRealTimeValidation() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');

    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                showError('nameError', 'Введите имя и фамилию');
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (!validateEmail(this.value)) {
                showError('emailError', 'Введите корректный email');
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (!validatePhone(this.value)) {
                showError('phoneError', 'Введите корректный номер телефона');
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('blur', function() {
            if (this.value.length < 6) {
                showError('passwordError', 'Пароль должен содержать минимум 6 символов');
            } else {
                document.getElementById('passwordError').style.display = 'none';
            }
        });
    }

    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('blur', function() {
            const password = document.getElementById('password').value;
            if (this.value !== password) {
                showError('confirmPasswordError', 'Пароли не совпадают');
            } else {
                document.getElementById('confirmPasswordError').style.display = 'none';
            }
        });
    }

    if (loginEmailInput) {
        loginEmailInput.addEventListener('blur', function() {
            if (!validateEmail(this.value)) {
                showError('loginEmailError', 'Введите корректный email');
            } else {
                document.getElementById('loginEmailError').style.display = 'none';
            }
        });
    }

    if (loginPasswordInput) {
        loginPasswordInput.addEventListener('blur', function() {
            if (!this.value) {
                showError('loginPasswordError', 'Введите пароль');
            } else {
                document.getElementById('loginPasswordError').style.display = 'none';
            }
        });
    }
}