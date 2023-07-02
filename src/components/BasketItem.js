import React from 'react';


const BasketItem = (props) => {
    const {id, name, price, quantity,  incrementQuantity, decrementQuantity} =props;
    return (
        <li className='collection-item'>
            {name} x{quantity}={price * quantity} <b>$</b>
            <span className='secondary-content'>
            <a class="waves-effect waves-light btn btng"
             onClick={() => incrementQuantity(id)}>
             
                <i class="material-icons left">exposure_plus_1</i>add
            </a>
            <a
             class="waves-effect waves-light btn btng"
            onClick={() => decrementQuantity(id)}
            style={{margin: "0px 10px"}}>
                <i class="material-icons left">exposure_minus_1</i>remove
            </a>
            <a className='waves-effect waves-light btn btng'
                onClick={() => props.removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>delete_forever</i>delete
            </a>
                
                
            </span>
        </li>
    );
};


export default BasketItem;