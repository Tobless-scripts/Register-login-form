const eyeMaster= document.querySelector('.eyeMaster')

const password = document.querySelector('.password');
const eye = document.querySelector('.eye');

eye.addEventListener('click', function(){
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  if (type === 'password') {
    eye.src = 'images (10)~2.png'
  }else{
    eye.src = 'images (10)~3.png';
  }
});

const password2 = document.getElementById('confirm_password');
const eye2 = document.querySelector('.eye2');

eye2.addEventListener('click', function(){
  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  if (type === 'password') {
    eye2.src = 'images (10)~2.png'
  }else{
    eye2.src = 'images (10)~3.png';
  }
});


const password3 = document.getElementById('loginPassword');
const eye3 = document.querySelector('.eye3');

eye3.addEventListener('click', function(){
  const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
  password3.setAttribute('type', type);
  if (type === 'password') {
    eye3.src = 'images (10)~2.png'
  }else{
    eye3.src = 'images (10)~3.png';
  }
});

const loginBtn = document.querySelector('.login');
const registerBtn = document.querySelector('.register');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');

// Show register form by default
registerForm.classList.add('active');

registerBtn.addEventListener('click', function() {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

loginBtn.addEventListener('click', function() {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
});
