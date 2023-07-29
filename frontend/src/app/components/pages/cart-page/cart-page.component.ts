import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }
   
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.computerPart.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    debugger;
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.computerPart.id, quantity);
  }

}
