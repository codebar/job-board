import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions';
import { db, auth } from '../Firebase/firebase-config.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendSignInLinkToEmail } from 'firebase/auth';
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
import MakeAdmin from '../MakeAdmin/index.js';
import AdminOnlyDraftJobs from '../AdminOnly/index.js';

import * as ROUTES from '../../constants/routes';


const App = () => {

    const [jobs, setJobs] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    const jobsCollectionRef = collection(db, "jobs");

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

      const functions = getFunctions();

      const makeNewAdmin = async (adminEmail) => {
        try {
          const addAdminRole = httpsCallable(functions, 'addAdminRole');
          const newAdmin = await addAdminRole( {email: adminEmail} );
          console.log(newAdmin);
        } catch (error) {
          console.log(error);
        };
      };

      


      const register = async (registerEmail, registerPassword) => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth, 
            registerEmail, 
            registerPassword);
            console.log(user);
        } catch (error) {
          console.log(error.message);
        };
      };

      const logIn = async (signInEmail, signInPassword) => {
        try {
          const user = await signInWithEmailAndPassword(
            auth, 
            signInEmail, 
            signInPassword)
          console.log(user);
        } catch (error) {
          console.log(error.message);
        };
    
      };

     

      const sendLink = async (signInEmail) => {
        await sendSignInLinkToEmail(auth, signInEmail, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', signInEmail);
      };

      const logOut = async () => {
        await signOut(auth);
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

      const approveJob = async (jobToApproveId) => {
        try {
          const jobToApprove = doc(db, "jobs", jobToApproveId);
          const newFields = {
            approved_status: true,
          };
          await updateDoc(jobToApprove, newFields);
          console.log(jobToApprove);
        } catch (error) {
          console.log(error.message);
        };
      };


    return (
        
            <Router>
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
                  <Route exact path={ROUTES.JOB} element={ <JobPage currentUser={currentUser}></JobPage>}></Route>
                  <Route path={ROUTES.SIGN_UP} element={ <SignUp register={register}/> } />
                  <Route path={ROUTES.SIGN_IN} element={ <SignIn logIn={logIn} sendLink={sendLink}/> } />
                  <Route path={ROUTES.MY_JOBS} element={ <MyJobsPage jobs={jobs} currentUser={currentUser} />}></Route>
                  <Route path={ROUTES.SUBMIT_JOB} element = { <SumbitJobPage currentUser={currentUser} createJobPost={createJobPost}/>}></Route>
                  <Route path={ROUTES.PREVIEW_JOB} element ={ <JobPreview></JobPreview> }></Route>
                  <Route path={ROUTES.EDIT_JOB} element ={ <EditJob currentUser={currentUser} updateJobPost={updateJobPost}></EditJob> }></Route>
                  <Route path={ROUTES.MAKE_ADMIN} element = { <MakeAdmin makeNewAdmin={makeNewAdmin} ></MakeAdmin> }></Route>
                  <Route path={ROUTES.ADMIN_DRAFT_JOBS} element = { <AdminOnlyDraftJobs approveJob={approveJob} jobs={jobs}></AdminOnlyDraftJobs> }></Route>
                  
              </Routes>
            </div>
            
                  
                  <Footer/>
            
              </Router>
        
    );
};

export default App;