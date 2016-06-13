document.getElementById('email').onclick = function() {
    window.open('mailto:ballouj@fccps.org');
};
window.onscroll = function() {
    document.getElementsByTagName('video')[0].style.transform = 'translateY(' + document.body.scrollTop / 1.5 + 'px)';
};