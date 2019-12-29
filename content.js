// Use a console log to test if script it running
// console.log("Chrome extension go2");

// Define variable as the element i want to remove then go to its parent
// and remove it. 

var app_drawer = document.getElementsByTagName('ytd-rich-grid-renderer');

app_drawer[0].style.visibility = 'hidden';

//need to figure out how to run js on specific pages so i can 
//run the following on youtube.com/watch*
//Matches currently set: "matches": ["https://www.youtube.com/*"],


// var comment_section = document.getElementById('secondary');

// comment_section.style.visibility = 'hidden';