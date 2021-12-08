import NavigationBar from "../Navigation";
import SignOutButton from "../SignOut";


const Header = (currentUser, logOut) => {

    return (
        <header>
            <a href="https://slack.codebar.io/"><img alt='codebar logo' src="https://codebar.io/assets/logo-7345316d16a39b0a5cda277d2cf4cbf3aed1031b9288c0696b8273771ee1fb20.png"></img></a>
            <NavigationBar></NavigationBar>
            <SignOutButton logOut={logOut}></SignOutButton>
        </header>
    );
};

export default Header;