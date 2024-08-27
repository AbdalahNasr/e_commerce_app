import { Component, Input, OnInit } from '@angular/core';
import { productService } from '../service/product.service';
import { Product } from './../models/product-list-data';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private _productService:productService,private _activateRoute:ActivatedRoute  ) {
  }
  ngOnInit(){
    debugger
    const id = this._activateRoute.snapshot.params['id'];    
    this._productService.getProductById(id).subscribe(res=>{
      this.product=res;

      // false condition search
// if(this.selectedProduct){

//   console.log(this.product);
  
//  } else {
//   // handle by dynamic  in msg ${id} when it set to the local storage

//   this.errorMessage = `Product with ID ${id} not found.`;
// }
      
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
  }
  

}

