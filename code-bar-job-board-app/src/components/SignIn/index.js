
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes.js'



const SignIn = ({logIn}) => {

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogInButtonClick = async (evt) => {
    evt.preventDefault();
    try {
      await logIn(signInEmail, signInPassword);
    } catch(error) {
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setErrorMessage("Invalid username / password");
      } else {
        console.log(error.code);
        setErrorMessage("Unknown error logging in");
      };
    }
  };

  const validateForm = () => {
    return signInEmail.length > 0 && signInPassword.length > 0;
  }


  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p>Log in with your email and password</p>
          <Form>
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

              <Button onClick={(evt) => handleLogInButtonClick(evt)} className='button fw-bold' type="submit" disabled={!validateForm()}>
                Login
              </Button>

            { errorMessage? <Alert variant='danger'>{errorMessage}</Alert> : null}

            <a href={ROUTES.FORGOT_PASSWORD}>I've forgotten my password</a>
          </Form>
          <hr />
          <div>
            <p>Don't have an account?</p>
            <Link to={{pathname: ROUTES.SIGN_UP}}><Button className='button fw-bold' variant="info">Sign up</Button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );

};

export default SignIn;
