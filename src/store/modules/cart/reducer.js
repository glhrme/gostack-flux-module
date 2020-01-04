function cart(state =[], action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.prod]
        default:
            return state
    }
}

export default cart