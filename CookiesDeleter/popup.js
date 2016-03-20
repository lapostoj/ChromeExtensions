var domain;
var num = document.getElementById("number");
var website = document.getElementById("website");

chrome.tabs.query({active: true, currentWindow: true}, function(tabsArray) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry bt is still an array
    var activeTab = tabsArray[0];
    domain = extractDomain(activeTab.url);
    website.innerHTML = domain;
});

chrome.cookies.getAll({}, function (cookies) {
    if (cookies) {
        removeCookies(cookies);
    } else {
        console.log('Can\'t get cookie! Check the name!');
    }
});

function removeCookies(cookies) {
    var deleted = 0;
    for (var i in cookies) {
	   	var cookie = cookies[i];
		if( ("." + domain).indexOf(cookie.domain) != -1 ) {
			url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
			chrome.cookies.remove({"url": url, "name": cookie.name});
            deleted++;
		}
    }     
    num.innerHTML = deleted;
}

function extractDomain(url) {
	return url.match(/:\/\/(.[^/:]+)/)[1];
}