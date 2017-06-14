var processRemoteData = function processRemoteData(state) {
  console.log(state);

  if (state.pending) {
    $('#pending').css("display", "block");
  } else if (state.error) {
      $('#error').show();
      $('#errorText').text(state.error);
      $('#pending').hide();
  } else {
      $('#errorText').text('');
      $('#error').hide();
      $('#pending').hide();
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
