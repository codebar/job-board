import { Form, Button, FormGroup, Alert } from 'react-bootstrap';
import { useState } from 'react';

const MakeRemoveAdmin = ({makeNewAdmin, removeAdmin}) => {

    const [makeAdminErrorMessage, setMakeAdminErrorMessage] = useState("");
    const [makeAdminSuccessMessage, setMakeAdminSuccessMessage] = useState("");

    const [removeAdminErrorMessage, setRemoveAdminErrorMessage] = useState("");
    const [removeAdminSuccessMessage, setRemoveAdminSuccessMessage] = useState("");

    const handleNewAdminFormSubmit = async (evt) => {
        evt.preventDefault();
        const adminEmail = document.querySelector('#new-admin-email').value;
        try {
            await makeNewAdmin(adminEmail);
            setMakeAdminSuccessMessage(`${adminEmail} has successfully been made an admin`)
        } catch (error) {
            console.log(error.message);
            setMakeAdminErrorMessage(error.message);
        }
    };

    const handleRemoveAdminSubmit = async (evt) => {
        evt.preventDefault();
        const adminEmail = document.querySelector('#remove-admin-email').value;
        try {
            await removeAdmin(adminEmail);
            setRemoveAdminSuccessMessage(`${adminEmail} has successfully been removed from the admin list`)
        } catch (error) {
            setRemoveAdminErrorMessage(error.message);
        }
    };

    return (
        <div className='container'>
            
            <h3>Add a new admin</h3>
            <p>To make an existing user an admin by their email address</p>
            <Form onSubmit={handleNewAdminFormSubmit} className="col-6">
                <FormGroup controlId='new-admin-email'>
                    <Form.Control type='email' placeholder='user email' ></Form.Control>
                </FormGroup>
                <Button className='button' type='submit'>Make an admin</Button>
            </Form>
            { makeAdminErrorMessage? <Alert variant='danger'>Error updating admin rights. {makeAdminErrorMessage}</Alert>: null}
            { makeAdminSuccessMessage? <Alert variant='success'>{makeAdminSuccessMessage}</Alert>: null}
            
            <hr></hr>

            <h3>Remove an admin</h3>
            <p>To remove an admin by their email address</p>
            <Form onSubmit={handleRemoveAdminSubmit} className="col-6">
                <FormGroup controlId='remove-admin-email'>
                    <Form.Control type='email' placeholder='user email' ></Form.Control>
                </FormGroup>
                <Button className='button' type='submit'>Remove admin</Button>
            </Form>
            { removeAdminErrorMessage? <Alert variant='danger'>Error updating admin rights. {removeAdminErrorMessage}</Alert>: null}
            { removeAdminSuccessMessage? <Alert variant='success'>{removeAdminSuccessMessage}</Alert>: null}

            
        </div>
    );
};

export default MakeRemoveAdmin;