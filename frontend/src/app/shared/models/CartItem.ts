import { ComputerPart } from "./ComputerPart";

export class CartItem{
  constructor ( public computerPart : ComputerPart ) {}
  quantity:number = 1 ;
  price: number = this.computerPart.price;
}