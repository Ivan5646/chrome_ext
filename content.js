var processRemoteData = function processRemoteData(state) {

  let found = state.data.find(i => location.host.indexOf(i.domain) >= 0);
  console.log(found.message);
  if (found) {
    // alert(found.message);

    var div = $("<div>", {id: "container", text: "Welcome message."});
    $(div).css({
        "color": "blue",
        "font-size": "28px"
    });


    $("body").append(div);

  }  
  
};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));