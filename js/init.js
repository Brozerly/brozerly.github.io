var lang = 'es';

function init(){
  var params = new URLSearchParams(location.search.slice(1));
  var redirect = '';
  var route = params.get('r');
  lang = params.get('lang');
  if ( route != null) {
    if (lang == 'es') {
      redirect = '/'+ route +  window.location.hash;
    } else {
      if ( lang != null ) {
        redirect = '/'+ lang + '/' + route +  window.location.hash;
      } else {
        redirect = '/' + route +  window.location.hash;
      }
    };
    window.location.replace(redirect)
  } else if (window.location.pathname == '/') {
    var navigatorLang = (navigator.languages[0] || navigator.language || navigator.browserLanguage).split('-')[0];
    lang = navigatorLang;
    if ( ['en', 'eu', 'fr'].indexOf(navigatorLang) > -1 ) {
      window.location.replace('/' + navigatorLang);
    };
  };
}

init();
