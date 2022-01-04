import { Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../Firebase/firebase-config.js'


const SendEmail = ({createEmail}) => {

    

    const sendEmail = () => {
        createEmail('smhumphries@hotmail.co.uk', 
        {
            subject: 'Hello again',
            text: 'text text',
        });
    };

    

    return (
        <div className="container">
            <Button onClick={() => {sendEmail()}} className="button">Send Email</Button>
        </div>
    );
};

export default SendEmail;