import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './PlaygroundPage.css'
// Components
import WordArt from '../../components/WordArt/WordArt';
import WordArtControls from '../../components/WordArtControls/WordArtControls';
// Utils
import { createWordArt } from '../../utils/wordArtUtils';
import { getFontProps, loadFont } from '../../utils/fontUtils';
import { getOneWordArt } from "../../utils/wordArtUtils";



export default class PlaygroundPage extends React.Component {

  state = {
    text: 'Your text here',
    font: 'Recursive',
    currentlyEditing: {
      animation: 0,
      stylePoint: 0
    },
    animations : [
      {
        position: 0,
        easing: 'linear',
        stylePoints: [
          {
            point: 0,
            fontSize: 1,
            letterSpacing: 0,
            lineHeight: 1.1,
            vars: [
              { var: 'slnt',	val: 0,		min: -15,	max: 0,		step: 1 },
              { var: 'wght',	val: 400,	min: 300,	max: 1000,step: 1 },
              { var: 'CASL',	val: 0,		min: 0,		max: 1,		step: 0.01 },
              { var: 'CRSV',	val: 0.5,	min: 0,		max: 1,		step: 0.1 },
              { var: 'MONO',	val: 0,		min: 0,		max: 1,		step: 0.01 }
            ]
          }
        ]
      }
    ],
    
  }

  async componentDidMount(){
    // Load props from location if passed via link
    if (this.props.locationState) {
      this.setState({...this.props.locationState})
    }
    // call the api to get props
    else if(this.props.id){
      const wordArt = await getOneWordArt(this.props.id)
      this.setState({...wordArt})
    }
    loadFont(this.state.font)
  }

  setPlaygroundState = (state) =>{
    this.setState(state)
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render(){
    return(
      <div className="playground">
        <div className='main'>
          <div style={{fontSize:'10vmin'}}>
            <WordArt {...this.state}/>
          </div>
          <button onClick={()=>createWordArt(this.state)}>
            Save to gallery
          </button>
          <p>
            <a 
              href={`https://fonts.google.com/specimen/${(this.state.font).replace(' ','+')}`} 
              target="_blank" 
              rel="noreferrer"
            >
              See {this.state.font} on Google Fonts
            </a>
          </p>
        </div>
        <div className='sidebar'>

          <TextareaAutosize
            name="text" 
            cacheMeasurements
            value={this.state.text}
            onChange={this.handleChange}
            style={{
              resize: "none",
              width: "100%",
            }}
          />
          
          <WordArtControls 
            setPlaygroundState={this.setPlaygroundState} 
            {...this.state} 
          />
        </div>
      </div>
    )
  }
}