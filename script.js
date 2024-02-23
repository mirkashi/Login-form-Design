const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.Register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


RegisterLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-Popup');
});
iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-Popup');
});

