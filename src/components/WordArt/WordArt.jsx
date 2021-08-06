import './WordArt.css'

const wordArtStyle = (props) => {
  const styleObj = {}
  const stylePoints = props.animations[0].stylePoints
  const numStylePoints = stylePoints.length
  if (numStylePoints === 1){
    const stylePoint = props.animations[0].stylePoints[0]
    styleObj['fontFamily'] = stylePoint.font
    styleObj['fontSize'] = stylePoint.fontSize+'em'
    styleObj['lineHeight'] = stylePoint.lineHeight+'em'
    styleObj['letterSpacing'] = stylePoint.letterSpacing+'em'
    styleObj['fontVariationSettings'] = stylePoint.vars.map(v=>`"${v.var}" ${v.val}`).join(", ")
  }
  else{
    styleObj['lineHeight'] = 0
  }
  styleObj['whiteSpace'] = 'pre-line';
  styleObj['wordBreak'] = 'break-word';
  styleObj['fontFamily'] = props.font
  return styleObj
}

const wordArtStyleWithEase = (stylePoints,currentPoint,ease) => {
  const styleObj = {}
  styleObj['fontSize'] = easeProp(stylePoints,currentPoint,'fontSize',ease) + 'em'
  styleObj['lineHeight'] = easeProp(stylePoints,currentPoint,'lineHeight',ease) + 'em'
  styleObj['letterSpacing'] = easeProp(stylePoints,currentPoint,'letterSpacing',ease) +'em'
  styleObj['fontVariationSettings'] = stylePoints[currentPoint].vars.map((v,i)=>`"${v.var}" ${easeFontVar(stylePoints,currentPoint,ease,i)}`).join(", ")
  return styleObj
}

function easeFontVar(stylePoints,currentPoint,ease,i){
  let from = stylePoints[currentPoint - 1].vars[i].val 
  let to = stylePoints[currentPoint].vars[i].val 
  return from + ((to - from) * ease)
}

function easeProp(stylePoints, currentPoint, prop, ease){
  const from = stylePoints[currentPoint-1][prop]
  const to = stylePoints[currentPoint][prop]
  return from + ((to - from) * ease)
}

function wordArtCharStyle(props,charPos){
  let styleObj = {}
  const stylePoints = props.animations[0].stylePoints
  const numStylePoints = stylePoints.length
  if (numStylePoints > 1){
    const textLength = props.text.length -1
    const currentPos = charPos / textLength
    let currentPoint = stylePoints.length - 1
    for (let i = 0; i < stylePoints.length; i++){
      if (currentPos < stylePoints[i].point){
        currentPoint = i
        break
      }
    }
    let posInCurve = (currentPos - stylePoints[currentPoint-1].point)/(stylePoints[currentPoint].point - stylePoints[currentPoint-1].point)
    let ease = props.animations[0].easing === 'linear' ? posInCurve : easeInOutQuad(posInCurve)
    styleObj = wordArtStyleWithEase(stylePoints,currentPoint,ease)
  }
  return styleObj
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

export default function WordArt(props){
  return(
    <div className="word-art" style={wordArtStyle(props)}>
      {props.text.split('').map((char,i)=>(
        <span key={i} style={wordArtCharStyle(props,i)}>{char}</span>
      ))}
    </div>
  )
}