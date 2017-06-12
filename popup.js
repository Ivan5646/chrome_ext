var processRemoteData = function processRemoteData(result) {
  console.log(result.data);
  document.getElementById('status').innerHTML = result.data;
};

chrome.storage.local.get('data', processRemoteData);
chrome.storage.onChanged.addListener(processRemoteData);