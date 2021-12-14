
import { Link } from 'react-router-dom'


import * as ROUTES from '../../constants/routes'

const NavigationBarMain = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top py-3'>
            <div className='container'>
                <a className='navbar-brand border-0' href="https://slack.codebar.io/">
                <img id='header-logo' alt='codebar logo' src="https://codebar.io/assets/logo-7345316d16a39b0a5cda277d2cf4cbf3aed1031b9288c0696b8273771ee1fb20.png"></img>
                </a>
                <button aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler mb-0" data-target="#navbarSupportedContent1" data-toggle="collapse" type="button">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id="navbarSupportedContent1">
                    <ul className='navbar-nav ml-0'>
                        <li className='nav-item'><a className='nav-link border-0' href="https://medium.com/@codebar">Blogs</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="https://medium.com/@codebar">Blogs</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="https://codebar.io/events">Events</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="https://codebar.io/sponsors">Sponsors</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="http://tutorials.codebar.io/">Tutorials</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="https://codebar.io/coaches">Coaches</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="/">Jobs</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="https://codebar.io/donations/new">Donate</a></li>
                        <li className='nav-item'><a className='nav-link border-0' href="https://codebar.io/auth/github">Sign in</a></li>
                    </ul>
                </div>
            </div>
    
           
            
        </nav>
    );
};

const NavigationBarJobBoardNonLoggedIn = () => {
    return (
        <ul>
            <li className='job-specific-nav-bar-list-item'>
                <Link to={ROUTES.SIGN_UP}>Sign up to Jobs Board</Link>
            </li>
            <li className='job-specific-nav-bar-list-item'>
                <Link to={ROUTES.SIGN_IN}>Sign into Jobs Board</Link>
            </li>
        </ul>
    );
};

const NavigationBarJobBoardLoggedIn = () => {
    return (
        
        <ul>
            <li>
                <Link to={ROUTES.MY_JOBS}>My Jobs</Link>
            </li>
        </ul>
    );
};

export {NavigationBarMain, NavigationBarJobBoardNonLoggedIn, NavigationBarJobBoardLoggedIn};