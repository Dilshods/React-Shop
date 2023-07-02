import  toast  from "react-toastify";
const reducer = (state, {type, payload}) => {
    switch(type){
        case'ADD_TO_BASKET': {
           const itemIndex = state.order.findIndex(
            (orderItem) => orderItem.id === payload.id
            );
            let newOrder = null
                if(itemIndex < 0) {
                    const newItem = {
                        ...payload,
                        quantity:1,
                    };
                    newOrder = [...state.order,newItem]; 
                }else{
                    newOrder = state.order.map ((orderItem, index) => {
                    if(index === itemIndex) {
                        return{
                            ...orderItem,
                            quantity:orderItem.quantity + 1,
                        };
                    } else{
                        return orderItem;
                    }
                    });
                } 
                toast.success('Goods added to basket succesfully!')
                return {
                    ...state,
                    order:newOrder
                }
            } 
        case'INCREMENT_QUANTITY': 
        return{
            ...state,
            order:state.order.map(el => {
                if(el.id === payload.id) {
                    const newQuantity = el.quantity + 1
                    return {
                        ...el,
                        quantity:newQuantity
                    }
                } else{
                    return el 
                }
                })
            }
        case'DECREMENT_QUANTITY':
        return{
            ...state,
            order:state.order.map(el => {
                if(el.id === payload.id) {
                    const newQuantity = el.quantity - 1
                    return {
                        ...el,
                        quantity:newQuantity >= 0 ? newQuantity : 0
                    }
                } else{
                    return el 
                }
                })
            }
        case 'TOGGLE_BASKET':
            return{
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                order:state.order.filter(item => item.id !== payload.id)
            }
          default:
            return state 
        }
    }


export default reducer;