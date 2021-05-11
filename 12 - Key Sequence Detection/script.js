const pressedKeys = [];
const secretKey = 'wesbos';

function updateSequence(e) {
    const pressedKey = e.key;

    pressedKeys.push(pressedKey);
    pressedKeys.splice(-secretKey.length - 1, pressedKeys.length - secretKey.length);

    const concatArray = pressedKeys.join('');

    if (concatArray.includes(secretKey)) {
        cornify_add();
    }
}

window.addEventListener('keyup', updateSequence);
