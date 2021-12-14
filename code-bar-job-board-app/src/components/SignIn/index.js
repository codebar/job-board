
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';



const SignIn = ({sendLink, logIn}) => {

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleLogInSubmit = () => {
    logIn(signInEmail, signInPassword);
  };

  const validateForm = () => {
    return signInEmail.length > 0 && signInPassword.length > 0;
  }


  return (
    <div className="login container">
      <p>Log in to view your jobs, or post a new job</p>
      <Form onSubmit={handleLogInSubmit} className='col-lg-4 col-md-6'>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
        </Form.Group>
        <Button className='button' type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
  
  };

export default SignIn;