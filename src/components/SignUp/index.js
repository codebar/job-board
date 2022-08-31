import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes.js';

const SignUp = ({register}) => {

    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [userMarketingOptIn, setUserMarketingOptIn] = useState(true);



    const isValid = () => {
      return registerEmail.length > 0 && registerPassword.length > 0 && registerPassword === registerConfirmPassword;
    };

    const handleSignUpButtonClick = async (evt) => {
      evt.preventDefault();
      try {
        await register(registerEmail, registerPassword, registerName, userMarketingOptIn);
      } catch (error) {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Email already in use")
        } else {
          setErrorMessage("An error occured when registering")
        };
      };
    };

    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h4 class="mb-3">We are very excited to launch the brand new codebar job board. It is currently in beta so if you spot any issues please drop us an email <a href="mailto:hello@codebar.io">hello@codebar.io</a>.</h4>
            <p>Sign up to post jobs to the codebar Job Board and get your opportunity in front of our 19,000+ person community.</p>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
            <Form.Group size="lg" controlId="name" className="sign-in-up-input">
                <Form.Label>Full name*</Form.Label>
                <Form.Control
                  autoFocus
                  type="name"
                  autoComplete='username'
                  value={registerName}
                  onChange={(evt) => setRegisterName(evt.target.value)}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="email" className="sign-in-up-input">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  autoComplete='username'
                  value={registerEmail}
                  onChange={(evt) => setRegisterEmail(evt.target.value)}
                />
              </Form.Group>

              <Form.Group size="lg" controlId="password" className="sign-in-up-input">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  autoComplete='new-password'
                  value={registerPassword}
                  onChange={(evt) => setRegisterPassword(evt.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password" className="mb-4 sign-in-up-input">
                <Form.Label>Confirm password*</Form.Label>
                <Form.Control
                  type="password"
                  autoComplete='new-password'
                  value={registerConfirmPassword}
                  onChange={(evt) => setRegisterConfirmPassword(evt.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="job-remote">
                    <Form.Check type='checkbox' label="Un-check this box to opt out of marketing emails" defaultChecked = {userMarketingOptIn} onChange={() => {setUserMarketingOptIn(!userMarketingOptIn)}}></Form.Check>
              </Form.Group>

              <Button onClick={(evt) => handleSignUpButtonClick(evt)} className='button' type="submit" disabled={!isValid()}>
                  Sign up
              </Button>

                {errorMessage? <Alert variant='danger'>{errorMessage}</Alert> : null}

            </Form>
            <hr/>
            <div>
              <p>Already have an account?</p>
              <Link to={{pathname: ROUTES.SIGN_IN}}><Button className='button fw-bold' variant="info">Sign in</Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default SignUp;
