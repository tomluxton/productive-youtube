// Use a console log to test if script it running
// console.log("Chrome extension go2");
var tabURL = window.location.href;

console.log(tabURL);

// Check url. Define variable as the element i want to remove
// then use set its style to invisable

if (tabURL == 'https://www.youtube.com/') {
	var app_drawer = document.getElementsByTagName('ytd-rich-grid-renderer');
	app_drawer[0].style.visibility = 'hidden';
} else if (tabURL.startsWith('https://www.youtube.com/watch')){
	var comment_section = document.getElementsByTagName('ytd-watch-next-secondary-results-renderer');
	comment_section[0].style.visibility = 'hidden';
}