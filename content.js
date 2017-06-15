console.log("hi from content.js");

var processRemoteData = function processRemoteData(state) {

  for (var i = 0; i < state.data.length; i++) {
    if (state.data[i].domain == location.host) {
      alert(state.data.[i]message);
    }
  }

};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));