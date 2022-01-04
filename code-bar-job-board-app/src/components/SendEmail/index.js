import { Button } from "react-bootstrap";
import approveEmail from './approve_email.js';

const SendEmail = ({createEmail}) => {

    const sendEmail = () => {
        createEmail('smhumphries@hotmail.co.uk', 
        {
            subject: 'Approved!',
            html: `${approveEmail}`,
        });
    };


    return (
        <div className="container">
            <Button onClick={() => {sendEmail()}} className="button">Send</Button>
        </div>
    );
};

export default SendEmail;