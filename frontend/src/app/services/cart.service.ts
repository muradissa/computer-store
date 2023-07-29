import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { ComputerPart } from '../shared/models/ComputerPart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  addToCart(computerPart: ComputerPart):void{
    let cartItem = this.cart.items.find(item => item.computerPart.id === computerPart.id);
    if(cartItem){
      return ;
    }else{  
      this.cart.items.push(new CartItem(computerPart));
    }
    this.setCartToLocalStorage();
  }

  
  removeFromCart(computerPartId : string):void{
    this.cart.items = this.cart.items.filter(item => item.computerPart.id !== computerPartId);
    this.setCartToLocalStorage();

  }


  changeQuantity(computerPartId : string  , quantity : number){
    debugger;
    let cartItem = this.cart.items.find(item => item.computerPart.id ===computerPartId);

    if(cartItem !== undefined){
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.computerPart.price ;
      this.setCartToLocalStorage();
    }
    if(!cartItem){
      
      return;
    }
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.computerPart.price ;
      this.setCartToLocalStorage();
    
  }


  clearCart(){
    this.cart = new Cart();
  }


  getCartObservable(): Observable<Cart>{
    return this.cartSubject.asObservable();
  }


  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }


  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }



}
