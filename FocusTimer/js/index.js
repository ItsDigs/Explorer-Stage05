import Timer from './timer.js'
import Events from './events.js'
import Sounds from './sounds.js'

//HTML elements and variables
let secondsDisplay = document.querySelector('#seconds')
let minutesDisplay = document.querySelector('#minutes')

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')
const btnSun = document.querySelector('#sun')
const btnMoon = document.querySelector('#moon')
const root = document.querySelector(':root')

const btnForest = document.querySelector('.forest')
const btnCloud = document.querySelector('.cloud')
const btnStore = document.querySelector('.store')
const btnFire = document.querySelector('.fire')
const sliForest = document.querySelector('.forest .slider')
const sliCloud = document.querySelector('.cloud .slider')
const sliStore = document.querySelector('.store .slider')
const sliFire = document.querySelector('.fire .slider')

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    btnPause, 
    btnPlay,
    btnMinus,
    btnPlus,
    kitchenTimer: sounds.kitchenTimer
})

Events({
    btnCloud,
    btnFire,
    btnForest,
    btnPause,
    btnPlay,
    btnStop,
    btnStore,
    sliCloud,
    sliFire,
    sliForest,
    sliStore,
    btnSun,
    btnMoon,
    root,
    timer,
    sounds
})