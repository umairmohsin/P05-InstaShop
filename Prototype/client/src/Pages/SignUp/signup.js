import logo from '../../images/logo.png'
import './signup.css';

function SignUp() {
  return (
    <div className="signup">
      <img className='logo' src={logo} />
      <div className='signuparea'>
        <p className='signupmsg'>STEP 1 OF 2</p>
        <h1 className='signuptitle'>Sign Up as an</h1>
        <input type="radio" value="Organization" name='mygroup' /> Organization
        <input type="radio" value="Endorser" name='mygroup' /> Endorser
        <button className='signupbuttons'>Confirm Choice</button>
        <p className='signupbottom1'>Already a member? Log In</p>
      </div>
    </div>
  );
}

export default SignUp;
