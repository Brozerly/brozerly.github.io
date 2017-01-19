var checkCookie, cookieDuration, cookieName, cookieValue, createCookie, showCookieMessage;

cookieDuration = 14;
cookieName = 'compilanceCookie';
cookieValue = 'on';
showCookieMessage = true;

function createCookie(name, value, days) {
  var date, expires;
  if (!checkCookie(name)) {
    date = new Date;
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + (date.toGMTString());
    return document.cookie = name + "=" + value + expires + '; path=/';
  }
};

function checkCookie(name) {
  var cookie, i, len, ref, searchName;
  searchName = name + '=';
  ref = document.cookie.split(';');
  for (i = 0, len = ref.length; i < len; i++) {
    cookie = ref[i];
    if (cookie.trim().indexOf(searchName) === 0) {
      return cookie.trim().substring(searchName.length, cookie.trim().length);
    }
  }
};

function removeCookieMessage() {
  createCookie(cookieName, cookieValue, cookieDuration);
  $('.cookies-compilation-box').remove();
};


$( document ).ready(function() {
  // init show cookie message
  if (checkCookie(cookieName) != cookieValue) {
    var cookiesHtml = "<div class='cookies-compilation-box' id='cookiesMessageBox'> <div class='cookies-compilation-text'> Cookiek Brozerlyren zerbitzuak ematea, babestea eta hobetzea ahalbidetzen digute. Gure webgunea erabiltzen jarraitzen baduzu, gure <a href='http://www.brozerly.com/eu/tos#cookies' target='_blank'> cookien erabilpenaren politika</a> onartzen duzu. </div> <div class='cookies-compilation-button'> <a class='btn-floating waves-effect waves-light grey darken-2 cookies-compilation-close' id='cookiesMessageClose'> <i class='material-icons'>&#xE5CD;</i> </a> </div> </div>";
    $('#brozerly-layout').append(cookiesHtml);
    // Add event listener to hide cookies message
    // (only if element exists so only if we appended the element)
    $('#cookiesMessageClose')[0].addEventListener('click', removeCookieMessage, true);
    $('#cookiesMessageClose')[0].addEventListener('touchstart', removeCookieMessage, true);
  }
});
