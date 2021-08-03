export default function WordArt(props){
  return(
    <a href={`/playground/${props._id}`}>
      {props.text}
    </a>
  )
}