chrome.tabs.onUpdated.addListener((changeInfo, tab) => {
  console.log(changeInfo);
});
