import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/animations/slideLeft';
import { CartService } from 'src/app/services/cart.service';

import { Product } from "../product/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    slideLeft
  ]
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  cartData!: Product[];
  isCartCnt!: boolean;

  constructor(
    protected cartService: CartService
  ) {}

  ngOnInit(): void {

    this.getCart();  
    this.cartService.count$.subscribe( (cnt) => {
      this.isCartCnt = cnt > 0 ? true : false;
    } );
  }

  getCart() {
    let carts = localStorage.getItem('carts');

    if( carts ) {

      let cartsJson = JSON.parse(carts);
      if( cartsJson.length ) {
        this.cartData = cartsJson;
        console.log('this.cartData', this.cartData);
      }
    } else {
      this.cartData = [];
    }
  }

  removeCartItem( itemId: number ) {

    let carts = localStorage.getItem('carts');

    if( carts ) {

      let cartsJson = JSON.parse(carts);
      if( cartsJson.length ) {
        let items = cartsJson.filter((item: any) => item.id != itemId );
        if( items.length ) {

          localStorage.setItem('carts', JSON.stringify( items ));
          this.cartService.removeCartItem();
        } else {
          localStorage.removeItem('carts');
          this.cartService.clearCartItems();
        }
        this.getCart();
      }
    }
  }

  clearCartItems() {
    localStorage.removeItem('carts');
    this.cartService.clearCartItems();
    this.getCart();
  }
}
