import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes.js';

const SignUp = ({register}) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");



    const isValid = () => {
      return registerEmail.length > 0 && registerPassword.length > 0 && registerPassword === registerConfirmPassword;
    };

    const handleSignUpButtonClick = async (evt) => {
      evt.preventDefault();
      try {
        await register(registerEmail, registerPassword);
      } catch (error) {
        if (error.code == "auth/email-already-in-use") {
          setErrorMessage("Email already in use")
        } else {
          setErrorMessage("An error occured when registering")
        }
        
      }
    };


    

    return (
      <div className="sign-up container">
        <p>Sign up to post jobs</p>
        <Form className='col-lg-4 col-md-6'>
          <Form.Group size="lg" controlId="email" className="sign-in-up-input">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={registerEmail}
              onChange={(evt) => setRegisterEmail(evt.target.value)}
            />
          </Form.Group>
          
          <Form.Group size="lg" controlId="password" className="sign-in-up-input">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={registerPassword}
              onChange={(evt) => setRegisterPassword(evt.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password" className="sign-in-up-input">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              value={registerConfirmPassword}
              onChange={(evt) => setRegisterConfirmPassword(evt.target.value)}
            />
            
          </Form.Group>
          
            <Button onClick={(evt) => handleSignUpButtonClick(evt)} className='button' type="submit" disabled={!isValid()}>
              Sign up
            </Button>

            { errorMessage? <Alert variant='danger'>{errorMessage}</Alert> : null}
          
        </Form>
        <hr/>
        <div>
          <p>Already have an account?</p>
          <Link to={{pathname: ROUTES.SIGN_IN}}><Button className='button' variant="info">Sign in</Button></Link>
        </div>

        
      </div>
    );

   
};

export default SignUp;