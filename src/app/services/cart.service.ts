import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCartItem, removeCartItem, clearCartItems, initCart } from '../pages/cart/store/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  count$!: Observable<number>;
  
  products : any[] = [];
  
  constructor(
    private store: Store<{ cartCnt: number }>,
    protected _snackBar: MatSnackBar
  ) {
		this.count$ = store.select('cartCnt');
	}

  openSnackBar( message: string, action: string ) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  addCartItem() {
    this.store.dispatch(addCartItem());
    this.openSnackBar( 'Product added to cart successfully.', 'close' );
  }
 
  removeCartItem() {
    this.store.dispatch(removeCartItem());
    this.openSnackBar( 'Product removed from cart successfully.', 'close' );
  }
 
  clearCartItems() {
    this.store.dispatch(clearCartItems());
    this.openSnackBar( 'Cart cleared successfully.', 'close' );
  }
  
  initCart() {
    this.store.dispatch(initCart());
    this.openSnackBar( 'Cart initalize successfully.', 'close' );
  }
}
