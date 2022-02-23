// cada ciclo es de 25min de estudio 5 de descanso luego de realizar 4 ciclos (2h) toma un descanso de 20min y reinicia el ciclo
let textMinute = document.getElementById('textMinute')
let textSecond = document.getElementById('textSecond')
let textBreak = document.getElementById('break')
let round = document.getElementById('round')


let minuteStudy = 0;
let secondStudy = 3;
let minuteBreak = 0;
let secondBreak = 2;
let interval = null;
let count = 1;


function startGame() {
    
    intervalTime(true)
    

    event.target.setAttribute('disabled','');

    pause.onclick = () => {
        clearInterval(interval);
        start.removeAttribute('disabled')
    }

        
    
}


function intervalTime(flag) {
    if(flag) {
        interval = setInterval(timer,1000);
    } else {
        clearInterval(interval)
    }
}


function timer() {
    //24min
    
    if(secondStudy >= 0) {

        textMinute.innerHTML = minuteStudy  
        textSecond.innerHTML = secondStudy--

    }else if(minuteStudy != 0 && secondStudy <= 0 ) {

        secondStudy = 59;
        textMinute.innerHTML = minuteStudy--
        //5min
    } else if(minuteStudy <= 0 && secondStudy <= 0) {

        if(secondBreak >= 0 ) {

            textMinute.innerHTML = minuteBreak
            textSecond.innerHTML = secondBreak--;

        } else if(minuteBreak != 0 && secondBreak <= 0) {
            secondBreak = 59;
            textMinute.innerHTML = minuteBreak--;   
        }else if(minuteBreak <= 0 && secondBreak <= 0){    
            name()
            minuteStudy = 0;
            secondStudy = 3;
            minuteBreak = 0;
            secondBreak = 4;
            
        }
        
    }  
    console.log('sigue corriendo');
}

function name() {
    round.textContent = count++
    console.log(count);
}



restart.onclick = () => {

    intervalTime(false)
    
    startGame()
    start.setAttribute('disabled','');
    restart.removeAttribute('disabled')
    
}




