import './HomePage.css'
import { Component } from "react";
import WordArt from "../../components/WordArt/WordArt";
import WordArtLink from '../../components/WordArtLink/WordArtLink';
import { getAllWordArt } from "../../utils/wordArtUtils";
import { loadFont } from "../../utils/fontUtils";
import Masonry from 'react-masonry-css'

export default class HomePage extends Component{

  state = {
    wordArt : []
  }

  async componentDidMount(){
    const wordArt = await getAllWordArt()
    wordArt.forEach(w=>loadFont(w.font))
    this.setState({wordArt})
  }

  render(){
    return(
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1
        }}
        className="masonry-grid"
        columnClassName="masonry-grid_column">
        {this.state.wordArt.map(w => (
            <div key={w._id} className="masonry-grid_item">
              <WordArtLink {...w}/>
            </div>
          ))}
      </Masonry>
    )
  }
}