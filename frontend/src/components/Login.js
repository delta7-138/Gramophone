import React, { useState } from 'react';
import './login.css'
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
            <form className='form' onSubmit={handleSubmit}>
                {/* <h1>Sign up</h1> */}
                <div className='control'>
                    <h1>Sign Up</h1>
                </div>

                <label>
                    Name:

                    <div className='control block-cube block-input'>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={handleNameChange}
                            placeholder='Name'
                            required
                        />
                        <div className='bg-top'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                            <div className='bg-inner'></div>
                        </div>
                    </div>

                </label>
                <label>
                    Username:
                    <div className='control block-cube block-input'>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={handleUsernameChange} 
                            placeholder='Email or Phone'
                            required
                        />
                        <div className='bg-top'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                            <div className='bg-inner'></div>
                        </div>
                    </div>
                </label>
                <label>
                    Password:
                    <div className='control block-cube block-input'>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            placeholder='Password'
                            required
                        />
                        <div className='bg-top'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                            <div className='bg-inner'></div>
                        </div>
                    </div>
                </label>
                <label>
                    Confirm Password:
                    <div className='control block-cube block-input'>
                        <input 
                            type="password" 
                            value={confirmPass} 
                            onChange={handleConfirmPassChange} 
                            placeholder='Confirm Password'
                            required
                        />
                        <div className='bg-top'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                            <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                            <div className='bg-inner'></div>
                        </div>
                    </div>
                </label>
                <button
                className='btn block-cube block-cube-hover' 
                type="submit"
                style={{top:"40px"}}
            >
                <div class='bg-top'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                    <div class='bg-inner'></div>
                </div>
                <div className='text'>Sign Up</div>
            </button>
            </form>
            {error && (<p>{error}</p>)}
        </div>
    );
}

function SignInForm(props)
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);

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
        setError(null);
        // Handle sign in logic here
    };

    return (
        <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='control'>
                <h1>Sign in</h1>
            </div>
            <label>
                Username:
            
                <div className='control block-cube block-input'>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange}
                        placeholder='Email or Phone'
                        required
                    />
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                </div>
            </label>
            <label style={{top:"15px"}}>
                Password:
                <div className='control block-cube block-input'>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange}
                        placeholder='Password'
                        required
                    />
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                </div>
                
            </label>
            <button
                className='btn block-cube block-cube-hover' 
                type="submit"
                style={{top:"40px"}}
            >
                <div class='bg-top'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                    <div class='bg-inner'></div>
                </div>
                <div className='text'>Sign In</div>
            </button>
        </form>
        {error && (<p>{error}</p>)}
        </div>
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
                <div className='login-page'>
                    <button onClick={handleSignInClick}>Sign In</button>
                    <button onClick={handleSignUpClick}>Sign Up</button>
                    {showSignIn ? (<SignInForm onSignIn={handleSignIn}/>) : (<SignUpForm onSignUp={handleSignUpClick}/>)}
                </div>
            )}
        </div>
    );
}

export default SignInSignUpPage;
