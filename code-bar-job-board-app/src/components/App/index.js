import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavigationBar from "../Navigation";
import LandingPage from '../Landing';

import * as ROUTES from '../../constants/routes';

const App = () => {
    return (
        
            <Router>
                <NavigationBar/>
            
            <hr />
            <Routes>
                  <Route exact path={ROUTES.LANDING} element={ <LandingPage/> } />
                  {/* <Route path={ROUTES.SIGN_UP} element={ <SignUpPage register={register}/> } />
                  <Route path={ROUTES.SIGN_IN} element={ <SignInPage sendLink={sendLink}/> } />
                  <Route path={ROUTES.PASSWORD_FORGET} element={ <PasswordForgetPage/> } />
                  <Route path={ROUTES.HOME} element={<HomePage/>} />
                  <Route path={ROUTES.ACCOUNT} element={ <AccountPage/> } />
                  <Route path={ROUTES.ADMIN} element={ <AdminPage/> } /> */}
              </Routes>
            
              </Router>
        
    );
};

export default App;