import { Component } from "react";
import WordArt from "../../components/WordArt/WordArt";
import { getAllWordArt } from "../../utils/wordArtUtils";

export default class HomePage extends Component{

  state = {
    wordArt : []
  }

  async componentDidMount(){
    const wordArt = await getAllWordArt()
    this.setState({wordArt})
  }

  render(){
    return(
      <div>
        <h1>Home page</h1>
        <div>
          {this.state.wordArt.map(w => <WordArt key={w._id} {...w} />)}
        </div>
      </div>
    )
  }
}