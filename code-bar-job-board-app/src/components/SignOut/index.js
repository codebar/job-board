
const SignOutButton = ({logOut}) => {

    const handleLogOutButtonClick = () => {
        logOut();
    };

    return (
        <button type='button' onClick={handleLogOutButtonClick}> Sign out </button>
    );
};

export default SignOutButton;