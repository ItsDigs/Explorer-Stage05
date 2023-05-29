
export default function({
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

btnForest.addEventListener('click', (event) => {
    if(!event.target.classList.contains('slider')){
        sounds.audioButtons(btnForest, sounds.forestAudio)
        sliForest.value = 50
    }
})

sliForest.addEventListener('change', () => {
    sounds.soundControl(sliForest, sounds.forestAudio)
})

btnCloud.addEventListener('click', (event) => {
    if(!event.target.classList.contains('slider')){
        sounds.audioButtons(btnCloud, sounds.cloudAudio)
        sliCloud.value = 50
    }
})

sliCloud.addEventListener('change', () => {
    sounds.soundControl(sliCloud, sounds.cloudAudio)
})

btnStore.addEventListener('click', (event) => {
    if(!event.target.classList.contains('slider')){
        sounds.audioButtons(btnStore, sounds.storeAudio)
        sliStore.value = 50
    }
})

sliStore.addEventListener('change', () => {
    sounds.soundControl(sliStore, sounds.storeAudio)
})

btnFire.addEventListener('click', (event) => {
    if(!event.target.classList.contains('slider')){
        sounds.audioButtons(btnFire, sounds.fireAudio)
        sliFire.value = 50
    }
})

sliFire.addEventListener('change', () => {
    sounds.soundControl(sliFire, sounds.fireAudio)
})

btnSun.addEventListener('click', () =>{
    btnSun.classList.toggle('hide')
    btnMoon.classList.toggle('hide')
    root.style.setProperty('--svg-fill', '#C4C4CC')
    root.style.setProperty('--bg-color', 'black')
    root.style.setProperty('--txt-color', 'white')
    root.style.setProperty('--btn-bgcolor', '#29292E')
    root.style.setProperty('--btn-activeBgColor', '#0A3442')
    root.style.setProperty('--sli-color', 'white')
})

btnMoon.addEventListener('click', () =>{
    btnMoon.classList.toggle('hide')
    btnSun.classList.toggle('hide')
    root.style.setProperty('--svg-fill', 'black')
    root.style.setProperty('--bg-color', 'white')
    root.style.setProperty('--txt-color', 'black')
    root.style.setProperty('--btn-bgcolor', '#E1E1E6')
    root.style.setProperty('--btn-activeBgColor', '#02799D')
    root.style.setProperty('--sli-color', 'black')
})

}
