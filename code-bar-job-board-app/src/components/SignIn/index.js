
import { useState } from 'react'



const SignIn = ({sendLink, logIn}) => {

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleLogInButtonClick = () => {
    logIn(signInEmail, signInPassword);
  };


  return (
    <div>
      <div>
        <h3> Sign in with magic link </h3>
        <input placeholder="email..." onChange = {(evt) => {setSignInEmail(evt.target.value)}}></input>

        <button onClick={() => sendLink(signInEmail)}> Send magic link </button>
      </div>

      <div>
        <h3>Sign in with password</h3>
        <input placeholder='password...'  onChange = {(event) => {setSignInPassword(event.target.value)}}></input>

        <button onClick = {handleLogInButtonClick}> Log in </button>  
      </div>
    </div>
    
  );
  
  };

export default SignIn;