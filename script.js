const check = document.querySelector('.btncheck-div');
const header = document.querySelector('.header');
const posts = document.querySelectorAll('.posts');
const ball = document.querySelector('.ball');
const flag = false;

check.addEventListener('click', ()=>{
    document.body.classList.toggle('active');
    header.classList.toggle('active');
    posts.forEach((e)=>{
        e.classList.toggle('active');
    });
    ball.classList.toggle('checked');

});