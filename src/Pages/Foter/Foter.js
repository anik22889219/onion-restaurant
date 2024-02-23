import React from 'react';
import logo from '../../images/logo.png'
import '../Foter/Foter.css'

const Foter = () => {
    return (
        <footer className='footer-container'>
            <div className="logo-container">
                <img src={logo} alt="" />
                <p>copyright © 2024 jonkar mahabub</p>
            </div>
            <div className="page-details-container">
                <div className="page-details">
                    <p>About online food</p>
                    <p>Get help</p>
                    <p>Read our blog</p>
                    <p>Read FAQs</p>
                    <p>Sign up to deliver</p>
                    <p>View All cities</p>
                    <p>Add your restaurant</p>
                    <p>Restaurants near mee</p>
                </div>
                <div className="page-policy">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>

        </footer>
    );
};

export default Foter;