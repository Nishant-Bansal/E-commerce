import { apiClient } from "./apiClient"

export const commonApi = {
    ecommerceApi : (url) => {
        return apiClient.request({
            method: 'GET',
            url: url,
        })
    }
}



// bankUserLogin: (dispatch: any, body:any) => {
//     dispatch(loaderAction(true))
//     return apiClient.request({
//       method: 'POST',
//       url: '/user-login',
//       headers: {
//         Origin: origin,
//       },
//       data : body
//     })
// },