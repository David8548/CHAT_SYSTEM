const signInBtn = document.getElementById('signInBtn');
const createAccountBtn = document.getElementById('createAccountBtn');

signInBtn.addEventListener('click', () => {
    window.location.href = '../html/login.html';
})

createAccountBtn.addEventListener('click', () => {
    window.location.href = '../html/register.html';
})