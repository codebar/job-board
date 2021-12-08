import { useState } from 'react';

const SignUp = ({register}) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const isInvalid = registerEmail === '' || registerPassword === ''

    const handleSignUpButtonClick = () => {
        register(registerEmail, registerPassword);
    };

    return (
        <div>
      <div>
        <h3> Register for Job Board </h3>
        <input placeholder="email..." onChange = {(evt) => {setRegisterEmail(evt.target.value)}}></input>
        <input placeholder="password..." onChange = {(evt) => {setRegisterPassword(evt.target.value)}}></input>

        <button disabled={isInvalid} onClick={handleSignUpButtonClick}> Create User </button>
      </div>
    </div>
    );
};

export default SignUp;