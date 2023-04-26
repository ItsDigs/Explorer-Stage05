export default function timer({minutesDisplay, secondsDisplay, btnPause, btnPlay}){

    let startingMinutes = prompt('Minutes?')
    let minutes

    if (isNaN(startingMinutes) || startingMinutes == 0){
        alert('Invalid value, 25 min selected as default')
        startingMinutes = 25
        minutes = startingMinutes
        console.log(startingMinutes)
    } else { 
        minutes = startingMinutes
        updateDisplay(minutes,)
    }
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
                kitchenTimer.play()
                return
            }
    
            if (seconds <= 0){
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, String(--seconds))
            countdown()
            
        },1000)
    }
    
    function pauseTimer(){
        clearTimeout(timerTimeOut)
    }

    function resetControls(){
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
    }
    
    function resetTimer(){
        pauseTimer()
        resetControls()
        minutes = startingMinutes
        minutesDisplay.textContent = String(startingMinutes)
        secondsDisplay.textContent = '00'
    }
    
    return{
        updateDisplay,
        countdown,
        pauseTimer,
        resetTimer,
        resetControls,
        minutes
    }
}



