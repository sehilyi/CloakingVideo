var url = 'FEsFXsPCVOo';
var tempUrl = document.getElementById('url').value;
if(tempUrl != '') url = tempUrl;
if(url.indexOf('=') != -1) url = url.split('=')[1];

/* code that should be inserted in executeScript() */
var id = 'google_companion_ad_div';
var rootDiv = document.getElementById(id);

if(rootDiv == null){
  var rrr = document.getElementById("watch7-sidebar-ads");

  var rr = document.createElement('div');
  rr.setAttribute('id', 'watch-channel-brand-div');
  rrr.appendChild(rr);

  rootDiv = document.createElement('div');
  rootDiv.setAttribute('id', id);
  rr.appendChild(rootDiv);
}

var videoUrl = 'https://www.youtube.com/embed/' + url + '?rel=0&amp;controls=1&autoplay=1&amp;showinfo=1?ecver=1';

// clear all ad components
while(rootDiv.hasChildNodes()) {
  rootDiv.removeChild(rootDiv.lastChild);
}

// main div
var div = document.createElement('div');
div.setAttribute('id', 'video-wall-container-v2');
div.style.textAlign = 'left';

// ad Title
var adTag = document.createElement("span");
adTag.setAttribute('class', 'yt-badge ad-badge-byline yt-badge-ad');
adTag.setAttribute('aria-label', 'Advertisement');
var tagNode = document.createTextNode("Ad");
adTag.appendChild(tagNode);

var adTitle = document.createElement("span");
adTitle.style.fontWeight = '500';
adTitle.style.fontSize = '14px';
var adNode = document.createTextNode("CLOAKINGNOTE");
adTitle.appendChild(adNode);

// video
var iframe = document.createElement('iframe');
iframe.setAttribute('width', '300');
iframe.setAttribute('height', '169');
iframe.setAttribute('src', videoUrl);
iframe.setAttribute('frameborder', '0');
iframe.style.padding = '10px 0px 10px 0px';

// visit link
var vlSpan = document.createElement("span");
vlSpan.setAttribute('class', 'video-wall-cta-container');
vlSpan.style.fontWeight = 'bold';
vlSpan.style.fontSize = '12px';
vlSpan.style.fontFamily = 'aria';
var vlA = document.createElement("a");
vlA.setAttribute('id', 'bottom-bar-link');
vlA.setAttribute('target', '_blank');
vlA.setAttribute('class', 'fill-channel-icon');
vlA.setAttribute('href', 'http://hcil.snu.ac.kr/research/cloakingnote');
var vlNode = document.createTextNode("Visit Advertiser's Site");
vlA.appendChild(vlNode);
vlSpan.appendChild(vlA);

// divider
var rootOfRoot = document.getElementById('watch7-sidebar-ads');
var divider = document.createElement('hr');
divider.setAttribute('class', 'watch-sidebar-separation-line');

// add all components
div.appendChild(adTag);
div.appendChild(adTitle);
div.appendChild(iframe);
div.appendChild(vlSpan);
rootDiv.appendChild(div);
rootDiv.appendChild(divider);
/* end of code */
