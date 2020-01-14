// Your code goes here
const Logo = document.querySelector('.logo-heading');
Logo.addEventListener('mouseover', () => {
    Logo.textContent = 'Is Great Fun!';
    Logo.style.transform = 'scale(1.5)';
    
})
Logo.addEventListener('mouseleave', () => {
    Logo.textContent = 'Fun Bus';
    Logo.style.transform = 'scale(1)';
})

const intro = document.querySelector('.intro');
intro.addEventListener('mouseenter', () => {
    intro.style.backgroundColor = 'yellow';
})
intro.addEventListener('mouseleave', () => {
    intro.style.backgroundColor = 'white';
})

const click = document.querySelector('.content-destination');
click.addEventListener('dblclick', () => {
    click.style.fontFamily = 'cursive';
})

const mousedown = document.querySelectorAll('img');
mousedown[3].addEventListener('mousedown', () => {
    mousedown[3].src = 'img/beach.jpg';
})

const keydown = document.querySelector('.text-content');
window.addEventListener('keydown', () => {
    keydown.style.color = 'blue';
})

const resize = document.querySelectorAll('img');
window.addEventListener('resize', () => {
    resize[0].style.width = '50%';
})

const destination = document.querySelectorAll('.destination');
window.addEventListener('scroll', () => {
    destination.style.backgroundColor = 'gold';
})