const container = document.querySelector('.container');
const Loginlink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');
RegisterLink.addEventListener('click',()=>{
  container.classList.add('active');
})
