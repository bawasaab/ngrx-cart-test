import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { products } from "./products";

import { MatSnackBar } from '@angular/material/snack-bar';
import { slideLeft } from 'src/app/animations/slideLeft';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    slideLeft
  ]
})
export class ProductComponent implements OnInit {

  products : any[] = [];
  
  constructor(
    protected cartService: CartService,
    protected _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.products = products;
  }

  addToCart(product: any) {

    let carts = localStorage.getItem('carts');

    if( carts ) {

      let cartsJson = JSON.parse(carts);
      let found = cartsJson.some((el: any) => el.id === product.id);

      if( !found ) {

        cartsJson.push(product);
        localStorage.setItem('carts', JSON.stringify( cartsJson ));
  
        this.cartService.addCartItem();
      } else {

        this.cartService.openSnackBar( 'Product already exists in cart.', 'close' );
      }

    } else {

      let cartsJson = [];
      cartsJson.push(product);
      localStorage.setItem('carts', JSON.stringify( cartsJson ));
      this.cartService.addCartItem();
    }
  }
}