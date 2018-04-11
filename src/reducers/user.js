export const actionTypes={
    USER_INFO:'USER_INFO'
}

export const defaultState = null;

export default function user(state = defaultState, action) {
    switch (action.type){
        case 'USER_INFO':{
            return action.payload;
        }
        default:
            return state;
    }
}