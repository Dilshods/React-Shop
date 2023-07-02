import React from 'react';
import GoodItem from './GoodItem';

const GootList = (props) => {
    const {goods = [],addToBasket} = props
    

    if(!goods.length){
       return <h3>Nothing here</h3> 
    }
    
    return  <div className='goods'>{goods.map(item => (
       <GoodItem key={item.id} {...item} addToBasket={addToBasket} /> 
    ))}</div> 
       
}


export default GootList;