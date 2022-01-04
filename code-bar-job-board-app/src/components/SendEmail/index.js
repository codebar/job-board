import { Button } from "react-bootstrap";

const job = {
    closing_date: '20/12/2022',
    company_address: '12, Road',
    company_location: "London",
    company_name: 'codebar',
    company_postcode: 'NG3 5EY',
    company_url: 'https://www.google.com',
    contact_email: 'google@google.com',
    contact_name: 'Sara Humphries',
    created_date: new Date(),
    creator_id: '1234',
    job_description: 'description on the job',
    job_post_link: 'https://www.yahoo.com',
    job_title: "Software developer",
    marketing_opt_in: false,
    published_date: '04/01/2022',
    remote: false,
    salary: '£43,000',
    approved_status: false
};

const approveEmail = 
    
        `<html style="margin: 0; padding: 0;">

            <head>
                <title>One | Email template!</title>
            </head>
            
            <body style="margin: 0; padding: 0;">
                <p>Text again third ${job.job_title}</p>
            </body>
            
            </html>`

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