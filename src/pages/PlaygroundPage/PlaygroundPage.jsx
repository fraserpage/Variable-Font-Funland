import { Component } from 'react';
import { createWordArt } from '../../utils/wordArtUtils';

export default class PlaygroundPage extends Component {
  state = {
    text: '',
    props: [
      { prop: 'size', val: '2' },
      { prop: 'wght', val: '700' }
    ]
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render(){
    return(
      <div>
        <input name="text" type="text" value={this.state.text} onChange={this.handleChange} placeholder="Type here"/>
        <button onClick={()=>createWordArt(this.state)}>Save to gallery</button>
      </div>
    )
  }
}