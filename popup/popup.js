// chrome.storage.sync.get

// Initialize butotn with users's prefered color
let button = document.getElementById('getCurrentURL');
let dataTest = document.getElementById('data');

// When the button is clicked, get current url from current tab
button.addEventListener('click', async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  let currentURL = tab.url;
  dataTest.innerHTML = currentURL;
});
