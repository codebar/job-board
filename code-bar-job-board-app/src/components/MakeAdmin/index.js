import { Form, Button, FormGroup } from 'react-bootstrap';

const MakeAdmin = ({makeNewAdmin}) => {

    const handleAdminFormSubmit = (evt) => {
        evt.preventDefault();
        const adminEmail = document.querySelector('#admin-email').value;
        makeNewAdmin(adminEmail);
    };

    return (
        <div className='container'>
            <p>To make an existing user an admin by their email address</p>
            <Form onSubmit={handleAdminFormSubmit} className="col-6">
                <FormGroup controlId='admin-email'>
                    <Form.Control type='email' placeholder='user email' ></Form.Control>
                </FormGroup>
                <Button className='button' type='submit'>Make an admin</Button>
            </Form>
            
        </div>
    );
};

export default MakeAdmin;