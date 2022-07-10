import { combineReducers } from 'redux'
import { cartReducer } from './addTocart/cartReducer'
import { viewProductReducer } from './viewProduct/viewProductReducer'

const rootReducer = combineReducers({
   productInfo: viewProductReducer,
   addTocartData: cartReducer
})

export default rootReducer