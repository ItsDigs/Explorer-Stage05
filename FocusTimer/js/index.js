//HTML elements and variables
let secondsDisplay = document.querySelector('#seconds')
let minutesDisplay = document.querySelector('#minutes')
let minutes = Number(minutesDisplay.textContent)

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')

const btnForest = document.querySelector('.forest')
const btnCloud = document.querySelector('.cloud')
const btnStore = document.querySelector('.store')
const btnFire = document.querySelector('.fire')

const forestAudio = new Audio('')
const cloudAudio = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")
const storeAudio = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view")
const fireAudio = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view")

//Events
btnPlay.addEventListener('click', () => {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    countdown()
})

function resetControls(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
}

btnPause.addEventListener('click', () => {
    resetControls()
    pauseTimer()
})

btnStop.addEventListener('click', () => {
    resetTimer()
})

btnPlus.addEventListener('click', () => {
    minutes += 5
    updateDisplay(String(minutes),)
})

btnMinus.addEventListener('click', () => {
    minutes -= 5
    if (minutes <= 0){minutes = 0}
    updateDisplay(String(minutes),)
    
})

btnForest.addEventListener('click', () => {
    audioButtons(btnForest, forestAudio)
})

btnCloud.addEventListener('click', () => {
    audioButtons(btnCloud, cloudAudio)
})

btnStore.addEventListener('click', () => {
    audioButtons(btnStore, storeAudio)
})

btnFire.addEventListener('click', () => {
    audioButtons(btnFire, fireAudio)
})

//Functions
let timerTimeOut

function updateDisplay(minutes, seconds){
    let newMinutes = minutes === undefined ? Number(minutesDisplay.textContent) : minutes
    let newSeconds = seconds === undefined ? Number(secondsDisplay.textContent) : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
    secondsDisplay.textContent = String(newSeconds).padStart(2,'0')
}

function countdown(){
    timerTimeOut = setTimeout(() =>{
        let seconds = Number(secondsDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <=0

        if (isFinished){ 
            resetTimer()
            return
        }

        if (seconds <= 0){
            seconds = 6
            --minutes
        }

        updateDisplay(minutes, String(--seconds))
        countdown()
        
    },1000)
}

function pauseTimer(){
    clearTimeout(timerTimeOut)
}

function resetTimer(){
    pauseTimer()
    resetControls()
    minutes = 25
    minutesDisplay.textContent = '25'
    secondsDisplay.textContent = '00'
}

function audioButtons (button, audio){
    // if (audio.paused){
    //     audio.play()
    // }else {
    //     audio.pause()
    // }
    audio.play()
    button.classList.toggle('active')
}