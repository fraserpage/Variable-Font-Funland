import UserLogOut from "../UserLogOut/UserLogOut";

export default function Nav(props){
  return(
    <nav>
      <div>
        <a id="logo" href="/">
          <span>V</span>
          <span>F</span>
          <span>Funland</span>
        </a>
        <ul>
          <li>
            <a href="/playground">Playground</a>
          </li>
        </ul>
      </div>
     
      {props.user?
        <UserLogOut user={props.user} setUserInState={props.setUserInState}/>
        :
        <>
          <div>
            <a href="/login">Login</a>
          </div>
          <div>
            <a href="/sign-up">Sign up</a>
          </div>
        </>
      }
    </nav>
  )
}