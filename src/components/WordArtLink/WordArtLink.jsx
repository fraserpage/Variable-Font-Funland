import { Link } from "react-router-dom";

export default function WordArtLink(props){
  return(
    <Link to={{
      pathname: `/playground/${props._id}`,
      state: props
    }}>
      <WordArt>{props.text}</WordArt>
    </Link>
  )
}