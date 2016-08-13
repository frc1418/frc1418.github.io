// Manages opening and closing of menu.
var navButton = document.getElementById('nav-button'),
	nav = document.getElementsByTagName('nav')[0];

navButton.onclick = function() {
	if (navButton.className === 'open') {
		navButton.className = '';
		nav.className = '';
	} else {
		navButton.className = 'open';
		nav.className = 'open';
	}
};

onclick = function(e) {
    if (e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.src === 'img/fist.svg') {
        // Then the user clicked on the header stuff. Take them to the homepage.
        window.location.href = 'http://1418.team';
    }
};

// This will replace all instances of "ATSYMBOL" with @, and all instances of "PERIOD" with a period (.).
// Emails are by default obfuscated like this, and they are fixed with JS. This prevents bots from harvesting emails off the site. This harvesting iss a way more serious problem than you may think. Please don't remove this.

// Generate a list of all links on the page.
var links = document.getElementsByTagName('a');
// Go through all the links
for (i = 0; i < links.length; i++) {
    // If any of them contain instances of "ATSYMBOL" or "PERIOD" replace them as appropriate.
	links[i].href = links[i].href.replace(/ATSYMBOL/, '@').replace(/PERIOD/, '.');
}