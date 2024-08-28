import { Component, Input, OnInit } from '@angular/core';
import { productService } from '../service/product.service';
import { Product } from './../models/product-list-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

   @Input() Product? : Product

  product?:Product;
  selectedProduct: Product | undefined;
  errorMessage: string = '';
  constructor(private _productService:productService,private _activateRoute:ActivatedRoute , private router: Router ) {
  }
  ngOnInit(){
    // debugger
    const id = this._activateRoute.snapshot.params['id'];    
    this._productService.getProductById(id).subscribe(res=>{
      
      // false condition search
      
      
      // debugger
      if(res ||  res == !id){
        // console.log(this.product = res);
        this.product = res;

  
 } else {
   this.errorMessage = `Product with ID ${id} not found.`;
   this.router.navigate(['/**'])
   
  // handle by dynamic  in msg ${id} when it set to the local storage

} (error : any) => {
  this.errorMessage = `An error occurred while retrieving the product: ${error.message}`;
  
}
console.log( this.errorMessage);

      
    })

  }



  addToCart(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    const existingItem = cartItems.find((product: Product) => product.id == this.Product?.id);
    if (existingItem) {
      console.log(existingItem);
      
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...this.product, quantity: 1 });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${this.Product?.name} has been added to your cart.`);
    console.log(cartItems);
  }

  private getCart(): Product[] {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    console.log(cart);
    
    return cart
    
  }

  getProductById(productId: string): Product | null {
    const cartItems = this.getCart();
    console.log('Searching for product ID in cart:', productId);
    const product = cartItems.find((item: Product) => item.id == productId) || null;
    console.log('Found product:', product);
    return product;
  }
  
}

