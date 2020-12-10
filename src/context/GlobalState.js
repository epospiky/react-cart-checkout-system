import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    cart:[],
}

//const [items, setItems] = useState([]);



export const  GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    const addToCart = item=>{
       dispatch({type:"ADD_TO_CART", payload:item})
   }
    return (
        <GlobalContext.Provider value={{cart: state.cart, addToCart,}}>
            {children}         
        </GlobalContext.Provider>
    )
} 