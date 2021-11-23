import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { slideLeft } from 'src/app/animations/slideLeft';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    slideLeft
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  matBadge = 0;
  cancelCartSubscription$: Subscription | undefined;

  links = [
    'products',
    'cart'
  ];

  constructor(
    protected router: Router,
    protected cartService: CartService
  ) { }

  ngOnInit(): void {
    
    this.cancelCartSubscription$ = this.cartService.count$.subscribe( (result: number) => {
      this.matBadge = result;
    } );
  }

  goTo(link: string) {
    this.router.navigate([link]);
  }

  ngOnDestroy() {

    if( this.cancelCartSubscription$ ) {
      this.cancelCartSubscription$.unsubscribe();
    }
  }
}
