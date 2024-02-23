import React, { useState } from 'react';
import logo from '../../../../images/logo2.png'
import '../Singup/Singup.css'
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Singup = () => {
    const [displayName,setDisplayName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    const navigate =useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});

      const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const hendelsingin = async(event)=>{
        event.preventDefault()
        if(password===confirmpassword){
           await createUserWithEmailAndPassword(email, password)
           await updateProfile({displayName})
          const success = await sendEmailVerification()
          if (success) {
            alert('Sent email');
          }


        }

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
                <form onSubmit={hendelsingin}>
                    <input onBlur={(e) => setDisplayName(e.target.value)} type="text" name="name" placeholder='Name' id="" />
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name="" placeholder='Email' id="" required />
                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="" placeholder='Password' id="" required />
                    <input onBlur={(e) => setConfirmpassword(e.target.value)} type="password" name="" placeholder='Confirm Password' id="" required />
                    <input id='submit-btn' type="submit" value="Sign in" />
                </form>
                <Link to={'/login'}><p id='login-to-singup'>Already have an account</p></Link>
            </div>
        </div>
    );
};

export default Singup;