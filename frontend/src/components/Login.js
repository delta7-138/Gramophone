import React, { useCallback, useEffect, useState }from 'react';
import axios from 'axios';
import './login.css'
import { useNavigate } from 'react-router-dom';

function SignUpForm(props)
{
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [error, setError] = useState(null);

    const [message, setMessage] = useState('');
    
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


    useEffect(() => {
        console.log("Running Message in SignUp...")
        if (message && message !== '') {
            console.log("This is me printing")
            console.log(message);
            props.onSignUp()
        }
    }, [message,props]);

    const f = useCallback(message => {
        console.log("Running Callback") 
        setMessage({
            ...message
        })
        console.log("Set Message")
        console.log(message)
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();


        if(password === confirmPass)
        {
            console.log("Creating the user");

            axios.post('http://localhost:5000/api/users/signUp', 
            {
                name : name,
                email : username, 
                password : password 
            }, {
                headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }})
            .then(res => {
                console.log(res.data)
                f(res.data)
            })

            // console.log("Here is the response")
            // console.log(message)

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

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        console.log("Running Message in SignIn...")
        if (message && message !== '') {
            console.log("This is me printing")
            console.log(message);
            props.onSignIn()
        }
    }, [message,props])

    const f = useCallback(message => {
        console.log("Running Callback") 
        setMessage({
            ...message
        })
        console.log("Set Message")
        console.log(message)
    }, []);

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log("Logging In");

        axios.post('http://localhost:5000/api/users/login', 
        {
            email : username,
            password : password 
        }, {
            headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }})
        .then(res => {
            console.log(res.data)
            f(res.data)
        })
        .then(err => console.log(err))

        setError(null);
    };

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <div className='control'>
                    <h1>Sign in</h1>
                </div>
                <label>
                    Username:
                
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

function Login() 
{
    const [showSignIn, setShowSignIn] = useState(true);
    const [isLogged, setisLogged] = useState(false);

    const navigate = useNavigate();

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

    return (
        <div className='login-page'>
            {isLogged ? (navigate("/home")
            ) : (
                <div className='login-form'>
                    <div className="signIn-Up-btns">
                        <button onClick={handleSignInClick}>Sign In</button>
                        <button onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                    
                    <div>
                        {showSignIn ? 
                            (<SignInForm onSignIn={handleSignIn}/>):
                            (<SignUpForm onSignUp={handleSignInClick}/>)
                        }
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Login;
