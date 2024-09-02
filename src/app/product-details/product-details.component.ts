import { Component, Input, OnInit } from '@angular/core';
import { ProductService,  } from '../service/product.service';
import { Product } from './../models/product-list-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
// export class ProductDetailsComponent implements OnInit{

//    @Input() Product? : Product

//   product?:Product;
//   selectedProduct: Product | undefined;
//   errorMessage: string = '';
//   constructor(private _productService:productService,private _activateRoute:ActivatedRoute , private router: Router ) {
//   }
//   ngOnInit(){
//     // debugger
//     const id = this._activateRoute.snapshot.params['id'];    
//     this._productService.getProductById(id).subscribe(res=>{
      
//       // false condition search
      
      
//       // debugger
//       if(res ||  res == !id){
//         // console.log(this.product = res);
//         this.product = res;

  
//  } else {
//    this.errorMessage = `Product with ID ${id} not found.`;
//    this.router.navigate(['/**'])
   
//   // handle by dynamic  in msg ${id} when it set to the local storage

// } (error : any) => {
//   this.errorMessage = `An error occurred while retrieving the product: ${error.message}`;
  
// }
// console.log( this.errorMessage);

      
//     })

//   }



//   addToCart(){
//     const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

//     const existingItem = cartItems.find((product: Product) => product.id == this.Product?.id);
//     if (existingItem) {
//       console.log(existingItem);
      
//       existingItem.amount += 1;
//     } else {
//       cartItems.push({ ...this.product   });
//     }
    
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     alert(`${this.product?.name} has been added to your cart.`);
//     console.log(cartItems);
//   }

//   private getCart(): Product[] {
//     const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
//     console.log(cart);
    
//     return cart
    
//   }

//   getProductById(productId: string): Product | null {
//     const cartItems = this.getCart();
//     console.log('Searching for product ID in cart:', productId);
//     const product = cartItems.find((item: Product) => item.id == productId) || null;
//     console.log('Found product:', product);
//     return product;
//   }
  
// }


export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;
  selectedProduct: Product | undefined;
  errorMessage: string = '';
  cartItems: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _activateRoute: ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();
    this.loadCartItems();
  }

  loadProduct(): void {
    const id = this._activateRoute.snapshot.params['id'];
    this._productService.getProductById(id).subscribe(
      (res : any) => {
        if (res || res == !id) {
          this.product = res;
          console.log('Product data loaded:', this.product);
        } else {
          this.errorMessage = `Product with ID ${id} not found.`;
          this.router.navigate(['/**'])
        }
      },
      (error: any) => {
        this.errorMessage = `An error occurred while retrieving the product: ${error.message}`;
    
      }
    );
  }

  loadCartItems(): void {
    const storedItems = localStorage.getItem('cartItems');
    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    console.log('Current cart items:', this.cartItems);
  }

  addToCart(): void {
    if (!this.product) return;

    const existingItem = this.cartItems.find((item) => item.id == this.product?.id);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      this.cartItems.push({ ...this.product });
    }

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    alert(`${this.product.name} has been added to your cart.`);
  }
}