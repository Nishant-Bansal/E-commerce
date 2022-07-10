import { VIEW_PRODUCT_DATA } from "./viewProductConstant";

export const viewProductReducer = (
    state = {productDetails: []},
    action: {type: String; payload: []}
) => {
    switch(action.type){
        case VIEW_PRODUCT_DATA:
            return {...state, productDetails: action.payload}
        default:
            return state
    }
}