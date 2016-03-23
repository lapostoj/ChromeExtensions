// Saves options to chrome.storage.sync and quit
function save_options_quit() {
    save_options();
    window.close();
}

// Saves options to chrome.storage.sync.
function save_options() {
    var autoreload = document.getElementById('autoreload').checked;
    chrome.storage.sync.set({
        autoreload: autoreload
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}

// Restores select box using the preferences stored in chrome.storage.
function restore_options() {
    // Use default value true
    chrome.storage.sync.get({
        autoreload: true
    }, function(items) {
        document.getElementById('autoreload').checked = items.autoreload;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('save-quit').addEventListener('click', save_options_quit);