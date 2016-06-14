// Mobile?
if (window.innerWidth >= 850) {
    // Give video its source, will initiate load. Otherwise, it won't load anything and will be hidden by CSS.
    document.getElementsByTagName('video')[0].src = 'video.mp4';

    // Parallax effect for video background.
    window.onscroll = function() {
        document.getElementsByClassName('video-container')[0].style.transform = 'translateY(' + document.body.scrollTop / 1.5 + 'px)';
    };
}
banners = document.getElementsByClassName('banners')[0];