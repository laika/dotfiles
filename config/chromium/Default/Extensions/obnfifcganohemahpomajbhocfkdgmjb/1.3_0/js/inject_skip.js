function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

if(document.getElementById("please_wait") || document.getElementById("skip_button")) {
	chrome.runtime.sendMessage({action: "incrementSkipCount"}, function(response) {
		// no response
	});
}

injectScript(chrome.extension.getURL('/js/skip.js'), 'body');