import React from 'react';
import brand from '../../../images/logo2.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import '../Nevber/Nevber.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Nevber = () => {

    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);
    const navigate = useNavigate()
    if (error || error1) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading ||loading1) {
        return <p>Loading...</p>;
      }
    
    return (
        <div className='nev-continer'>
            
            <div className=" nav-img">
                <img  src={brand} alt="" />
            </div>
            <div >
                <ul className="nav-btn">
                    <li><Link to='/'><IoHomeOutline></IoHomeOutline></Link></li>
                    <li><Link to='/shop'><MdOutlineShoppingCart></MdOutlineShoppingCart></Link></li>
                    <li>
                        <Link to='/login'><button id='log-btn'>Login</button></Link>
                    </li>
                    <li>
                        { user ?
                        <button onClick={async () => {
                            const success = await signOut();
                            if (success) {
                              alert('You are sign out');
                              navigate('/')
                            }
                          }}id='singout-btn'>Sing out</button>
                        :
                        <Link to='/singup'><button id='singup-btn'>Sing up</button></Link>
                        
                        }
                    </li>
                    {
                       user && <li>
                    <h2 style={{margin: 0}}>{user.displayName}</h2>
                    </li>}
                </ul>
                

            </div>
        </div>
    );
};

export default Nevber;