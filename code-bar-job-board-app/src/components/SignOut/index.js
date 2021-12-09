

const SignOutButton = ({logOut}) => {

    const handleSignOutButtonClick = () => {
        logOut();
    };

    return(
        <button onClick={handleSignOutButtonClick}>Sign out</button>
    );
};

export default SignOutButton;