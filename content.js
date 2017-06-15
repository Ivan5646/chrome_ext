console.log("hi from content.js");

var processRemoteData = function processRemoteData(state) {

  let found = state.data.find(i => location.host.indexOf(i.domain) >= 0);
  console.log(found);
  if (found) {
    alert(found.message);
  }  
};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));