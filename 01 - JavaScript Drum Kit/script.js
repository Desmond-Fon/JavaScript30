const keys = document.querySelectorAll('.key')
// console.log("working");

function removeTransition (e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}

function playSound (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
}

window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
