import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const BeforePostCheckList = () => {

    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [checkThree, setCheckThree] = useState(false);
    const [checkFour, setCheckFour] = useState(false);
    const [checkFive, setCheckFive] = useState(false);
    const [checkSix, setCheckSix] = useState(false);

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

                <hr />

                <p>For <b>£250</b> you can have your job listing featured in our next global newsletter (12,000 people), posted on all of our socials (both global and location ones) and in our Slack.</p>

                <Button variant='info' className='button fw-bold'><a className="text-dark text-decoration-none" href="https://buy.stripe.com/fZecN21QO15IdVK7sv">Sound good? Pay here</a></Button>

            </div>

        </div>
    );
};

export default BeforePostCheckList;
