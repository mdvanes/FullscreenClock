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
  time = '<h1 class="valign center-text">' + moment().format('HH:mm:ss.S') + '</h1>';
  $('#time').html(time);
}

var time = '';
var bg = getParameterByName('bg');
var fg = getParameterByName('fg');

if (bg) $('body').css({'background-color': bg});
if (fg) $('body').css({'color': fg});

moment.locale('de');
setTime();
setInterval(setTime, 100);