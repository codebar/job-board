import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import * as ROUTES from '../../constants/routes.js';
import { Link } from 'react-router-dom';

const ForgotPassword = ({resetPasswordEmail}) => {
    const [signInEmail, setSignInEmail] = useState("");


    const handleLogInButtonClick = () => {
        resetPasswordEmail(signInEmail);

    };

    const validateForm = () => {
        return signInEmail.length > 0;
    }


    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <p>We'll send a password reset link to your email</p>
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


                        <Button onClick={handleLogInButtonClick} className='button fw-bold' type="submit" disabled={!validateForm()}>
                            Reset password
                        </Button>

                        <a href={ROUTES.SIGN_IN}>
                            Go to login page
                        </a>
                    </Form>
                    <hr />
                    <div>
                        <p>Don't have an account?</p>
                        <Link to={{pathname: ROUTES.SIGN_UP}}><Button className='button bold' variant="info">Sign up</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
