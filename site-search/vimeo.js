const script = document.createElement("script");
script.src = "https://player.vimeo.com/api/player.js";
document.head.appendChild(script);

{
  /* <div style="padding:56.25% 0 0 0;position:relative;">

<iframe
  src="https://player.vimeo.com/video/1061517628?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
  style="position:absolute;top:0;left:0;width:100%;height:100%;"
  title="How to setup Trieve AI SiteSearch for Ecommerce"
></iframe>
</div> */
}

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
document.body.appendChild(vimeoEcommerceGuide);

document
  .querySelector("#vimeo-ecommerce-guide")
  .replaceWith(vimeoEcommerceGuide);
