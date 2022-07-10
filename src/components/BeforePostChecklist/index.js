import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const BeforePostCheckList = () => {

    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [checkThree, setCheckThree] = useState(false);
    const [checkFour, setCheckFour] = useState(false);
    const [checkFive, setCheckFive] = useState(false);
    const [checkSix, setCheckSix] = useState(false);
    const [checkSeven, setCheckSeven] = useState(false);



    return (
        <div className="before-post-checklist-box card">
            <div className="card-header">
                <p className='fw-bold m-0'>Before posting make sure that:</p>
            </div>
            <div className="card-body">
                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="The position is suitable for people looking for internships, apprenticeships or junior roles that will enable them to build up their career"
                    defaultChecked = {checkOne} onChange={() => {setCheckOne(!checkOne)}}></Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="There is no degree requirement"
                    defaultChecked = {checkTwo} onChange={() => {setCheckTwo(!checkTwo)}}></Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="There is no previous experience requirement"
                    defaultChecked = {checkThree} onChange={() => {setCheckThree(!checkThree)}}></Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="The job description details the work that will have to be undertaken"
                    defaultChecked = {checkFour} onChange={() => {setCheckFour(!checkFour)}}></Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="The job description is short and to the point"
                    defaultChecked = {checkFive} onChange={() => {setCheckFive(!checkFive)}}></Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="The job pays an appropriate salary"
                    defaultChecked = {checkSix} onChange={() => {setCheckSix(!checkSix)}}></Form.Check>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="You have made the required payment of £50"
                    defaultChecked = {checkSeven} onChange={() => {setCheckSeven(!checkSeven)}}></Form.Check>
                </Form.Group>

                <Button variant='info' className='button fw-bold'><a className="text-dark text-decoration-none" href="https://buy.stripe.com/fZe5kAeDA5lY6ti5kk">Pay here</a></Button>
                <p>For an additional <b>£200</b> you can have your job listing featured in our newsletter and made available to an audience of over 10000 students and coaches. To find out more and when our next newsletter is being sent, send us an email at <a href='hello@codebar.io'>hello@codebar.io</a>.</p>
            </div>

        </div>
    );
};

export default BeforePostCheckList;
