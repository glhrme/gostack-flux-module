export function addToCart(prod) {
    return {
        type: '@cart/ADD',
        prod
    }
}

export function removeToCart(id) {
    return {
        type: '@cart/REMOVE',
        id: id
    }
}

export function updateAmount( id, amount ) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount
    }
}