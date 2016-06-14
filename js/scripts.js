document.getElementById('email').onclick = function() {
	window.open('mailto:ballouj@fccps.org');
};

var button = document.getElementById('nav-button');
var nav = document.getElementsByTagName('nav')[0];
button.onclick = function() {
	if (button.className === 'open') {
		button.className = '';
        nav.className = '';
	} else {
		button.className = 'open';
        nav.className = 'open';
	}
};