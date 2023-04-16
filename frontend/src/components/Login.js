import React, { useState } from 'react';


function Login_page() {
    
    // this is for signIn and signUp buttons
    const [showSignIn, setShowSignIn] = useState(true);
    const [isLogged, setisLogged] = useState(false)

    const handleSignUpClick = (event) => {
        setShowSignIn(false);
    };

    const handleSignInClick = (event) => {
        setShowSignIn(true);
    };

    // ends here


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [confirmPass, setConfirmPass] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlenameChange = (event) => {
        setName(event.target.value);
    };

    const handleConfirmPassChange = (event) => {
        setConfirmPass(event.target.value);
    };

    const handleSubmitSignIn = (event) => {
        event.preventDefault();
        console.log('Form submitted:', username, password);
        setisLogged(true)
        setUsername('');
        setPassword('');
        
    };

    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        if(password === confirmPass)
            console.log('Form submitted:', name, username, password);
        setUsername('');
        setPassword('');
        setName('');
        setConfirmPass('');
        setShowSignIn(true)
    };

    const signIn = (
        <form onSubmit={handleSubmitSignIn}>
            <h1>Sign in</h1>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Email or Phone"/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
            </label>
            <button type="submit">Sign in</button>
      </form>
    );

    const signUp = (
        <form onSubmit={handleSubmitSignUp}>
            <h1>Sign up</h1>
            <label>
                Name:
                <input type="text" value={name} onChange={handlenameChange} placeholder="Name"/>
            </label>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Email or Phone"/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
            </label>
            <label>
                Confirm Password:
                <input type="password" value={confirmPass} onChange={handleConfirmPassChange} placeholder="Password"/>
            </label>
            <button type="submit">Sign up</button>
        </form>
    );


    

    return (
        <div>
            {isLogged ? (
                <h1>You are Logged in</h1>
            ):(
                <div>
                    <button onClick={handleSignInClick}>Sign In</button>
                    <button onClick={handleSignUpClick}>Sign Up</button>
                    {showSignIn ? signIn : signUp}
                </div>
            )}
            
        </div>
    );
}

export default Login_page;