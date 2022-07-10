import { ADD_TO_CART_DATA } from "./cartConstant"

export const cartAction = (sendData) => {
   return {
       type: ADD_TO_CART_DATA,
       payload: sendData
   }
}