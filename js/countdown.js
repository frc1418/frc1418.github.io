var events = [{
	name: 'Stop Build Day',
	date: new Date(2018, 2, 20, 23, 59)
},
{
    name: 'CHS District Northern Virginia Event',
    date: new Date(2018, 3, 2, 11, 0)
},
{
    name: 'CHS District Greater DC Event co-sponsored by Micron',
    date: new Date(2018, 3, 9, 11, 0)
},
{
    name: 'FIRST Chesapeake District Championship',
    date: new Date(2018, 3, 28, 11, 0)
},
{
    name: 'FIRST Championship (Detroit)',
    date: new Date(2018, 4, 25)
}];

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

// Update countdown every 100ms (.1s)
setInterval(function() {
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
	clock.title.innerHTML = 'Time left until ' + events[0].name + ':';
	clock.d.innerHTML = days;
	clock.hr.innerHTML = hours;
	clock.min.innerHTML = minutes;
	clock.s.innerHTML = seconds;
}, 100);
