const cookieBtn = document.querySelector('.screen1 img')
const secondBtn = document.querySelector('.screen2 button')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

cookieBtn.addEventListener('click', toggleScreen)
secondBtn.addEventListener('click', toggleScreen)


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}