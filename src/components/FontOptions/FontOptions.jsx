import _ from 'lodash';
import Select from 'react-select'
import fonts from '../../utils/fonts'
import { getFontProps, loadFont } from '../../utils/fontUtils'

const handleSelect = (e, props) =>{

  const fontProps = getFontProps(e.value)
  const animations = props.animations
  const stylePoints = animations[0].stylePoints
  stylePoints.forEach((e,i,a)=>(
    a[i].vars = _.cloneDeep(fontProps.vars)
  ))
  // this.setState({...fontProps})
  loadFont(fontProps.font, fontProps.vars)

  props.setPlaygroundState({ 
    animations,
    font: e.value
  })
}

export default function FontOptions(props){
  return(
    <>
    <label id='font-label'>Font</label>
    <Select 
      aria-labelledby='font-label'
      defaultValue={{ value: props.font, label: props.font }}  
      onChange={e=>handleSelect(e,props)}
      options={fonts.map(f=>(
        {value:f.font, label:f.font}
      ))} 
    />
    </>
   
  )
}


