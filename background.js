// get current url from active tab and puts it into local storage
chrome.tabs.onUpdated.addListener((changeInfo) => {
  console.log(changeInfo);
});
