import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
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

import * as ROUTES from '../../constants/routes';

const App = () => {

    const [jobs, setJobs] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

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
      });

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
              salary: formJobSalary

              
            });
            console.log(job);
            
          } catch (error) {
            console.log(error);
          };
          
      };


    return (
        
            <Router>
              <header id='top'>
                
                {currentUser?
                  <div>
                    <NavigationBarJobBoardLoggedIn currentUser={currentUser} logOut={logOut} />
                  </div>
                : <div>
                  <NavigationBarJobBoardNonLoggedIn />
                </div> }

              </header>
                
                
            
            <div>
            <Routes>
                  <Route exact path={ROUTES.LANDING} element={ <LandingPage jobs={jobs}/> } />
                  <Route exact path={ROUTES.JOB} element={ <JobPage></JobPage>}></Route>
                  <Route path={ROUTES.SIGN_UP} element={ <SignUp register={register}/> } />
                  <Route path={ROUTES.SIGN_IN} element={ <SignIn logIn={logIn} sendLink={sendLink}/> } />
                  <Route path={ROUTES.MY_JOBS} element={ <MyJobsPage jobs={jobs} currentUser={currentUser} />}></Route>
                  <Route path={ROUTES.SUBMIT_JOB} element = { <SumbitJobPage createJobPost={createJobPost}/>}></Route>
                  <Route path={ROUTES.PREVIEW_JOB} element ={ <JobPreview></JobPreview> }></Route>
                  
              </Routes>
            </div>
            
                  
                  <Footer/>
            
              </Router>
        
    );
};

export default App;