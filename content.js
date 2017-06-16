var processRemoteData = function processRemoteData(state) {

  let found = state.data.find(i => location.host.indexOf(i.domain) >= 0);
  console.log(found.message);
  if (found) {
    // alert(found.message);

    var msgText = found.message;
    var div = $("<div>", {id: "container", text: msgText});
    $(div).css({
        "color": "blue",
        "font-size": "28px",
        "position": "absolute",
        "top": "20px"
    });
    $("body").append(div);

    // var close = $("<span>", {text: "&times"});
    // $(div).css({
    //   "position": "relative",
    //   "top": "2px",
    //   "right": "2px",
    //   "cursor": "pointer"
    // });
    // $(div).append(close);

  }  

};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));