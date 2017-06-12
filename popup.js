var processRemoteData = function processRemoteData(result) {
  console.log(result.data);

  var myArray = result.data;
  var tr;
  for (var i = 0; i < myArray.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + myArray[i].name + "</td>");
      tr.append("<td>" + myArray[i].domain + "</td>");
      tr.append("<td>" + myArray[i].message + "</td>");
      $('table').append(tr);
  }

  // document.getElementById('status').innerHTML = result.data[0].name;
  // document.getElementById('status').innerHTML = myArray[0].name;
};

chrome.storage.local.get('data', processRemoteData);
chrome.storage.onChanged.addListener(processRemoteData);