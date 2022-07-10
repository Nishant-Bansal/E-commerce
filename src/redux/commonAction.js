import { commonApi } from "../api/commonApi"
import { API_FAILURE, API_REQUEST, API_SUCCESS } from "./constants"

export const commonAction = (url, callback) => {
    return (dispatch) => {
        dispatch({
            type: API_REQUEST
        })

        commonApi.ecommerceApi(url)
        .then(response => {
            dispatch({
                type: API_SUCCESS,
                payload: response
            })
            callback(response)
        })
        .catch((err) => {
            dispatch({
                type: API_FAILURE,
                error: err
            })
            callback(false)
        })
    }
}
