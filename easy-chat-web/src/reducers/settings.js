const initialState = {
    acceptDefault: 0,
}

export function settingsReducer(state = initialState, action){
    switch(action.type){
    case 'CHANGE_SETTINGS':
    return{...state, acceptDefault: action.payload,}
        default:
        return state
    }
}