chrome.runtime.onInstalled.addListener(({reason}) => {
  console.log(reason)
  if (reason === 'install') {
      openDemoTab()
  }
});
chrome.action.onClicked.addListener(openDemoTab);

function openDemoTab() {
  chrome.tabs.create({ url: 'index.html' });
}
