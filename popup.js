function onVideoWatch() {
  //code that should be inserted in the below function
  var id = 'google_companion_ad_div';
  var rootDiv = document.getElementById(id);
  var div = document.createElement('div');
  var url = 'FEsFXsPCVOo';
  var videoUrl = 'https://www.youtube.com/embed/' + url + '?rel=0&amp;controls=1&autoplay=1&amp;showinfo=1?ecver=1';

  //video
  var iframe = document.createElement('iframe');
  iframe.setAttribute('width', '300');
  iframe.setAttribute('height', '169');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('frameborder', '0');

  div.appendChild(iframe);
  rootDiv.appendChild(div);
  //end of code

  var codeStr = "";

  chrome.tabs.executeScript(null, {
    code: codeStr
  });
}
