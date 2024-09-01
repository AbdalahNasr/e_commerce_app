import { Component } from '@angular/core';
import { Product } from '../models/product-list-data';
import { Order } from '../models/order-model';

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
  orderSummary: Order | null = null;
  taxRate: number = 0.14;
  discountRate: number = 0;
  delivery: number = 15;
  currentOrderId: number = 1;

  // counterValue: number = 0;

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    console.log('Cart items:', this.cartItems);
    this.createOrderSummary();
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
    
    
  }
  updateCartInLocalStorage(): void {
    // debugger ;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log('Cart items updated in local storage:', this.cartItems);

    
  }





  // createOrderSummary(): void {
  //   const amount = this.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
  //   const tax = amount * this.taxRate;
  //   const totalAmount = amount + tax;

  //   this.orderSummary = {
  //     id: this.currentOrderId++, // Increment ID for each new order
  //     amount: amount,
  //     tax: tax,
  //     totalAmount: totalAmount,
  //     createdOn: new Date(),
  //     updatedOn: new Date(),
  //     isDeleted: false,
  //     customerId: 12345, // Replace with actual customer Id when i get it from local storage
  //   };

  //   console.log('Order Summary:', this.orderSummary);
  // }

  createOrderSummary(): void {
    debugger
    const price = this.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    const discount = price * this.discountRate;
    const discountedAmount = price - discount;
    const tax = discountedAmount * this.taxRate;
    const delivery =  this.delivery
    const totalAmount = discountedAmount + tax + delivery;

    this.orderSummary = {
      id: this.currentOrderId++, 
      price: discountedAmount,
      tax: tax,
      discount: discount, // when The discount applied
      delivery: delivery ,
      totalAmount: totalAmount,

      createdOn: new Date(),
      updatedOn: new Date(),
      isDeleted: false,
      customerId: 12345, // Replace with actual customer ID
    };

    console.log('Order Summary:', this.orderSummary);
  }
}


