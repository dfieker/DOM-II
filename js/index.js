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

const contentPick = document.querySelector('.content-pick');
window.addEventListener('scroll', () => {
    contentPick.style.backgroundColor = 'gold';
});

const destination = document.querySelectorAll('.destination');
window.addEventListener('scroll', (event) => {
    destination[2].style.color = 'blue';
    event.stopPropagation();
});

const Adventure = document.querySelectorAll('h2');
Adventure[2].addEventListener('mouseup', () => {
    Adventure[2].textContent = 'For You!!';
});
Adventure[2].addEventListener('mouseleave', () => {
    Adventure[2].textContent = 'Adventure Awaits';
});

const bgColor = document.querySelectorAll('.text-content');
bgColor[1].addEventListener('mousemove', () => {
    bgColor[1].style.backgroundColor = 'gray';
    bgColor[1].style.color = 'yellow';
});
bgColor[1].addEventListener('mouseleave', () => {
    bgColor[1].style.backgroundColor = 'white';
    bgColor[1].style.color = 'black';
});

const nav = document.querySelector('.nav');
    nav.addEventListener('click', (event) => {
        event.preventDefault();
    });