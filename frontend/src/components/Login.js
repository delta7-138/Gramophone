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
            fetch('https://localhost:5000',
                    {
                        method: 'POST',
                        mode: 'cors',
                        body:JSON.stringify({
                            "name" : name,
                            "email" : username,
                            "password" : password
                        })
                    }
            )
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
                <div>
                    <h1>Sign Up</h1>
                </div>

                <label>
                    <p>Name:</p>
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
                    <p>Username:</p>
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
                    <p>Password:</p>
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
                    <p>Confirm Password:</p>
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
                    style={{top:"20px"}}
                >
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
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
        <>
            <form className='form' onSubmit={handleSubmit}>
                <div className='control'>
                    <h1>Sign in</h1>
                </div>
                <label>
                    <p>Username:</p>
                
                    <div className='control block-cube block-input'>
                        <input 
                            type="text" 
                            style={{background:"rgba(0,0,0,0.1)"}}
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
                <label >
                    <p>Password:</p>
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
                    style={{top:"20px", buttom:"10px"}}
                >
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='text'>
                        Sign In
                    </div>
                </button>
            </form>
            {error && (<p>{error}</p>)}
        </>
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

    // return (
    //     <div>
    //         {isLogged ? (<App Logout={handleLogout}/>
    //         ):(
    //             <div className='login-page'>
    //                 <div className='toggle-buttons'>
    //                     <button onClick={handleSignInClick}>Sign In</button>
    //                     <button onClick={handleSignUpClick}>Sign Up</button>
    //                 </div>
    //                 {showSignIn ? (<SignInForm onSignIn={handleSignIn}/>) : (<SignUpForm onSignUp={handleSignUpClick}/>)}
    //             </div>
    //         )}
    //     </div>
    // );

    return (
        <div>
            {isLogged ? (<App Logout={handleLogout}/>
            ) : (
                <div className='login-form'>
                <div className="signIn-Up-btns">
                    <button onClick={handleSignInClick}>Sign In</button>
                    <button onClick={handleSignUpClick}>Sign Up</button>
                </div>
                
                <div id="signIn-Up-forms">
                    {showSignIn ? 
                        (<SignInForm onSignIn={handleSignIn}/>):
                        (<SignUpForm onSignUp={handleSignUpClick}/>)
                    }
                </div>
                </div>
            )}
            
        </div>
    )
}

export default SignInSignUpPage;
