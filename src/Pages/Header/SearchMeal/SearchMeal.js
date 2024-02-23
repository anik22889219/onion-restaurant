import React from 'react';
import '../SearchMeal/SearchMeal.css'

const SearchMeal = () => {
    return (
        <div className='search-container'>
            <h1>Best food waiting for your belly</h1>
            
            <div className="search-box">
            <input  type="search"  placeholder='Search food items'/>
            <button>Search</button>
            </div>
        </div>
    );
};

export default SearchMeal;