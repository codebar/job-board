import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions';
import { db, auth } from '../Firebase/firebase-config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, sendSignInLinkToEmail } from 'firebase/auth';
import '../App/App.css';




import LandingPage from '../Landing';
import Footer from '../Footer';
import JobPage from '../JobPage/index.js';
import SignIn from '../SignIn/index.js';
import SignUp from '../SignUp/index.js';
import { NavigationBarJobBoardLoggedIn, NavigationBarJobBoardNonLoggedIn } from '../Navigation/index.js';
import MyJobsPage from '../MyJobs/index.js';
import SumbitJobPage from '../SubmitJob/index.js';
import JobPreview from '../JobPreview/index.js';
import EditJob from '../EditJob/index.js';
import MakeRemoveAdmin from '../MakeRemoveAdmin/index.js';
import AdminOnlyJobs from '../AdminOnly/index.js';
import ForgotPassword from '../ForgotPassword/index.js';


import * as ROUTES from '../../constants/routes';


const App = () => {

    const [jobs, setJobs] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    const jobsCollectionRef = collection(db, "jobs");
    const mailCollectionRef = collection(db, "mail");

    
    const navigate = useNavigate();
    const functions = getFunctions();

    const actionCodeSettings = {
      url: 'http://localhost:3000/',
      handleCodeInApp: true,
    };

    

    useEffect (() => {

        const getJobs = async () => {
          const jobsData = await getDocs(jobsCollectionRef);
          setJobs(jobsData.docs.map((doc) => ({...doc.data(), id: doc.id})));
        
        
        };
    
        getJobs();
        
    
      }, [jobsCollectionRef]);

      onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
        if (currentUser) {
          currentUser.getIdTokenResult().then(idTokenResult => {
            if (idTokenResult.claims?.admin) {
              setIsAdmin(idTokenResult.claims.admin);
            } else {
              setIsAdmin(false);
            };
          });
        };
        
        
      });

      

      const makeNewAdmin = async (adminEmail) => {
        if (isAdmin) {
          try {
            const addAdminRole = httpsCallable(functions, 'addAdminRole');
            const newAdmin = await addAdminRole( {email: adminEmail} );
            console.log(newAdmin);
            } catch (error) {
              console.log(error);
            };
        } else {
          throw new Error("Only admins can make changes");
        }
        
      };

      const removeAdmin = async (adminEmail) => {
        if (isAdmin) {
          try {
          const removeAdminRole = httpsCallable(functions, 'removeAdminRole');
          const removedAdmin = await removeAdminRole( {email: adminEmail} );
          console.log(removedAdmin);
          } catch (error) {
            console.log(error);
          };
        } else {
          throw new Error("Only admins can make changes");
        }
      };



      const register = async (registerEmail, registerPassword) => {
        
          const user = await createUserWithEmailAndPassword(
            auth, 
            registerEmail, 
            registerPassword);
            console.log(user);
            navigate(ROUTES.LANDING);
        
      };

      const logIn = async (signInEmail, signInPassword) => {
        
          const user = await signInWithEmailAndPassword(
            auth, 
            signInEmail, 
            signInPassword)
          console.log(user);
          navigate(ROUTES.LANDING);  
      };

     

      const sendLink = async (signInEmail) => {
        await sendSignInLinkToEmail(auth, signInEmail, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', signInEmail);
      };

      const logOut = async () => {
        await signOut(auth);
      };

      const resetPasswordEmail = async (email) => {
        await sendPasswordResetEmail(auth, email);
      };

      const createJobPost = async (
        formJobTitle,
        formJobDescription,
        formJobSalary,
        formJobRemote,
        formJobContactName,
        formJobContactEmail,
        formJobPostLink,
        formJobClosingDate,
        formJobCompanyName,
        formJobCompanyLocation,
        formJobCompanyWebsite,
        formJobCompanyAddress,
        formJobCompanyPostcode
        ) => {
          
          try {  
            const job = await addDoc(jobsCollectionRef, {
              closing_date: formJobClosingDate,
              company_address: formJobCompanyAddress,
              company_location: formJobCompanyLocation,
              company_name: formJobCompanyName,
              company_postcode: formJobCompanyPostcode,
              company_url: formJobCompanyWebsite,
              contact_email: formJobContactEmail,
              contact_name: formJobContactName,
              created_date: new Date(),
              creator_id: currentUser.uid,
              job_description: formJobDescription,
              job_post_link: formJobPostLink,
              job_title: formJobTitle,
              marketing_opt_in: false,
              published_date: "",
              remote: formJobRemote,
              salary: formJobSalary,
              approved_status: false
              
            });
            console.log(job);
            createEmail('jobs@codebar.io', {
              subject: 'New job post',
              text: `A new job '${formJobTitle}' at ${formJobCompanyName} has been submitted for approval`
            });
            
          } catch (error) {
            console.log(error);
          };
          
      };

      const updateJobPost = async (
        id,
        formJobTitle,
        formJobDescription,
        formJobSalary,
        formJobRemote,
        formJobContactName,
        formJobContactEmail,
        formJobPostLink,
        formJobClosingDate,
        formJobCompanyName,
        formJobCompanyLocation,
        formJobCompanyWebsite,
        formJobCompanyAddress,
        formJobCompanyPostcode
      ) => {

        try {
          const jobToUpdate = doc(db, "jobs", id);
          const newFields = {
            closing_date: formJobClosingDate,
            company_address: formJobCompanyAddress,
            company_location: formJobCompanyLocation,
            company_name: formJobCompanyName,
            company_postcode: formJobCompanyPostcode,
            company_url: formJobCompanyWebsite,
            contact_email: formJobContactEmail,
            contact_name: formJobContactName,
            
            job_description: formJobDescription,
            job_post_link: formJobPostLink,
            job_title: formJobTitle,
            marketing_opt_in: false,
            published_date: "",
            remote: formJobRemote,
            salary: formJobSalary,
            approved_status: false
          };
          await updateDoc(jobToUpdate, newFields);
          console.log(jobToUpdate);
        } catch (error) {
          console.log(error.message);
        };

      };

      const approveJob = async (job) => {

        
        
        try {
          const jobToApprove = doc(db, "jobs", job.id);
          const todayDate = new Date().toLocaleDateString();
          const newFields = {
            approved_status: true,
            published_date: todayDate,
          };
          await updateDoc(jobToApprove, newFields);
      
          sendApprovedEmail(job);

        } catch (error) {
          console.log(error.message);
        };
      };

      const createEmail = async (to, message) => {
          
        try {  
          const email = await addDoc(mailCollectionRef, {
            to: to,
            message: message,
          });
          console.log(email);
          
        } catch (error) {
          console.log(error);
        };
        
    };

    const sendApprovedEmail = async (job) => {
      
      const approveEmail = 
    
        `<html>
            <body>
                <h3>Hi ${job.contact_name}</h3>
                <p>The <a href=${job.job_post_link}>${job.job_title}</a> at ${job.company_name} job you submitted has been approved.</p>
                <p>It is now visible to all members at <a href='https://codebar.io/jobs'>our jobs section.</a></p>

                
                <h4>Contact info</h4>
                <p>Email: <strong><a href="mailto:jobs@codebar.io">jobs@codebar.io</a></strong></p>
                
            </body>
        </html>`
      try {
        await createEmail(job.contact_email, 
          {
            subject: 'Job post approved',
            html: approveEmail,
          }
        );
        console.log("Email sent")
      } catch (error) {
        console.log(error.message);
      }
    };


    return (
        
          <div>
              <header id='top'>
                
                {currentUser?
                  <div>
                    <NavigationBarJobBoardLoggedIn currentUser={currentUser} isAdmin={isAdmin} logOut={logOut} />
                  </div>
                : <div>
                  <NavigationBarJobBoardNonLoggedIn />
                </div> }

              </header>
              
                
                
            
            <div>
            <Routes>
                  <Route exact path={ROUTES.LANDING} element={ <LandingPage currentUser={currentUser} jobs={jobs}/> } />
                  <Route exact path={ROUTES.JOB} element={ <JobPage currentUser={currentUser} isAdmin={isAdmin} approveJob={approveJob}></JobPage>}></Route>
                  <Route path={ROUTES.SIGN_UP} element={ <SignUp register={register}/> } />
                  <Route path={ROUTES.SIGN_IN} element={ <SignIn logIn={logIn} sendLink={sendLink}/> } />
                  <Route path={ROUTES.MY_JOBS} element={ <MyJobsPage logIn={logIn} jobs={jobs} currentUser={currentUser} />}></Route>
                  <Route path={ROUTES.SUBMIT_JOB} element = { <SumbitJobPage logIn={logIn} currentUser={currentUser} createJobPost={createJobPost}/>}></Route>
                  <Route path={ROUTES.PREVIEW_JOB} element ={ <JobPreview></JobPreview> }></Route>
                  <Route path={ROUTES.EDIT_JOB} element ={ <EditJob isAdmin={isAdmin} currentUser={currentUser} updateJobPost={updateJobPost}></EditJob> }></Route>
                  <Route path={ROUTES.MAKE_REMOVE_ADMIN} element = { <MakeRemoveAdmin isAdmin={isAdmin} removeAdmin={removeAdmin} makeNewAdmin={makeNewAdmin} ></MakeRemoveAdmin> }></Route>
                  <Route path={ROUTES.ADMIN_DRAFT_JOBS} element = { <AdminOnlyJobs approveJob={approveJob} jobs={jobs}></AdminOnlyJobs> }></Route>
                  <Route path={ROUTES.FORGOT_PASSWORD} element = { <ForgotPassword resetPasswordEmail={resetPasswordEmail} ></ForgotPassword> }></Route>

              </Routes>
            </div>


                  <Footer/>

          </div>

    );
};

export default App;
