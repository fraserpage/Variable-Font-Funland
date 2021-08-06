import { Slider } from "rc-slider";
import Select from "react-select/src/Select";

export default function StylePointsControls(props){

  const animation = props.currentlyEditing.animation
  const stylePoint = props.currentlyEditing.stylePoint
  const currentStylePoint = props.animations[animation].stylePoints[stylePoint]
  const values = props.animations[animation].stylePoints.map(s=>(
    {value: s.point, label: s.point*100+'%'}
  ))
  console.log(values)

  return(
    <>
      <label id='points-ctrl'>Edit a style point</label>
      <Select
        aria-labelledby='points-ctrl'
        defaultValue={{ value: currentStylePoint, label: currentStylePoint*100+'%' }}  
        options={[values]} 
        
      />
    </>
  )
}

// onChange={e=>handleSelect(e,'points-ctrl',props)}