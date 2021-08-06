import './Nav.css'
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from '../Logo/Logo';

export default function Nav(props){
  return(
    <nav>
      <Logo/>

      <a href="/playground">Playground</a>
     
      {props.user?
        <UserLogOut 
          user={props.user} 
          setUserInState={props.setUserInState}
        />
        :
        <div className='UserLogOut'>
            <span className='link' onClick={()=>props.handleShowModal('login')}>Login</span>
            <span className='link' onClick={()=>props.handleShowModal('signup')}>Sign up</span>
        </div>
      }
    </nav>
  )
}