function init() {
	chrome.runtime.sendMessage({action: "getSkipCount"}, function(response) {
		setSkipCountDisplay(response.skipCount);
	});
	
	setClickable();
}

function setSkipCountDisplay(skipCount) {
    var skipCountSpan = document.querySelector('#skip-count');
	
	if(!skipCount || skipCount === null || skipCount < 0) {
		skipCount = 0;
	}
	
	skipCountSpan.innerHTML = skipCount;
}

function setClickable() {
	var adflyUrl = document.getElementById("flatter-url");
	
	adflyUrl.addEventListener("click", function(){
		chrome.tabs.create({url: 'https://flattr.com/submit/auto?user_id=StoreClerk&url=http://adfly-skipper.blogspot.com/&title=AdF.ly%20Skipper%20%E2%98%85WORKING%E2%98%85&description=Lets%20you%20bypass%20all%20AdF.ly%20URLs!'});
	}, false);
}
  
document.addEventListener('DOMContentLoaded', init);