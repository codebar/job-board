
import { useState } from 'react'



const SignIn = ({sendLink}) => {

  const [signInEmail, setSignInEmail] = useState("");


  return (
    <div>
      <div>
        <h3> Sign in </h3>
        <input placeholder="email..." onChange = {(evt) => {setSignInEmail(evt.target.value)}}></input>

        <button onClick={() => sendLink(signInEmail)}> Send magic link </button>
      </div>
    </div>
  );
  
  };

export default SignIn;