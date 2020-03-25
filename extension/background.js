chrome.runtime.onInstalled.addListener(() => {
  alert('Installed. Good Job!');
});

chrome.tabs.onCreated.addListener( () => {
  console.log('Tab created')
});


chrome.browserAction.onClicked.addListener((tab) => {
  console.log('TAB', tab)
  const { url } = tab
  if (!tab.url.startsWith('https://www.youtube.com/watch?v='))
    return alert('WRONG URL')
  const encoded = encodeURIComponent(url)
  fetch(`http://localhost:3000/?url=${encoded}`)
})