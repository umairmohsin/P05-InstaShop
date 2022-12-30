import logo from '../../images/logo.png'
import './landing.css';
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const Landing = () => {

  const navigate = useNavigate()

  const signup = () =>{
    navigate('/signup')
   
  }

  const login = () =>{
    navigate('/login')
   
  }
  return (
    <div className="landing">
      <div className='landingarea'>
        <img className='logo1' src={logo} /> 
        <p className='motto'>COLLABORATIONS MADE EASY</p>
        <button className='landingbuttons'onClick={signup}>Sign Up</button>
        <button className='landingbuttons'onClick={login}>Sign In</button>
      </div>
    </div>
  );
}

export default Landing;
