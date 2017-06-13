var processRemoteData = function processRemoteData(state) {
  console.log(state);

  if (!state.data) {
    return;
  }

  if (state.pending == true) {
    $('#status').append('<img id="preloader" src="img/preloader.gif" width="30px" height="30px" />')
  }else if (state.error == "error") {
    $('#status').append('<img id="error" src="img/error.png" width="30px" height="30px" />')
  } else {
    // $('#preloader').remove(); 
    let text = '';
    state.data.forEach((item) => text += item.name + ' ');
    $('#status').text(text);
  }
};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));
chrome.storage.onChanged.addListener((result) => processRemoteData(result.state.newValue)); //newValue?

$('#refreshButton').on('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  chrome.extension.sendMessage({ msg: "refreshData" });
});
