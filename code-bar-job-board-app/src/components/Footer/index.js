

const Footer = () => {

    

    return (
        <footer style={{backgroundColor: '#206CC2'}}>
            <div>
                <div className='footer-info'>
                    <p>&#169; {new Date().getFullYear()} codebar</p>
                    <p>Send us an email at hello@codebar.io</p>
                </div>
                <div className='footer-links-lists'>
                    <ul>
                        <li><a href="https://codebar.io/code-of-conduct" >Code of Conduct</a></li>
                        <li><a href="https://codebar.io/breach-code-of-conduct" >Breach of Conduct</a></li>
                        <li><a href="https://codebar.io/effective-teacher-guide" >Coach Guide</a></li>
                        <li><a href="https://codebar.io/student-guide" >Student Guide</a></li>
                        <li><a href="http://tutorials.codebar.io/" >Tutorials</a></li>
                        <li><a href="http://manual.codebar.io/becoming-a-sponsor" >Becoming a Sponsor</a></li>
                        <li><a href="https://codebar.io/faq" >FAQ</a></li>
                    </ul>
                    <ul>
                        <li><a href="http://stats.codebar.io/" >Stats</a></li>
                        <li><a href="https://medium.com/the-codelog" >Blog</a></li>
                        <li><a href="https://medium.com/codebar-stories" >codebar Stories</a></li>
                        <li><a href="https://codebar.io/coaches" >Coaches</a></li>
                        <li><a href="https://codebar.io/sponsors" >Sponsors</a></li>
                        <li><a href="https://codebar.io/events" >Events</a></li>
                        <li><a href="/" >Jobs</a></li>
                        <li><a href="https://codebar.io/donations/new" >Donate</a></li>
                    </ul>
                </div>
                <div className = 'social-media-links'>
                    <ul>
                        <li><a href="https://slack.codebar.io/">
                                <img className = "social-media-logo" alt="Slack logo" style={{maxHeight: '50px'}} src="https://codebar.io/assets/svgs/slack-94e55bb3ef8e2b984e7e2d20505ab15d76df82d02ea83d7d407f0458cb8d4500.svg"></img>
                            </a></li>
                        <li><a href="https://github.com/codebar" >
                                <img className="social-media-logo" alt="GitHub logo" style={{maxHeight: '50px'}} src="https://codebar.io/assets/svgs/github-ad56233a12562c8d3d76cb5a7f305a9f996e04e8a552acb8d0136fc42f694bc1.svg"></img>
                            </a></li>
                        <li><a href="https://facebook.com/codebarHQ" >
                                <img className="social-media-logo" alt="Facebook logo" style={{maxHeight: '50px'}} src="https://codebar.io/assets/svgs/facebook-6517228cd19711de9bef1b66f37bddc91bdba39bc1bc89c87d556ffbc1140d60.svg"></img>
                            </a></li>
                        <li><a href="https://twitter.com/codebar" >
                            <img className="social-media-logo" alt="Twitter logo" style={{maxHeight: '50px'}} src="https://codebar.io/assets/svgs/twitter-4d150c1aaf00df0a77f4872b65f4750049a5d5e715558b3cb1114b3714e54804.svg"></img>
                            </a></li>
                    </ul>
                </div>
                <div className="footer-bottom-line">
                   <p>Registered UK and Wales charity no. 1187776</p>
                   <p><a href="https://codebar.io/cookie-policy" >Cookie Policy</a></p> 
                   <p><a href="https://codebar.io/privacy-policy" >Privacy Policy</a></p> 
                </div>
            </div>
        </footer>
    );

};

export default Footer;