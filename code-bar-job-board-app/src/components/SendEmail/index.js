import { Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../Firebase/firebase-config.js'


const SendEmail = () => {

    const mailCollectionRef = collection(db, "mail");

    const createEmail = async () => {
          
          try {  
            const email = await addDoc(mailCollectionRef, {
              to: ['smhumphries@hotmail.co.uk'],
              message: {
                  subject: 'Hello from the app!',
                  text: 'This is plain text'
              }
            });
            console.log(email);
            
          } catch (error) {
            console.log(error);
          };
          
      };

    

    return (
        <div className="container">
            <Button onClick={() => {createEmail()}} className="button">Send Email</Button>
        </div>
    );
};

export default SendEmail;