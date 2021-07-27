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
    //beat increment
    beat++
    //instrument section
    const metronome = document.querySelector('#metro');
    const kickCheck = document.querySelector('#kick');
    const snareCheck = document.querySelector('#snare');
    const hatCheck = document.querySelector('#hi-hat');

    //instrument timing selectors
    //Kicks===============================================
    const kick1 = document.querySelector('#kick-1');
    const kick2 = document.querySelector('#kick-2');
    const kick3 = document.querySelector('#kick-3');
    const kick4 = document.querySelector('#kick-4');
    const snare1 = document.querySelector('#snare-1');
    const snare2 = document.querySelector('#snare-2');
    const snare3 = document.querySelector('#snare-3');
    const snare4 = document.querySelector('#snare-4');
    const hiHat1 = document.querySelector('#hi-hat-1');
    const hiHat2 = document.querySelector('#hi-hat-2');
    const hiHat3 = document.querySelector('#hi-hat-3');
    const hiHat4 = document.querySelector('#hi-hat-4');
    
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
        //Kick conditions
        if ( kick1.checked === true && Number(kick1.value) === beat) {
            kick.play()
        }
        if ( kick2.checked === true && Number(kick2.value) === beat) {
            kick.play()
        }
        if ( kick3.checked === true && Number(kick3.value) === beat) {
            kick.play()
        }
        if ( kick4.checked === true && Number(kick4.value) === beat) {
            kick.play()
        }

        if ( snare1.checked === true && Number(snare1.value) === beat) {
            snare.play()
        }
        if ( snare2.checked === true && Number(snare2.value) === beat) {
            snare.play()
        }
        if ( snare3.checked === true && Number(snare3.value) === beat) {
            snare.play()
        }
        if ( snare4.checked === true && Number(snare4.value) === beat) {
            snare.play()
        }
    
        if ( hiHat1.checked === true && Number(hiHat1.value) === beat) {
            hiHat.play()
        }
        if ( hiHat2.checked === true && Number(hiHat2.value) === beat) {
            hiHat.play()
        }
        if ( hiHat3.checked === true && Number(hiHat3.value) === beat) {
            hiHat.play()
        }
        if ( hiHat4.checked === true && Number(hiHat4.value) === beat) {
            hiHat.play()
        }
    
        //global timing
        count.innerText = beat 
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
