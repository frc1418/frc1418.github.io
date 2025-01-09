var events = [
    {
        name: '2025 FIRST Robotics Competition Kickoff',
        date: new Date(Date.UTC(2025, 0, 4, 17, 0)) // (year, month - 1 (jan is 0 dec is 11), day, hour, minutes) USE GMT
    }
];

var clock = {
    section: document.getElementById('countdown-section'),
    title: document.querySelector('#countdown-section h1'),
    d: document.getElementById('days'),
    hr: document.getElementById('hours'),
    min: document.getElementById('minutes'),
    s: document.getElementById('seconds')
};

var days, hours, minutes, seconds;
var i = 0;

const start = setInterval(() => {
    // Find the amount of seconds between now and event
    var now = new Date().getTime();
    var secondsLeft = (events[i].date - now) / 1000;
    if (now > events[i].date) {
        secondsLeft = 0;
        if (i < events.length - 1) {
            i++;
        } else {
            clearInterval(start);
        }
    } else { 
        clock.section.style.display = 'block';
    }

    // Calculate times left
    days = parseInt(secondsLeft / 86400);
    days = days.toString().padStart(2, 0);
    secondsLeft = secondsLeft % 86400;

    hours = parseInt(secondsLeft / 3600);
    hours = hours.toString().padStart(2, 0);
    secondsLeft = secondsLeft % 3600;

    minutes = parseInt(secondsLeft / 60);
    minutes = minutes.toString().padStart(2, 0);

    seconds = parseInt(secondsLeft % 60);
    seconds = seconds.toString().padStart(2, 0);

    clock.title.textContent = events[i].name + ':';
    clock.d.textContent = days;
    clock.hr.textContent = hours;
    clock.min.textContent = minutes;
    clock.s.textContent = seconds;

    if (days === '00' && parseInt(hours) < 1) {
        document.querySelector('#countdown-section').classList.add('flashing');
    } else {
        document.querySelector('#countdown-section').classList.remove('flashing');
    }
}, 1000);

clock.d.insertAdjacentHTML('afterend', '<span>:</span>');
clock.hr.insertAdjacentHTML('afterend', '<span>:</span>');
clock.min.insertAdjacentHTML('afterend', '<span>:</span>');