
chrome.browserAction.onClicked.addListener((tab) => {
  const { url } = tab
  // TODO:
  // * Handle other youtube URLs
  // * Use another methos to notify wrong URLs
  if (!tab.url.startsWith('https://www.youtube.com/watch?v='))
    return alert('WRONG URL')
  const encoded = encodeURIComponent(url)

  fetch(`http://localhost:3000/?url=${encoded}`)
  // TODO: .then(response => )
  // TODO: .catch(err => )
})
