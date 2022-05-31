import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import * as ROUTES from '../../constants/routes.js';
import { Link } from 'react-router-dom';

const ForgotPassword = ({resetPasswordEmail}) => {
    const [signInEmail, setSignInEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleLogInButtonClick = async (evt) => {
        evt.preventDefault();
        try {
            await resetPasswordEmail(signInEmail);
            setSuccessMessage("A reset link has been sent to your inbox");
        } catch (error) {
            console.log(error.message);
            if (error.message === 'FirebaseError: Firebase: Error (auth/invalid-email).') {
                setErrorMessage('Invalid email address');
            } else if (error.message === 'FirebaseError: Firebase: Error (auth/user-not-found).') {
                setErrorMessage('We couldn\'t find that email address in our system.  Sign up to register.');
            } else {
                setErrorMessage('Error sending link');
            };
        };
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


                        <Button onClick={(evt) => handleLogInButtonClick(evt)} className='button fw-bold' type="submit" disabled={!validateForm()}>
                            Reset password
                        </Button>

                        <a href={ROUTES.SIGN_IN}>
                            Go to login page
                        </a>
                    </Form>
                    { successMessage? <Alert variant='success'>{successMessage}</Alert> : 
                        errorMessage? <Alert variant='danger'>{errorMessage}</Alert> : null
                    }
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
