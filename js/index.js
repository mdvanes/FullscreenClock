function getParameterByName(name, url) { // Stolen from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function setTime() {
  //   time = '<span class="valign center-text">' + moment().format('HH:mm:ss.S') + '</span>';
  time = moment().format('HH:mm');
  $('#timestamp').html(time);
}

var time = '';
var bg = getParameterByName('bg');
var fg = getParameterByName('fg');

if (bg) {
  if (bg === 'r') {
    $('body').addClass('rainbow');
  } else {
    $('body').css({'background-color': bg});
  }
}
if (fg) {
  if (fg === 'r') {
    $('#time').addClass('rainbow');
  } else {
    $('#time').css({'color': fg});
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "f") {
    toggleFullScreen();
  }
}, false);

moment.locale('de');
setTime();
setInterval(setTime, 100);
