// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
let beat = 0;
const count = document.querySelector('.count')


//

// This function is called every 600ms
function update() {
    beat++
    //instrument section
    const metronome = document.querySelector('#metro');
    const kickCheck = document.querySelector('#kick');
    const snareCheck = document.querySelector('#snare');
    const hatCheck = document.querySelector('#hi-hat');

    //instrument timing selectors
    const kickTime = document.querySelector('#kick-timing');
    const snareTime = document.querySelector('#snare-timing');
    const hatTime = document.querySelector('#hi-hat-timing');
    //play conditions
    if (metronome.checked === true)
    {

        if (beat == 1){
            tock.play();
            }
            else {
            tick.play();
            }
        }
        
        if (kickCheck.checked === true && Number(kickTime.value) === beat  ) {
            kick.play()
        }
        if (snareCheck.checked === true && Number(snareTime.value) === beat) {
            snare.play()
        }
        if (hatCheck.checked === true && Number(hatTime.value) === beat ) {
            hiHat.play()
        }

        
        
        //global timing
        count.innerText = beat 
           console.log(beat)
        if (beat == 4) {
            beat = 0
           
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
