import { VIEW_PRODUCT_DATA } from "./viewProductConstant"

export const viewProductAction = (sendData) => {
   return {
       type: VIEW_PRODUCT_DATA,
       payload: sendData
   }
}