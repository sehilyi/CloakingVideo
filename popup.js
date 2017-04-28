function onVideoWatch() {

  var url = 'FEsFXsPCVOo';
  var tempUrl = document.getElementById('url').value;
  if(tempUrl != '') url = tempUrl;
  if(url.indexOf('=') != -1) url = url.split('=')[1];

  var codeStr = "";
  codeStr += "  /* code that should be inserted in executeScript() */\n";
  codeStr += "  var id = 'google_companion_ad_div';\n";
  codeStr += "  var rootDiv = document.getElementById(id);\n";
  codeStr += "  \n";
  codeStr += "  var videoUrl = 'https://www.youtube.com/embed/' + '" + url + "' + '?rel=0&amp;controls=1&autoplay=1&amp;showinfo=1?ecver=1';\n";
  codeStr += "\n";
  codeStr += "  // clear all ad components\n";
  codeStr += "  while(rootDiv.hasChildNodes()) {\n";
  codeStr += "    rootDiv.removeChild(rootDiv.lastChild);\n";
  codeStr += "  }\n";
  codeStr += "\n";
  codeStr += "  // main div\n";
  codeStr += "  var div = document.createElement('div');\n";
  codeStr += "  div.setAttribute('id', 'video-wall-container-v2');\n";
  codeStr += "  div.style.textAlign = 'left';\n";
  codeStr += "\n";
  codeStr += "  // ad Title\n";
  codeStr += "  var adTag = document.createElement('span');\n";
  codeStr += "  adTag.setAttribute('class', 'yt-badge ad-badge-byline yt-badge-ad');\n";
  codeStr += "  adTag.setAttribute('aria-label', 'Advertisement');\n";
  codeStr += "  var tagNode = document.createTextNode('Ad');\n";
  codeStr += "  adTag.appendChild(tagNode);\n";
  codeStr += "\n";
  codeStr += "  var adTitle = document.createElement('span');\n";
  codeStr += "  adTitle.style.fontWeight = '500';\n";
  codeStr += "  adTitle.style.fontSize = '14px';\n";
  codeStr += "  var adNode = document.createTextNode('CLOAKINGNOTE');\n";
  codeStr += "  adTitle.appendChild(adNode);  \n";
  codeStr += "\n";
  codeStr += "  // video\n";
  codeStr += "  var iframe = document.createElement('iframe');\n";
  codeStr += "  iframe.setAttribute('width', '300');\n";
  codeStr += "  iframe.setAttribute('height', '169');\n";
  codeStr += "  iframe.setAttribute('src', videoUrl);\n";
  codeStr += "  iframe.setAttribute('frameborder', '0');\n";
  codeStr += "  iframe.style.padding = '10px 0px 10px 0px';\n";
  codeStr += "\n";
  codeStr += "  // visit link\n";
  codeStr += "  var vlSpan = document.createElement('span');\n";
  codeStr += "  vlSpan.setAttribute('class', 'video-wall-cta-container');\n";
  codeStr += "  vlSpan.style.fontWeight = 'bold';\n";
  codeStr += "  vlSpan.style.fontSize = '12px';\n";
  codeStr += "  vlSpan.style.fontFamily = 'aria';\n";
  codeStr += "  var vlA = document.createElement('a');\n";
  codeStr += "  vlA.setAttribute('id', 'bottom-bar-link');\n";
  codeStr += "  vlA.setAttribute('target', '_blank');\n";
  codeStr += "  vlA.setAttribute('class', 'fill-channel-icon');\n";
  codeStr += "  vlA.setAttribute('href', 'http://hcil.snu.ac.kr/research/cloakingnote');\n";
  codeStr += "  var vlNode = document.createTextNode('Visit Advertiser Site');\n";
  codeStr += "  vlA.appendChild(vlNode);\n";
  codeStr += "  vlSpan.appendChild(vlA);\n";
  codeStr += "\n";
  codeStr += "  // divider\n";
  codeStr += "  var rootOfRoot = document.getElementById('watch7-sidebar-ads');\n";
  codeStr += "  var divider = document.createElement('hr');\n";
  codeStr += "  divider.setAttribute('class', 'watch-sidebar-separation-line');\n";
  codeStr += "\n";
  codeStr += "  // add all components\n";
  codeStr += "  div.appendChild(adTag);\n";
  codeStr += "  div.appendChild(adTitle);\n";
  codeStr += "  div.appendChild(iframe);\n";
  codeStr += "  div.appendChild(vlSpan);\n";
  codeStr += "  rootDiv.appendChild(div);\n";
  codeStr += "  rootDiv.appendChild(divider);\n";
  codeStr += "  /* end of code */\n";

  chrome.tabs.executeScript(null, {
    code: codeStr
  });
}

document.getElementById('bt').addEventListener('click', onVideoWatch);