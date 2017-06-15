console.log("hi from content.js");

var processRemoteData = function processRemoteData(state) {

  let found = result.state.data.find(i => location.host.indexOf(i.domain) >= 0);
  console.log(found);
  // if (found) {
  //   alert(found.message);
  // }

  // for (var i = 0; i < state.data.length; i++) {
  //   if (state.data[i].domain == location.host) {
  //     alert(state.data[i].message);
  //   }
  // }
  
};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));