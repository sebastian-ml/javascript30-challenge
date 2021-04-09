window.addEventListener('keydown', (e) => {
    const pressedKey = e.code;
    const key = document.querySelector(`div[data-key=${pressedKey}]`);
    const audio = document.querySelector(`audio[data-key=${pressedKey}]`);

    playSound(audio);
    transformKey(key);
})

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}

function transformKey(key) {
    key.classList.add('playing');
}

function removePlaying(item) {
    item.classList.remove('playing');
}

const keys = [...document.getElementsByClassName('key')];
keys.forEach(key => key.addEventListener('transitionend', () => removePlaying(key)));
