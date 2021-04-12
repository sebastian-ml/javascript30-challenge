const secondHand = document.getElementsByClassName('second-hand')[0];
const minuteHand = document.getElementsByClassName('min-hand')[0];
const hourHand = document.getElementsByClassName('hour-hand')[0];

setInterval(() => {
    const [seconds, minutes, hours] = getCurrentTimeInDegrees();

    setTransform(secondHand, seconds);
    setTransform(minuteHand, minutes);
    setTransform(hourHand, hours);
}, 1000);

function getCurrentTimeInDegrees() {
    const currentDate = new Date();

    const seconds = currentDate.getSeconds() / 60 * 360;
    const minutes = currentDate.getMinutes() / 60 * 360;
    const hours = (currentDate.getHours() - 12) / 12 * 360 + (minutes / 12);

    return [seconds, minutes, hours];
}

function setTransform(handler, degrees) {
    const degreesToSet = 90 + degrees
    handler.style.transform = `rotate(${degreesToSet}deg)`;
}

