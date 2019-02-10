window.onscroll = function() {
    document.getElementsByTagName('main')[0].style.backgroundPosition = ((document.body.scrollTop / 5) - 20) + '% ' + ((document.body.scrollTop / 1.5) + 20) + '%';
};
