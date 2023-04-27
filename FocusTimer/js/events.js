
export default function({
    btnCloud,
    btnFire,
    btnForest,
    btnPause,
    btnPlay,
    btnStop,
    btnStore,
    timer,
    sounds
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
    sounds.audioButtons(btnForest, sounds.forestAudio)
})


btnCloud.addEventListener('click', () => {
    sounds.audioButtons(btnCloud, sounds.cloudAudio)
})

btnStore.addEventListener('click', () => {
    sounds.audioButtons(btnStore, sounds.storeAudio)
})

btnFire.addEventListener('click', () => {
    sounds.audioButtons(btnFire, sounds.fireAudio)
})

}
