(function(){
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const playBtn = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');

    function play() {
        const playOrPause = video.paused ? 'play' : 'pause';
        video[playOrPause]();
    }

    function updatePlayIcon() {
        playBtn.innerText = this.paused ? '►' : '❚ ❚';
    }

    function skip() {
        video.currentTime += +(this.dataset.skip);
    }

    function updateProgress() {
        const currentTime = video.currentTime;
        const videoLength = video.duration;

        progress.value = currentTime / videoLength;
    }

    function updateSettings() {
        video[this.name] = this.value;
    }

    function scrub(e) {
        video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
    }

    video.addEventListener('click', play);
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);
    video.addEventListener('timeupdate', updateProgress);

    playBtn.addEventListener('click', play);

    skipButtons.forEach(btn => btn.addEventListener('click', skip));

    ranges.forEach(range => range.addEventListener('change', updateSettings));
    ranges.forEach(range => range.addEventListener('mousemove', updateSettings));

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
})();

