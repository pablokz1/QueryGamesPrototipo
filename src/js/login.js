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