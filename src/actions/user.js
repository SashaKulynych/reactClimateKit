import {store} from '../index'
import {actionTypes} from '../reducers/user'

export async function userInfo(info) {
    store.dispatch({
        type:actionTypes.USER_INFO,
        payload:info
    })
}