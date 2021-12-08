import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../Firebase/firebase-config.js'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendSignInLinkToEmail } from 'firebase/auth';


import LandingPage from '../Landing';
import Header from '../Header';
import Footer from '../Footer';
import JobPage from '../JobPage/index.js';
import SignIn from '../SignIn/index.js';
import SignUp from '../SignUp/index.js';

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
    
      }, []);

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

     

      const sendLink = async (signInEmail) => {
        await sendSignInLinkToEmail(auth, signInEmail, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', signInEmail);
      };


    return (
        
            <Router>
                <Header/>
                {currentUser?
                <p>You are signed in as {currentUser.email}</p>
                : null }
                
            
            <hr />
            <Routes>
                  <Route exact path={ROUTES.LANDING} element={ <LandingPage jobs={jobs}/> } />
                  <Route exact path={ROUTES.JOB} element={ <JobPage></JobPage>}></Route>
                  <Route path={ROUTES.SIGN_UP} element={ <SignUp register={register}/> } />
                  <Route path={ROUTES.SIGN_IN} element={ <SignIn sendLink={sendLink}/> } />
                  {/* <Route path={ROUTES.PASSWORD_FORGET} element={ <PasswordForgetPage/> } />
                  <Route path={ROUTES.HOME} element={<HomePage/>} />
                  <Route path={ROUTES.ACCOUNT} element={ <AccountPage/> } />
                  <Route path={ROUTES.ADMIN} element={ <AdminPage/> } /> */}
              </Routes>
              <hr />     
                  <Footer/>
            
              </Router>
        
    );
};

export default App;