function login() {
    var emaiInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;

    var user = {
        email: 'admin',
        password: '123456'
    }

    if(emaiInput != user.email || passwordInput !== user.password) {
        alert('Usuário ou senha incorreta!');
    } else {
        window.location.href = '../index.html';
    }
}

function showPassword() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-password');

    if(inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}