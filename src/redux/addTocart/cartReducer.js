import { ADD_TO_CART_DATA } from "./cartConstant";

export const cartReducer = (
    state = {cartData: []},
    action: {type: String; payload: []}
) => {
    switch(action.type){
        case ADD_TO_CART_DATA:
            return {...state, cartData: action.payload}
        default:
            return state
    }
}