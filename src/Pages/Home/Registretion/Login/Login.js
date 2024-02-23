import React, { useState } from 'react';
import logo from '../../../../images/logo2.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const hendellogin =(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return navigate('/')
      }
    return (
        <div className='sing-bg'>
            <div className="logo-btn">
                <img src={logo} alt="" />
            </div>
            <div className="from-container">
                <form onSubmit={hendellogin}>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name="" placeholder='Email' id="" required />
                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="" placeholder='Password' id="" required />
                    <input id='submit-btn' type="submit" value="Sign in" />
                </form>
                <Link to={'/singup'}><p>creat an new account</p></Link>
            </div>
        </div>
    );
};

export default Login;