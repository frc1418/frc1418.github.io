var events = [
    {
        name: 'ILITE Robotics Offseason Challenge',
        date: new Date('Oct 22, 2016')
    }
];

var clock = {
    title: document.getElementById('title'),
    d: document.getElementById('days'),
    hr: document.getElementById('hours'),
    min: document.getElementById('minutes'),
    s: document.getElementById('seconds'),
    ms: document.getElementById('milliseconds')
};

// variables for time units
var days, hours, minutes, seconds;

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // Find the amount of seconds between now and target
    var now = new Date().getTime();
    var secondsLeft = (events[0].date - now) / 1000;

    // do some time calculations
    days = parseInt(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;

    hours = parseInt(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    minutes = parseInt(secondsLeft / 60);
    seconds = parseInt(secondsLeft % 60);

    // Display times left
    clock.title.innerHTML = 'Time left until ' + events[0].name + ':';
    clock.d.innerHTML = days;
    clock.hr.innerHTML = hours;
    clock.min.innerHTML = minutes;
    clock.s.innerHTML = seconds;
}, 10);