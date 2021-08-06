import { Range } from "rc-slider";

export default function StylePointsControls(props){

  const animation = props.currentlyEditing.animation
  const stylePoint = props.currentlyEditing.stylePoint
  const values = props.animations[animation].stylePoints.map(s=>s.point)

  return(
    <Range
        value={values}
        min={0} max={1}
        // onChange={this.handleChange}
        allowCross={false}
        pushable={5} 
      />
  )
}