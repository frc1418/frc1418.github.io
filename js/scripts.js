var p = {
    load: document.getElementById('load'),
	email: document.getElementById('email'),
	navButton: document.getElementById('nav-button'),
	nav: document.getElementsByTagName('nav')[0],
	links: document.getElementsByTagName('a'),
};

p.navButton.onclick = function() {
	if (p.navButton.className === 'open') {
		p.navButton.className = '';
		p.nav.className = '';
	} else {
		p.navButton.className = 'open';
		p.nav.className = 'open';
	}
};


function email(name, domain, tld) {
	window.open('mailto:' + name + '@' + domain + '.' + tld);
}

for (i = 0; i < p.links.length; i++) {
	p.links[i].href = p.links[i].href.replace(/ATSYMBOL/, '@').replace(/PERIOD/, '.');
}
document.onreadystatechange = function() {
	var state = document.readyState;
	if (state == 'interactive') {
		p.load.style.display = 'block';
	} else if (state == 'complete') {
		setTimeout(function() {
			p.load.style.display = 'none';
		}, 1000);
	}
};