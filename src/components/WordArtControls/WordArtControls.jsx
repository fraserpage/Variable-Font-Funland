import _ from 'lodash';
import styled from 'styled-components';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import './WordArtControls.css'
import Select from 'react-select'
import FontOptions from '../FontOptions/FontOptions';
import StylePointsControls from '../StylePointsControls/StylePointsControls';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 15rem;
`
const handleSlider = (e,i, props) => {
  const animation = props.currentlyEditing.animation
  const stylePoint = props.currentlyEditing.stylePoint
  const animations = props.animations

  if (typeof i === 'string'){
    animations[animation].stylePoints[stylePoint][i] = e
  }
  else{
    animations[animation].stylePoints[stylePoint].vars[i].val = e
  }
  props.setPlaygroundState({ animations })
}

const handleAddStylePoint = (props) => {
  const animation = props.currentlyEditing.animation
  const animations = props.animations
  // save the new length of the stylePoints list
  const length = animations[animation].stylePoints.push(
    // push a copy of stylePoint 0 to stylePoints
    _.cloneDeep(animations[animation].stylePoints[0])
  )
  animations[animation].stylePoints[length - 1].point = 1
  const currentlyEditing = props.currentlyEditing
  currentlyEditing.stylePoint = length - 1
  props.setPlaygroundState({ 
    animations,
    currentlyEditing
  })
}

const handleChangeEditPoint = (point, props) => {
  const currentlyEditing = props.currentlyEditing
  currentlyEditing.stylePoint = point
  props.setPlaygroundState({ 
    currentlyEditing
  })
}

const handleSelect = (e, prop, props) =>{
  const animation = props.currentlyEditing.animation
  const animations = props.animations
  animations[animation][prop] = e.value
  props.setPlaygroundState({ 
    animations
  })
}

export default function WordArtControls(props){

  const animation = props.currentlyEditing.animation
  const stylePoint = props.currentlyEditing.stylePoint
  const currentStyle = props.animations[animation].stylePoints[stylePoint]

  return(
    <div>

      <div>
        <button className='small' onClick={()=>handleAddStylePoint(props)}>Add style point</button> 
      </div>
      
      {props.animations[animation].stylePoints.map((s,i) =>(
        <p onClick={()=>handleChangeEditPoint(i,props)} key={i}>
          { i === props.currentlyEditing.stylePoint && 'currently editing point '}
          {s.point}
        </p>
      ))}

      <StylePointsControls {...props} />

      <List id='controls'>
        <li>
          <FontOptions {...props}/>
        </li>
        <li>
          <label htmlFor='font-size'>Size</label>
          <Slider 
            id='font-size' 
            value={currentStyle.fontSize} 
            min={0.2} max={2} step={0.05}
            onChange={(e)=>handleSlider(e,'fontSize',props)} 
          />
        </li>
        <li>
          <label htmlFor='letter-spacing'>Letter Spacing</label>
          <Slider 
            id='letter-spacing' 
            value={currentStyle.letterSpacing}
            min={-0.2} max={0.5} marks={{0:''}} step={0.01}
            dotStyle={{borderColor:'black'}}
            onChange={(e)=>handleSlider(e,'letterSpacing',props)} 
          />
        </li>
        <li>
          <label htmlFor='line-height'>Line Height</label>
          <Slider 
            id='line-height'
            value={currentStyle.lineHeight} 
            min={0.1} max={3.5} step={0.01}
            onChange={(e)=>handleSlider(e,'lineHeight',props)}  
          />
        </li>
        {currentStyle.vars.map((v,i)=>(
          <li key={i} >
            <label htmlFor={v.var}>{v.var}</label>
            <Slider 
              id={v.var} 
              value={currentStyle.vars[i].val}
              min={v.min} max={v.max}  step={v.step}
              onChange={(e)=>handleSlider(e,i,props)} 
            />
          </li>
        ))}
        <li>
          <label id='easing-label'>Easing</label>
          <Select 
            aria-labelledby='easing-label'
            defaultValue={{ value: 'linear', label: 'Linear' }}  
            options={[
              { value: 'linear', label: 'Linear' },
              { value: 'easeInOutQuad', label: 'EaseInOut' }
            ]} 
            onChange={e=>handleSelect(e,'easing',props)}
          />
        </li>
      </List>
    </div>
  )
}