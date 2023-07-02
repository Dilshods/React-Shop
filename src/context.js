import { createContext, useReducer} from "react";
import reducer from "./reducer";

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading:true,
    order:[],
    isBasketShow:false
}

const context = ({children}) => {
    const [value, dispatch] = useReducer(reducer,initialState)
    
    value.addBasket = (item) => {
        dispatch({type:'ADD_TO_BASKET', payload:item})
    }
    
    value.incrementQuantity = (itemID) => {
        dispatch({type:'INCREMENT_QUANTITY', payload:{id:itemID}})
    }
    value.decrementQuantity = (itemID) => {
        dispatch({type:'DECREMENT_QUANTITY', payload:{id:itemID}})
    }

    value.handleBasketShow = () => {
        dispatch({type:'TOGGLE_BASKET'})
    }

    value.removeFromBasket = (itemID) => {
        dispatch({type:'REMOVE_FROM_BASKET'})
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};



export default context;