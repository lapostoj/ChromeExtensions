// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains 'https://www.facebook.com' or 'https://www.messenger.com'...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: 'https://www.facebook.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: 'https://www.messenger.com'},
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});