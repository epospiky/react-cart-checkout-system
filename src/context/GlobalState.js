import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    cart:[],
}





export const  GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
  const removeItem  = (id) =>{
    dispatch({type:"REMOVE_FROM_CART", payload:id})
};
    const addToCart = item=>{
       dispatch({type:"ADD_TO_CART", payload:item})
   };
   const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
}
    return (
        <GlobalContext.Provider value={{cart: state.cart, addToCart,removeItem, clearCart}}>
            {children}         
        </GlobalContext.Provider>
    )
} 