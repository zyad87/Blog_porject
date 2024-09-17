document.addEventListener('DOMContentLoaded', function () {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName'); 

    const navbar = document.querySelector('.navbar-nav');
    const loginBtn = document.querySelector('#loginBtn');
    const signUpBtn = document.querySelector('#signUpBtn');
    const profileBtn = document.querySelector('#profileBtn');
    const profileText = profileBtn.querySelector('a'); 
    const newArticleBtn = document.querySelector('#newArticleBtn');
    const signOutBtn = document.querySelector('#signOutBtn');

    if (userId) {
        loginBtn.style.display = 'none';
        signUpBtn.style.display = 'none';
        profileBtn.style.display = 'block';
        newArticleBtn.style.display = 'block';
        signOutBtn.style.display = 'block';
        profileText.innerHTML = `<i class="fa-solid fa-user"></i> ${userName}`;
    } else {
        loginBtn.style.display = 'block';
        signUpBtn.style.display = 'block';
        profileBtn.style.display = 'none';
        newArticleBtn.style.display = 'none';
        signOutBtn.style.display = 'none';

        profileText.innerHTML = `<i class="fa-solid fa-user"></i> Profile`;
    }

    signOutBtn.addEventListener('click', function () {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName'); 
        window.location.href = './index.html';
    });
});
