// TODO: build a history of downloads

chrome.browserAction.onClicked.addListener(tab => {
  const { url } = tab
  // TODO: youtube can use other url, need to extend this.
  if (!tab.url.startsWith('https://www.youtube.com/watch?v='))
    // TODO: could be betther ways to notify this.
    return alert('WRONG URL')
  const encoded = encodeURIComponent(url)
  // TODO: get the result of download, catch errors, etc...
  fetch(`http://localhost:3000/?url=${encoded}`)
  //  .then(response => )
  //  .catch(err => )
})
