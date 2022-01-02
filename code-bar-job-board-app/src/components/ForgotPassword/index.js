import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
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
        <div className="login container">
        <p>We'll send a password reset link to your email</p>
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
            
            
            <Button onClick={handleLogInButtonClick} className='button bold' type="submit" disabled={!validateForm()}>
                Reset password
            </Button>

            <Link to={{pathname: ROUTES.SIGN_IN}}>
            <Button className='button bold'>
                Go to login page
            </Button>
            </Link>
            
            
        </Form>
        <hr />
        <div>
            <p>Don't have an account?</p>
            <Link to={{pathname: ROUTES.SIGN_UP}}><Button className='button bold' variant="info">Sign up</Button></Link>
        </div>
        </div>
    );
};

export default ForgotPassword;