const headerShrinkWidth = 1319;
const miniTitle = document.getElementById('title-mini');
header = document.getElementsByTagName('header')[0];

function shrinkHeader() {
    if (document.documentElement.scrollTop > 50 || document.body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink'; 
    } else {
        header.className = '';
    }
}

// Shrink header on mobile and resized window
body.onload = () => {
    if (body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }
    swapMiniTitle();
};
body.onresize = () => {
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
    swapMiniTitle();
};

function swapMiniTitle() {
    if (window.innerWidth < 432) {
        miniTitle.textContent = '1418';
    } else if (window.innerWidth < 1319) {
        miniTitle.textContent = 'TEAM 1418';
    }
}

document.addEventListener('scroll', shrinkHeader);