import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/product.service';
import { Product } from '../models/product-list-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {  

data: Product[] = [];
currentIndex: number = 0;
  currentProductName: string = '';
  errorMessage: string = '';
  constructor( private _productService:DataService){
    console.log( this._productService.getJsonData());
    
    this._productService.getJsonData().subscribe((res:any)=>{
      // console.log(JSON.stringify(res));
      // return JSON.stringify(res)
      this.data = res;
      console.log(this.data);
      
    })
  }

// constructor( private dataService:DataService){}

// ngOnInit(): void {
//   this.dataService.getJsonData().subscribe(
//     (res: product[]) => {
//       this.data = res;
//       if (this.data.length > 0) {
//         this.currentProductName = this.data[this.currentIndex].name;
//       }
//     },
//     (error) => {
//       console.error('Error fetching data:', error);
//       this.errorMessage = 'Failed to load product data.';
//     }
//   );
// }

}




// export class ProductListComponent implements OnInit {

//   products: Product[] = [];

//  constructor( private dataService:DataService){}

//   ngOnInit(): void {
//     this.dataService.getJsonData().subscribe((data: Product []) => {
//       this.products = data;
//     });
//   }
// }