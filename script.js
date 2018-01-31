var join = document.getElementById("joinBtn");

var server = document.getElementById("serverBtn");

server.onclick = function() {
  window.open("https://www.patreon.com/gurtuber");
}


join.onclick = function() {
  window.open("https://www.youtube.com/channel/UC2ZOE0qLCpJHSbbApCvITeQ");
}


var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON('https://discordbots.org/api/bots/237895643912208385/stats').then(function(data) {
    result.innerText = data.server_count;
},);