if(!localStorage.skipCount || localStorage.skipCount === null || localStorage.skipCount < 0) {
	localStorage.skipCount = 0;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.action == "incrementSkipCount") {
			localStorage.skipCount++;
		}

		if(request.action == "getSkipCount") {
			sendResponse({skipCount: localStorage.skipCount});	
		}
});