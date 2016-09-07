// Is device mobile?
if (window.innerWidth >= 850) {
    // Parallax effect for video background.
    window.onscroll = function() {
        document.getElementById('bg').style.transform = 'translateY(' + document.body.scrollTop / -1.5 + 'px)';
    };
}