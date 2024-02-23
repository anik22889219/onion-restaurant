import React from 'react';
import Shopnavber from '../../Home/Shopnavber/Shopnavber';
import Card from '../Card/Card';
import useMeals from '../../../hooks/useMeals';


const Dinner = () => {
    const [meals,setMeals] = useMeals();
    const dinners = meals.filter(m=>m.meal=== 'dinner')
    // console.log(dinners)
    return (
        <div>
            {/* <Shopnavber></Shopnavber> */}
            <div className="show-container">
            {
                dinners.map((dinner)=>
                    <Card key={dinner.id}
                    breakfast={dinner}
                    ></Card>
                )
            }
            
            </div>
        </div>
    );
};

export default Dinner;