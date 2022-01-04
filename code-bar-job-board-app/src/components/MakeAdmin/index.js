import { Form, Button, FormGroup } from 'react-bootstrap';

const MakeAdmin = ({makeNewAdmin, removeAdmin}) => {

    const handleAdminFormSubmit = (evt) => {
        evt.preventDefault();
        const adminEmail = document.querySelector('#new-admin-email').value;
        makeNewAdmin(adminEmail);
    };

    const handleRemoveAdminSubmit = (evt) => {
        evt.preventDefault();
        const adminEmail = document.querySelector('#remove-admin-email').value;
        removeAdmin(adminEmail);
    };

    return (
        <div className='container'>
            
            <h3>Add a new admin</h3>
            <p>To make an existing user an admin by their email address</p>
            <Form onSubmit={handleAdminFormSubmit} className="col-6">
                <FormGroup controlId='new-admin-email'>
                    <Form.Control type='email' placeholder='user email' ></Form.Control>
                </FormGroup>
                <Button className='button' type='submit'>Make an admin</Button>
            </Form>
            
            <hr></hr>

            <h3>Remove an admin</h3>
            <p>To remove an admin by their email address</p>
            <Form onSubmit={handleRemoveAdminSubmit} className="col-6">
                <FormGroup controlId='remove-admin-email'>
                    <Form.Control type='email' placeholder='user email' ></Form.Control>
                </FormGroup>
                <Button className='button' type='submit'>Remove admin</Button>
            </Form>
            
        </div>
    );
};

export default MakeAdmin;