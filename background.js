let REQUEST_INTERVAL = 3600000;

let requestData = () => {
  // the request is started
  chrome.storage.local.set({
    state: {
      pending: true
    }
  });

setTimeout( () => {fetch('http://www.softomate.net/ext/employees/list.json')
    .then((result) =>
      result.json()
    )
    .then((result) =>
      // the request is done succesfully
      chrome.storage.local.set({
        state: {
          data: result,
          pending: false,
          error: null
        }
      })
    )
    .catch((error) =>
      // the request is failed
      chrome.storage.local.set({
        state: {
          data: null,
          pending: false,
          error: error
        }
      })
    )}, 2000);

};

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request.msg === "refreshData") {
    requestData();
  }
});

setInterval(requestData, REQUEST_INTERVAL);
