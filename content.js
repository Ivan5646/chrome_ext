var processRemoteData = function processRemoteData(state) {

  let found = state.data.find(i => location.host.indexOf(i.domain) >= 0);
  console.log(found.message);
  if (found) {
    var msgText = found.message;
    var div = $("<div>", {id: "myContainer", text: msgText});
    $(div).css({
        "font-size": "28px",
        "position": "absolute",
        "top": "20px",
        "z-index": "99999",
        "padding": "20px",
        "background-color": "#f44336",
        "color": "white",
        "opacity": "1",
        "transition": "opacity 0.6s",
        'margin-bottom': "15px",
        "background-color": "#4CAF50"
    });
    $("body").append(div);

    var close = $("<span>", {id: "close", text: "X"});
    $(close).css({
      "position": "relative",
      "top": "2px",
      "right": "2px",
      "cursor": "pointer",
      "margin-left": "15px",
      "color": "white",
      "font-weight": "bold",
      "font-size": "22px",
      "line-height": "20px",
      "transition": "0.3s"
    });
    $(div).append(close);

  }  

};

chrome.storage.local.get('state', (result) => processRemoteData(result.state));

$(document).ready(function(){
  $("#close").click(function(){
    $("#myContainer").toggle();
  });
});