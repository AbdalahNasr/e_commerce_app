import { Component } from '@angular/core';
import { Product } from '../models/product-list-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
// export class CartComponent {

  
//   cartItems: Product[] = [];
  
//   counterValue : number = 0
// increment(){
//   this.counterValue++;

// }
// decrement(){
//   // this.counterValue--;

//   if (this.counterValue > 0) {
//     this.counterValue -= 1;
//   }
// }

//   ngOnInit(): void {
//     this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
//     console.log('Cart items:', this.cartItems);

//   }

  
//   // getCartItems() {
//   //   const storedItems = localStorage.getItem('cartItems');
//   //   console.log(storedItems);
//   //   if (storedItems) {
//   //     this.cartItems = JSON.parse(storedItems);

      
//   //   }
//   // }


// }

export class CartComponent {
  cartItems: Product[] = [];

  // counterValue: number = 0;

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    console.log('Cart items:', this.cartItems);
  }

  
  increment(item: Product): void {
    item.amount += 1;
    this.updateCartInLocalStorage();    
    
    
  }
  
  decrement(item: Product): void {
    if (item.amount > 0) {
      item.amount -= 1;
    }
    if (item.amount == 0) {
      this.removeItem(item);
      console.log( this.removeItem(item));
      
    } 
    else {
      this.updateCartInLocalStorage();
      // console.log(this.updateCartInLocalStorage());
      
    }
  }
  
  removeItem(item: Product): void {
    // this.cartItems = this.cartItems.filter(cartItem => cartItem.id == item.id);
    // console.log(this.cartItems);
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.updateCartInLocalStorage()
    // localStorage.removeItem(item.id)
    console.log(    localStorage.removeItem(item.id)
  );
    
    
  }
  updateCartInLocalStorage(): void {
    // debugger ;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log('Cart items updated in local storage:', this.cartItems);

    
  }
}


