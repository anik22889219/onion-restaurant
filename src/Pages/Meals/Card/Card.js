import React from 'react';
import '../Card/Card.css'

const Card = (props) => {
    const {name,img,price} = props.breakfast
    const imgUrl =`images/${img}`
    return (
        <div className='card-container'> 
            <div className="card-img">
            <img src={imgUrl} alt="" />
            </div>
            <div className="card-titel">
            <h2>{name}</h2>
            <p>How we dream about our future</p>
            <h3>${price}</h3>
            </div>
        </div>
    );
};

export default Card;