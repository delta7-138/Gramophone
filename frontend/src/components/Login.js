import React, { useState } from 'react';
import App from '/home/prem/Desktop/Major_Project/Gramophone/frontend/src/App.js';

function SignUpForm(props)
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const [name, setName] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleConfirmPassChange = (event) => {
        setConfirmPass(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSignUp()
        console.log("Press submit in signup");
        
        if(password === confirmPass)
        {
            setUsername('');
            setName('');
            setPassword('');
            setConfirmPass('');
        }
        else
        {
            setPassword('');
            setConfirmPass('');
            setError('Passwords do not match');
        }
            
        // Handle sign up logic here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={handleNameChange}
                        placeholder='Name'
                        required
                    />
                </label>
                <label>
                    Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        placeholder='Email or Phone'
                        required
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        placeholder='Password'
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input 
                        type="password" 
                        value={confirmPass} 
                        onChange={handleConfirmPassChange} 
                        placeholder='Confirm Password'
                        required
                    />
                </label>
                <button type="submit" >Sign up</button>
            </form>
            {error && (<p>{error}</p>)}
        </div>
    );
}

function SignInForm(props)
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSignIn();
        console.log("Press submit in signIN");
        // Handle sign in logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <label>
                Username:
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleUsernameChange}
                    placeholder='Email or Phone'
                    required
                />
            </label>
            <label>
                Password:
                <input 
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange}
                    placeholder='Password'
                    required
                />
            </label>
            <button type="submit">Sign in</button>
        </form>
    );
}

function SignInSignUpPage() 
{
    const [showSignIn, setShowSignIn] = useState(true);
    const [isLogged, setisLogged] = useState(false);

    const handleSignUpClick = () => {
        setShowSignIn(false);
    };

    const handleSignInClick = () => {
        setShowSignIn(true);
        //setisLogged(true);
    };

    const handleSignIn = () => {
        setisLogged(true)
    }
    const handleLogout = () => {
        setisLogged(false)
    }

    return (
        <div>
            {isLogged ? (<App Logout={handleLogout}/>
            ):(
                <div>
                    <button onClick={handleSignInClick}>Sign In</button>
                    <button onClick={handleSignUpClick}>Sign Up</button>
                    {showSignIn ? (<SignInForm onSignIn={handleSignIn}/>) : (<SignUpForm onSignUp={handleSignUpClick}/>)}
                </div>
            )}
        </div>
    );
}

export default SignInSignUpPage;
