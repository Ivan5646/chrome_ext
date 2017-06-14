var processRemoteData = function processRemoteData(state) {
  console.log(state);

  if (state.pending) {
    $('#pending').css("display", "block");
  } else if (state.error) {
    $('#error').css("display", "block");
    $('#errorText').text(state.error);
    $('#pending').css("display", "none");
  } else {
    $('#error').css("display", "none");
    $('#pending').css("display", "none");
    let text = '';
    state.data.forEach((item) => text += item.name + ' ');
    $('#status').text(text);
  }

  if (!state.data) {
    return;
  }
};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));
chrome.storage.onChanged.addListener((result) => processRemoteData(result.state.newValue)); //newValue?

$('#refreshButton').on('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  chrome.extension.sendMessage({ msg: "refreshData" });
});
