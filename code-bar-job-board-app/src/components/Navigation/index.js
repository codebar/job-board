
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavigationBarMain = () => {
    return (
        <div>
            <ul className='codebar-nav-bar'>
                <li className='codebar-nav-bar-list-item'><a href="https://medium.com/@codebar">Blogs</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/events">Events</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/sponsors">Sponsors</a></li>
                <li className='codebar-nav-bar-list-item'><a href="http://tutorials.codebar.io/">Tutorials</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/coaches">Coaches</a></li>
                <li className='codebar-nav-bar-list-item'><a href="/">Jobs</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/donations/new">Donate</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/auth/github">Sign in</a></li>
            </ul>
            <hr />
            
        </div>
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