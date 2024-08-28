import { Component } from '@angular/core';
import { Product } from '../models/product-list-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  
  cartItems: Product[] = [];
  
  counterValue : number = 0
increment(){
  this.counterValue++;

}
decrement(){
  // this.counterValue--;

  if (this.counterValue > 0) {
    this.counterValue -= 1;
  }
}

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    console.log('Cart items:', this.cartItems);

  }

  
  // getCartItems() {
  //   const storedItems = localStorage.getItem('cartItems');
  //   console.log(storedItems);
  //   if (storedItems) {
  //     this.cartItems = JSON.parse(storedItems);

      
  //   }
  // }


}

