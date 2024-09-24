// Array of events with the event name and date
var events = [
    {
        name: '2025 FIRST Robotics Competition Kickoff',
        date: new Date(2025, 0, 4, 12, 0) // (year, month - 1 (jan is 0 dec is 11), day, hour, minute)s
    }
];

var clock = {
    title: document.querySelector('#countdown-section h1'),
    d: document.getElementById('days'),
    hr: document.getElementById('hours'),
    min: document.getElementById('minutes'),
	s: document.getElementById('seconds')
	// Removed milliseconds it's not used
};

// variables for time units
var days, hours, minutes, seconds;

// Update countdown every 100ms (.1s)
setInterval(() => {
	// Find the amount of seconds between now and target
    var now = new Date().getTime();
    var secondsLeft = (events[0].date - now) / 1000;
    if (now > events[0].date) {
        secondsLeft = 0;
	}
	
	// Calculate times left
	days = parseInt(secondsLeft / 86400);
    if (days.toString().length < 2) days = '0' + days.toString();
	secondsLeft = secondsLeft % 86400;

	hours = parseInt(secondsLeft / 3600);
    if (hours.toString().length < 2) hours = '0' + hours.toString();
	secondsLeft = secondsLeft % 3600;

	minutes = parseInt(secondsLeft / 60);
    if (minutes.toString().length < 2) minutes = '0' + minutes.toString();
	seconds = parseInt(secondsLeft % 60);
    if (seconds.toString().length < 2) seconds = '0' + seconds.toString();

    	// Display times left
    clock.title.textContent = events[0].name +':';
    clock.d.textContent = days;
    clock.hr.textContent = hours;
    clock.min.textContent = minutes;
	clock.s.textContent = seconds;

	if (days === '00' && hours === '00' && parseInt(minutes) < 10) {
        document.querySelector('#countdown-section').classList.add('flashing');
    } else {
        document.querySelector('#countdown-section').classList.remove('flashing');
    }
}, 100);

	//Add :
clock.d.insertAdjacentHTML('afterend', '<span>:</span>');
clock.hr.insertAdjacentHTML('afterend', '<span>:</span>');
clock.min.insertAdjacentHTML('afterend', '<span>:</span>');