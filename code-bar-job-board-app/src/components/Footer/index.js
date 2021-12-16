

const Footer = () => {

    

    return (
        <footer className="main-footer container-fluid">
            <div className='row pt-5'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <p>&#169; {new Date().getFullYear()} codebar</p>
                    <p className="contact">
                        Send us an email at... 
                        <a className='text-white font-weight-bold text-decoration-none footer-link ' href='mailto:hello@codebar.io?Subject=Hello codebar'>hello@codebar.io</a>
                    </p>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <ul className="list-unstyled ml-0">
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/code-of-conduct" >Code of Conduct</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/breach-code-of-conduct" >Breach of Conduct</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/effective-teacher-guide" >Coach Guide</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/student-guide" >Student Guide</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="http://tutorials.codebar.io/" >Tutorials</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="http://manual.codebar.io/becoming-a-sponsor" >Becoming a Sponsor</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/faq" >FAQ</a></li>
                    </ul>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <ul className="list-unstyled ml-0">
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="http://stats.codebar.io/" >Stats</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://medium.com/the-codelog" >Blog</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://medium.com/codebar-stories" >codebar Stories</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/coaches" >Coaches</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/sponsors" >Sponsors</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/events" >Events</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="/" >Jobs</a></li>
                        <li><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.enthuse.com/donate/#!/" >Donate</a></li>
                    </ul>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <ul className = 'row ml-0 social-media'>
                        <li className="col-3"><a href="https://slack.codebar.io/">
                                <img className = "social-svg" alt="Slack logo" src="https://codebar.io/assets/svgs/slack-94e55bb3ef8e2b984e7e2d20505ab15d76df82d02ea83d7d407f0458cb8d4500.svg"></img>
                            </a></li>
                        <li className="col-3"><a href="https://github.com/codebar" >
                                <img className="social-svg" alt="GitHub logo" src="https://codebar.io/assets/svgs/github-ad56233a12562c8d3d76cb5a7f305a9f996e04e8a552acb8d0136fc42f694bc1.svg"></img>
                            </a></li>
                        <li className="col-3"><a href="https://facebook.com/codebarHQ" >
                                <img className="social-svg" alt="Facebook logo" src="https://codebar.io/assets/svgs/facebook-6517228cd19711de9bef1b66f37bddc91bdba39bc1bc89c87d556ffbc1140d60.svg"></img>
                            </a></li>
                        <li className="col-3"><a href="https://twitter.com/codebar" >
                            <img className="social-svg" alt="Twitter logo" src="https://codebar.io/assets/svgs/twitter-4d150c1aaf00df0a77f4872b65f4750049a5d5e715558b3cb1114b3714e54804.svg"></img>
                            </a></li>
                    </ul>
                </div>
            </div>
            <div className="row pb-4">
                   <div className="col">
                       <ul className="list-inline registration m-0 p-0">
                           <li className="list-inline-item">Registered UK and Wales charity no. 1187776</li>
                           <li className="list-inline-item"><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/cookie-policy" >Cookie Policy</a></li>
                           <li className="list-inline-item"><a className='text-white font-weight-bold text-decoration-none footer-link ' href="https://codebar.io/privacy-policy" >Privacy Policy</a></li>
                       </ul>
                   </div>
            </div>
        </footer>
    );

};

export default Footer;