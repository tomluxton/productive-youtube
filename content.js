// Updated on changed
chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    updateThumbnail( req.action );
});

// Check 'display' option onload
chrome.storage.sync.get(['display'], function(result) {
    updateThumbnail( result.display );
});

// On user scroll and loads more
document.getElementById('contents').addEventListener('DOMSubtreeModified', function(){
    chrome.storage.sync.get(['display'], function(result) {
        updateThumbnail( result.display );
    });
});

document.getElementById('items').addEventListener('DOMSubtreeModified', function(){
    chrome.storage.sync.get(['display'], function(result) {
        updateThumbnail( result.display );
    });
});

function updateThumbnail( action ) {

    if (document.URL == 'https://www.youtube.com/') {

        let thumbs  =   document.getElementsByTagName('ytd-rich-grid-renderer');

        for ( var i = 0; i < thumbs.length; i++ ) {
            thumbs[i].style.display =   !action ? "none": "block";
        }
    } else if (document.URL.startsWith('https://www.youtube.com/watch')) {
        let thumbs  =   document.getElementsByTagName('ytd-watch-next-secondary-results-renderer');

        for ( var i = 0; i < thumbs.length; i++ ) {
            thumbs[i].style.display =   !action ? "none": "block";
        }

        let comments  =   document.getElementsByTagName('ytd-comments');

        for ( var i = 0; i < comments.length; i++ ) {
            comments[i].style.display =   !action ? "none": "block";
        }
    }
}