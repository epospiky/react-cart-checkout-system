 export default (state, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
        return {
            ...state,
            cart:[action.payload, ...state.cart],
        };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart:state.cart.filter(item => item.id !== action.payload),
            };
            case "CLEAR_CART":
                return {cart: [],
                }
            
        default:
            return state;
    }
} 