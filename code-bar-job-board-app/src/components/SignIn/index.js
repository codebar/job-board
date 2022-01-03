
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes.js'



const SignIn = ({logIn}) => {

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleLogInButtonClick = () => {
    logIn(signInEmail, signInPassword);
  };

  const validateForm = () => {
    return signInEmail.length > 0 && signInPassword.length > 0;
  }


  return (
    <div className="login container">
      <p>Log in with email and password</p>
      <Form className='col-lg-4 col-md-6'>
        <Form.Group size="lg" controlId="email" className="sign-in-up-input">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={signInEmail}
            onChange={(evt) => setSignInEmail(evt.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="sign-in-up-input">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={signInPassword}
            onChange={(evt) => setSignInPassword(evt.target.value)}
          />
        </Form.Group>
        <Link to={{pathname: ROUTES.LANDING}}>
          <Button onClick={handleLogInButtonClick} className='button bold' type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Link>
        <Link to={{pathname: ROUTES.FORGOT_PASSWORD}}><a>I've forgotten my password</a></Link>
      </Form>
      <hr />
      <div>
        <p>Don't have an account?</p>
        <Link to={{pathname: ROUTES.SIGN_UP}}><Button className='button bold' variant="info">Sign up</Button></Link>
      </div>
    </div>
  );

  };

export default SignIn;
