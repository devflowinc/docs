const script = document.createElement("script");
script.src = "https://player.vimeo.com/api/player.js";
document.head.appendChild(script);

const vimeoEcommerceGuide = document.createElement("div");
vimeoEcommerceGuide.style.padding = "56.25% 0 0 0";
vimeoEcommerceGuide.style.position = "relative";
const vimeoEcommerceIframe = document.createElement("iframe");
vimeoEcommerceIframe.src =
  "https://player.vimeo.com/video/1061517628?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
vimeoEcommerceIframe.frameborder = "0";
vimeoEcommerceIframe.allow =
  "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media";
vimeoEcommerceIframe.style =
  "position:absolute;top:0;left:0;width:100%;height:100%;";
vimeoEcommerceIframe.title = "How to setup Trieve AI SiteSearch for Ecommerce";
vimeoEcommerceGuide.appendChild(vimeoEcommerceIframe);

document
  .querySelector("#vimeo-ecommerce-guide")
  ?.replaceWith(vimeoEcommerceGuide);

const vimeoContentGuide = document.createElement("div");
vimeoContentGuide.style.padding = "56.25% 0 0 0";
vimeoContentGuide.style.position = "relative";
const vimeoContentIframe = document.createElement("iframe");
vimeoContentIframe.src =
  "https://player.vimeo.com/video/1061524907?h=d0cb209909&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
vimeoContentIframe.frameborder = "0";
vimeoContentIframe.allow =
  "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media";
vimeoContentIframe.style =
  "position:absolute;top:0;left:0;width:100%;height:100%;";
vimeoContentIframe.title =
  "How to Setup Trieve Sitesearch for a Blog, Content, or Help Center Site";
vimeoContentGuide.appendChild(vimeoContentIframe);
document.body.appendChild(vimeoContentGuide);

document.querySelector("#vimeo-content-guide")?.replaceWith(vimeoContentGuide);
