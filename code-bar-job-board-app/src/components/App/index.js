import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/firebase-config.js'


import LandingPage from '../Landing';
import Header from '../Header';
import Footer from '../Footer';
import JobPage from '../JobPage/index.js';

import * as ROUTES from '../../constants/routes';

const App = () => {

    const [jobs, setJobs] = useState([]);

    const jobsCollectionRef = collection(db, "jobs");

    useEffect (() => {

        const getJobs = async () => {
          const jobsData = await getDocs(jobsCollectionRef);
          setJobs(jobsData.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
        };
    
        getJobs();
    
      }, []);


    return (
        
            <Router>
                <Header/>
            
            <hr />
            <Routes>
                  <Route exact path={ROUTES.LANDING} element={ <LandingPage jobs={jobs}/> } />
                  <Route exact path={ROUTES.JOB} element={ <JobPage></JobPage>}></Route>
                  {/* <Route path={ROUTES.SIGN_UP} element={ <SignUpPage register={register}/> } />
                  <Route path={ROUTES.SIGN_IN} element={ <SignInPage sendLink={sendLink}/> } />
                  <Route path={ROUTES.PASSWORD_FORGET} element={ <PasswordForgetPage/> } />
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