console.log('panel.js');
let main = document.getElementById('main');

chrome.devtools.network.onRequestFinished.addListener(function (request) {
  // var parser = document.createElement('a');
  // parser.href = request.request.url;
  // console.log(parser.href);
  //   if (parser.hostname.split('.')[1] == 'contextweb') {
  //     params = parser.pathname.split('/');
  //     if (params[1] == 'publish') {
  //       channel = params[5];
  //       message = params[7];
  //     }
  //   }
  // request.getContent(function (body) {
  //   parsed = JSON.parse(body);
  //   console.log(parsed);
  // });
  console.log(request);
});
