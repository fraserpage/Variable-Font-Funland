import WebFont from 'webfontloader';
import fonts from "./fonts";

export function getFontProps(font){
  const props = fonts.find(f => f.font === font)
  return props
}

export function loadFont(font){
  if (document.documentElement.classList.contains(
    `wf-${font.replace(' ','').toLowerCase()}-n4-active`
  )) return  
  const {vars} = getFontProps(font)
  WebFont.load({
    google: {
      families: [`${font}:${vars.map(v=>v.var).join(",")}@${vars.map(v=>v.min+'..'+v.max).join(",")}&display=swap`],
      api: 'https://fonts.googleapis.com/css2',
    }
  });
}