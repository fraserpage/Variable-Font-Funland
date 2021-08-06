import { Link } from "react-router-dom";
import WordArt from "../WordArt/WordArt";

export default function WordArtLink(props){
  return(
    <Link to={{
      pathname: `/playground/${props._id}`,
      state: props
    }}>
      <WordArt {...props}/>
    </Link>
  )
}