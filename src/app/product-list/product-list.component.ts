import { Component, OnInit } from '@angular/core';
import {  ProductService } from '../service/product.service';
import { Product } from '../models/product-list-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
// export class ProductListComponent {  

// products: Product[] = [];
// currentIndex: number = 0;
//   currentProductName: string = '';
//   errorMessage: string = '';
//   constructor( private _productService:productService){
//     console.log( this._productService.getProducts());
    
//     this._productService.getProducts().subscribe((res:any)=>{
//       // console.log(JSON.stringify(res));
//       // return JSON.stringify(res)
//       this.products = res;
//       console.log(this.products);
      
//     })
//   }

// // constructor( private dataService:DataService){}

// // ngOnInit(): void {
// //   this.dataService.getJsonData().subscribe(
// //     (res: product[]) => {
// //       this.data = res;
// //       if (this.data.length > 0) {
// //         this.currentProductName = this.data[this.currentIndex].name;
// //       }
// //     },
// //     (error) => {
// //       console.error('Error fetching data:', error);
// //       this.errorMessage = 'Failed to load product data.';
// //     }
// //   );
// // }

// }




// export class ProductListComponent implements OnInit {

//   products: Product[] = [];

//  constructor( private dataService:DataService){}

//   ngOnInit(): void {
//     this.dataService.getJsonData().subscribe((data: Product []) => {
//       this.products = data;
//     });
//   }
// }


export class ProductListComponent implements OnInit {  

  products: Product[] = [];
  currentIndex: number = 0;
  currentProductName: string = '';
  errorMessage: string = '';

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        console.log(this.products);
      },
      error: (error : any) => {
        console.error('Failed to fetch products', error);
        this.errorMessage = 'Failed to load products.';
      }
    });
  }
}
