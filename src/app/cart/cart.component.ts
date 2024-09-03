import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-list-data';
import { Order } from '../models/order-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})






export class CartComponent  {
  cartItems: Product[] = [];
  orderSummary: Order | null = null;
  taxRate: number = 0.14;
  discountRate: number = 0.20; // Assume 20% discount
  deliveryFee: number = 15;
  currentOrderId: number = 1;

  ngOnInit(): void {
    this.loadCartItems();
    this.createOrderSummary();
  }

   loadCartItems(): void {
    const storedItems = localStorage.getItem('cartItems');
    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    console.log('Cart items loaded:', this.cartItems);
  }

  increment(item: Product): void {
    item.amount += 1;
    this.updateCart();
  }

  decrement(item: Product): void {
    if (item.amount > 1) {
      item.amount -= 1;
      this.removeItem(item);
    } else {
      this.removeItem(item);
    }
    this.updateCart();
  }

   removeItem(item: Product): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.updateCart();
  }

   updateCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    console.log('Cart items updated:', this.cartItems);
    this.createOrderSummary(); // Recalculate order summary after every update
  }

  private createOrderSummary(): void {
    const price = this.calculateSubtotal();
    const discount = this.calculateDiscount(price);
    const discountedAmount = price - discount;
    const tax = this.calculateTax(discountedAmount);
    const totalAmount = discountedAmount + tax + this.deliveryFee;

    this.orderSummary = {
      id: this.currentOrderId++, 
      price: price,
      tax: tax,
      discount: discount, 
      delivery: this.deliveryFee,
      totalAmount: totalAmount,
      createdOn: new Date(),
      updatedOn: new Date(),
      isDeleted: false,
      customerId: this.getCustomerId(), 
    };

    console.log('Order Summary:', this.orderSummary);
  }

  private calculateSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.amount * item.amount, 0);
  }

  private calculateDiscount(amount: number): number {
    return amount * this.discountRate;
  }

  private calculateTax(amount: number): number {
    return amount * this.taxRate;
  }

  private getCustomerId(): number {
    return 12345; // until i handle customer id
  }
}
