/*
* The main function is in another fil in order to be able to define it in the context without having to put the code in the 'file' field. 
*/
chrome.tabs.executeScript(null, {file: 'facebookEmptyArchive.js'}, function () {
    chrome.tabs.executeScript(null, {code: 'var numItems = facebookEmptyArchive(); numItems;'}, function (results) {
    var number = document.getElementById("number");
    number.innerHTML = results[0];
    });
});