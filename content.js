// Use a console log to test if script it running
// console.log("Chrome extension go2");
var tabURL = window.location.href;

console.log(tabURL);

// Check url. Define variable as the element i want to remove
// then use set its style to invisable
	var tabURL = window.location.href;
	function disable_suggested() {
		if (tabURL == 'https://www.youtube.com/') {
			var app_drawer = document.getElementsByTagName('ytd-two-column-browse-results-renderer');
			// app_drawer[0].style.visibility = 'hidden';
			for (i = 0; i < app_drawer.length; i++) {
				app_drawer[i].style.visibility = 'hidden';
			}
		} else if (tabURL.startsWith('https://www.youtube.com/watch')){
			var related_section = document.getElementById('related');
			for (i = 0; i < related_section.length; i++) {
				related_section[i].style.visibility = 'hidden';
			}
			// comment_section[0].style.visibility = 'hidden';
		}
	}

	disable_suggested();

