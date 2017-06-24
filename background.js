let REQUEST_INTERVAL = 3600000;

let requestData = () => {
  // the request is started
  chrome.storage.local.set({
    popupState: {
      pending: true
    }, 
    contentState: {
      'google': {
        count: 0,
        closed: false
      },
      'yandex': {
        count: 0,
        closed: false
      },
      'bing': {
        count: 0,
        closed: false
      }
    }
  });

setTimeout( () => {fetch('http://www.softomate.net/ext/employees/list.json') 
    .then((result) =>
      result.json()
    )
    .then((result) =>
      // the request is done succesfully
      chrome.storage.local.set({
        popupState: {
          data: result,
          pending: false,
          error: null
        }
      })
    )
    .catch((error) =>
      // the request is failed
      chrome.storage.local.set({
        popupState: {
          data: null,
          pending: false,
          error: error.message
        }
      })
    )}, 1000);

};

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request.msg === "refreshData") {
    requestData();
  }
});

setInterval(requestData, REQUEST_INTERVAL);
