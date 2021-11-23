import { Action, createReducer, on } from '@ngrx/store';
import { addCartItem, removeCartItem, clearCartItems, initCart } from "./cart.actions";

let carts = localStorage.getItem('carts');
let cartCnt = 0;
if( carts ) {

    let cartArr = JSON.parse(carts);
    cartCnt = cartArr.length;
}

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(initCart, (state) => state),
    on(addCartItem, (state) => state + 1),
    on(removeCartItem, (state) => state - 1),
    on(clearCartItems, (state) => 0),
    on(initCart, (state) => cartCnt)
);

export function cartReducer( state: any, action: Action ) {
    return _counterReducer(state, action);
}