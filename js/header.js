const headerShrinkWidth = 1275;
header = document.getElementsByTagName('header')[0];

function shrinkHeader() {
    if (document.documentElement.scrollTop > 50 || document.body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }
}

// Shrink header on mobile and resized window
body.onload = function () {
    if (body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }
};
body.onresize = function () {
    if (body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }

    if (body.clientWidth > headerShrinkWidth) {
        if (nav.className == 'open') {
            body.style.overflow = null;
        }
    } else {
        if (nav.className == 'open') {
            body.style.overflow = 'hidden';
        }
    }
};

document.addEventListener('scroll', shrinkHeader);