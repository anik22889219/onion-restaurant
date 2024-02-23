import React from 'react';
import Shopnavber from '../../Home/Shopnavber/Shopnavber';
import useMeals from '../../../hooks/useMeals';
import Card from '../Card/Card';

const Lunch = () => {
    const [meals,setMeals] = useMeals();
    const lunch = meals.filter(m=>m.meal=== 'Lunch')
    return (
        <div>
            {/* <Shopnavber></Shopnavber> */}
            
            <div className="show-container">
            {
                lunch.map((lunch)=>
                    <Card key={lunch.id}
                    breakfast={lunch}
                    ></Card>
                )
            }
            </div>
        </div>
    );
};

export default Lunch;