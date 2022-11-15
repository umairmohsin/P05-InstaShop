import logo from '../../images/logo.png'
import './landing.css';

function Landing() {
  return (
    <div className="landing">
      <img className='logo' src={logo} />
      <div className='landingarea'>
        <img className='logo1' src={logo} /> 
        <p className='motto'>COLLABORATIONS MADE EASY</p>
        <button className='landingbuttons'>Sign Up</button>
        <button className='landingbuttons'>Sign In</button>
      </div>
    </div>
  );
}

export default Landing;
