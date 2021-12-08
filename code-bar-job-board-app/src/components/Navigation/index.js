
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavigationBar = () => {
    return (
        <div>
            <ul className='codebar-nav-bar'>
                <li className='codebar-nav-bar-list-item'><a href="https://medium.com/@codebar">Blogs</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/events">Events</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/sponsors">Sponsors</a></li>
                <li className='codebar-nav-bar-list-item'><a href="http://tutorials.codebar.io/">Tutorials</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/coaches">Coaches</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/jobs">Jobs</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/donations/new">Donate</a></li>
                <li className='codebar-nav-bar-list-item'><a href="https://codebar.io/auth/github">Sign in</a></li>
            </ul>
            {/* nav for the jobs site only */}
            {/* <ul className='job-specific-nav-bar'>
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            </ul> */}
        </div>
    );
};

export default NavigationBar;