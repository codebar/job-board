

const SignOutButton = ({logOut}) => {

    const handleSignOutButtonClick = () => {
        logOut();
    };

    return(
        <button onClick={handleSignOutButtonClick}>Sing out</button>
    );
};

export default SignOutButton;