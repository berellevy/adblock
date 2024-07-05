chrome.webRequest.onBeforeRedirect.addListener((details) => {

}, {
    urls: ['<all_urls>']
}, ['blocking'])