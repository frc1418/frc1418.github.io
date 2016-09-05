// Manages opening and closing of menu.
var navButton = document.getElementById('nav-button'),
	nav = document.getElementsByTagName('nav')[0];

// Manage menu opening & closing
navButton.onclick = function() {
	if (navButton.className === 'open') {
		navButton.className = '';
		nav.className = '';
	} else {
		navButton.className = 'open';
		nav.className = 'open';
	}
};

// Go through all the nav items; if the nav item is currently active give it the .active class to highlight it
var navItems = document.querySelectorAll('nav a');
for (i = 0; i < navItems.length; i++) {
    if (navItems[i].href.endsWith(window.location.pathname)) {
        navItems[i].className = 'active';
    }
}

// This will replace all instances of "ATSYMBOL" with @, and all instances of "PERIOD" with a period (.).
// Emails are by default obfuscated like this, and they are fixed with JS. This prevents bots from harvesting emails off the site. This harvesting iss a way more serious problem than you may think. Please don't remove this.

// Generate a list of all links on the page.
var links = document.getElementsByTagName('a');
// Go through all the links
for (i = 0; i < links.length; i++) {
    // If any of them contain instances of "ATSYMBOL" or "PERIOD" replace them as appropriate.
	links[i].href = links[i].href.replace(/ATSYMBOL/, '@').replace(/PERIOD/, '.');
}

if (location.protocol === 'http:' || location.protocol === 'https:') {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-82626035-1', 'auto');
    ga('send', 'pageview');
}