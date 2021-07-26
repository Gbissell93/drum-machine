// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
let beat = 0;
const count = document.querySelector('.count')
// This function is called every 600ms
function update() {
    if (beat === 3){
        tock.play();
        }
        else {
        tick.play();
        }
    beat++
    if (beat === 4) {
        beat = 0
    }
console.log(beat)
count.innerText = beat + 1
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
