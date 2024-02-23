import React from 'react';
import Shopnavber from '../../Home/Shopnavber/Shopnavber';
import useMeals from '../../../hooks/useMeals';
import Card from '../Card/Card';
import '../Breakfast/Breakfast.css'

const Breakfast = () => {
    const [meals,setMeals] = useMeals();
    const breakfasts = meals.filter(m=>m.meal=== 'Breakfast')
    // console.log(breakfasts)
    return (
        <div>
            {/* <Shopnavber></Shopnavber> */}
            <div className="show-container">
            {
                breakfasts.map((breakfast)=>
                    <Card key={breakfast.id}
                    breakfast={breakfast}
                    ></Card>
                )
            }
            </div>
        </div>
    );
};

export default Breakfast;