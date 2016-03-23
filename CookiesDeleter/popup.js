var activeTab;
var domain;
var num = document.getElementById("number");
var website = document.getElementById("website");
var reload = 'window.location.reload();';

chrome.tabs.query({active: true, currentWindow: true}, function(tabsArray) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry bt is still an array
    activeTab = tabsArray[0];
    domain = extractDomain(activeTab.url);
    website.innerHTML = domain;
});

// Use default value true
chrome.storage.sync.get({
    autoreload: true
}, function(items) {
    main(items.autoreload)
});

function main(autoreload) {
    chrome.cookies.getAll({}, function (cookies) {
        if (cookies) {
            removeCookies(cookies);
            if (autoreload) {
                chrome.tabs.executeScript(activeTab.id, {code: reload});
            }
        } else {
            console.log('Can\'t get cookie! Check the name!');
        }
    });
}

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