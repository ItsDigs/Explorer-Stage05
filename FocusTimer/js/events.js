export default function({
    btnCloud,
    btnFire,
    btnForest,
    btnMinus,
    btnPause,
    btnPlay,
    btnPlus,
    btnStop,
    btnStore,
    audioButtons,
    timer,
}){


//Events
btnPlay.addEventListener('click', () => {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    timer.countdown()
})

btnPause.addEventListener('click', () => {
    timer.resetControls()
    timer.pauseTimer()
})

btnStop.addEventListener('click', () => {
    timer.resetTimer()
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
}
