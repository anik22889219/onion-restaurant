import React from 'react';
import Shopnavber from '../Shopnavber/Shopnavber';
import Breakfast from '../../Meals/Breakfast/Breakfast';
import Lunch from '../../Meals/Lunch/Lunch';
import Dinner from '../../Meals/Dinner/Dinner';
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <nav>
            <ul >
                <li ><Link to='/breakfast'><button className='shop-navber'>Breakfast</button></Link></li>
                <li><Link to='/lunch'><button className='shop-navber'>Lunch</button></Link></li>
                <li><Link to='/dinner'><button className='shop-navber'>Dinner</button></Link></li>
                
            </ul>
            
            
            <div id='breakfast' className="">
                <Breakfast></Breakfast>
            </div>
            
        </nav>
    );
};

export default Shop;