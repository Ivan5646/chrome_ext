setInterval(fetch('http://www.softomate.net/ext/employees/list.json').then(function (result) {
  return result.json();
}).then(function (result) {
  chrome.storage.local.set({ data: result });
}).catch(function (error) {
  return null;
}), 3600000);
