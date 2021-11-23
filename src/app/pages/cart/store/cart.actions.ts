import { createAction } from '@ngrx/store';

export const addCartItem = createAction('[Cart Component] AddCartItem');
export const removeCartItem = createAction('[Cart Component] RemoveCartItem');
export const clearCartItems = createAction('[Cart Component] clearCartItems');
export const initCart = createAction('[Cart Component] initCart');