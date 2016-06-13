if (window.innerWidth >= 800) {
    document.getElementsByTagName('video')[0].src = 'video.mp4';

    setInterval(function() {
        if (banners.parentElement.querySelector(':hover') === banners) {
            banners.scrollLeft += 1;
        }
    }, 20);
}
window.onscroll = function() {
    document.getElementsByClassName('video-container')[0].style.transform = 'translateY(' + document.body.scrollTop / 1.5 + 'px)';
};
banners = document.getElementsByClassName('banners')[0];