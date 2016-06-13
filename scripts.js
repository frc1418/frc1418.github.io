window.onscroll = function() {
    document.getElementsByClassName('video-container')[0].style.transform = 'translateY(' + document.body.scrollTop / 1.5 + 'px)';
};
document.getElementById('email').onclick = function() {
    window.open('mailto:ballouj@fccps.org');
};
