import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../service/loading.service';
import { Product } from './../models/product-list-data';
import { productService } from './../service/product.service';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss'] 
})
// export class ClientHomePageComponent {

//   data: Product[] = [];
//   currentIndex: number = 0;
//     currentProductName: string = '';
//     errorMessage: string = '';
//     constructor( private dataService:DataService){
//       console.log( this.dataService.getJsonData());
      
//       this.dataService.getJsonData().subscribe((res:any)=>{
//         // console.log(JSON.stringify(res));
//         // return JSON.stringify(res)
//         this.data = res;
//         console.log(this.data);
        
//       })
//     }
    
    
//     // constructor( private dataService:DataService){}
//   // ngOnInit(): void {
//   //   this.dataService.getJsonData().subscribe(
//   //     (res: product[]) => {
//   //       this.data = res;
//   //       if (this.data.length > 0) {
//   //         this.currentProductName = this.data[this.currentIndex].name;
//   //       }
//   //     },
//   //     (error) => {
//   //       console.error('Error fetching data:', error);
//   //       this.errorMessage = 'Failed to load product data.';
//   //     }
//   //   );
//   // }
  
//   }
  
// only get 
// export class ClientHomePageComponent implements OnInit, OnDestroy {
//   data: Product[] = [];
//   currentIndex: number = 0;
//   currentProductName: string = '';
//   errorMessage: string = '';
//   private dataSubscription: Subscription | undefined; 

  
//   isLoading: boolean = false ; 
//   constructor(private dataService: DataService , private loadingService: LoadingService) {

// }

// /**
//  * Listen to the loadingSub property in the LoadingService class. This drives the
//  * display of the loading spinner.
//  */
// ngOnInit(): void {
//   // debugger ;

//   console.log(this.isLoading);
//   console.log(this.data);
//   this.loadingService.loading$.subscribe(isLoading => {
//     this.isLoading = isLoading;
//   });
//   this.dataSubscription = this.dataService.getProductData().subscribe(
      
      
//       (res: any) => {
//         console.log('Response:', res);
//         // debugger ;

//   console.log(this.isLoading);
//         console.log('Subscription has started');
        
        
//         if (Array.isArray(res) && res.length > 0) {
//           this.data = res;
//           this.currentProductName = this.data[this.currentIndex].name;
//           this.isLoading = true
//         } else {
//           this.errorMessage = 'No products found or data is not an array.';
//         }

//       },

//       (error) => {
//         // debugger ;

//         this.isLoading = false ;
//           console.log(this.isLoading);
//         console.error('Error fetching data:', error);
//         this.errorMessage = 'Failed to load product data.';
//       }
//     );

//   }

//   nextProduct(): void {
//     if (this.data.length > 0) {
//       this.currentIndex = (this.currentIndex + 1) % this.data.length;
//       this.currentProductName = this.data[this.currentIndex].name;
//     }
//   }

//   ngOnDestroy(): void {
//     this.isLoading = false
//     if (this.dataSubscription) {
//       this.dataSubscription.unsubscribe();
//       console.log('Subscription has been cleaned up.');
//     }
//   }

  
// }



// get with id

export class ClientHomePageComponent implements OnInit, OnDestroy {
  Products: Product[] = [];
  currentIndex: number = 0;
  currentProductName: string = '';
  errorMessage: string = '';
  private dataSubscription: Subscription | undefined; 

  
  isLoading: boolean = false ; 
  constructor(private _productService: productService , private loadingService: LoadingService ) {

}

ngOnInit(): void {
  // debugger ;





  console.log(this.isLoading);
  // console.log(this.Products);

        
  this.loadingService.loading$.subscribe(isLoading => {
    this.isLoading = isLoading;
  });



  console.log(this._productService);
  this.dataSubscription = this._productService.getProducts().subscribe(
      
      
      (res: Product[]) => {
        console.log('Response:', res);
      
  console.log(this.isLoading);
        console.log('Subscription has started');
        
        
        if (Array.isArray(res) && res.length > 0) {
          this.Products = res;
          this.currentProductName = this.Products[this.currentIndex].name;
          this.isLoading = true
        } else {
          this.errorMessage = 'No products found or data is not an array.';
        }

      },

      (error) => {
        // debugger ;

        this.isLoading = false ;
          console.log(this.isLoading);
        console.error('Error fetching data:', error);
        this.errorMessage = 'Failed to load product data.';
      }
    );

  }

  nextProduct(): void {
    if (this.Products.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.Products.length;
      this.currentProductName = this.Products[this.currentIndex].name;
    }

  }


  ngOnDestroy(): void {
    this.isLoading = false
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      console.log('Subscription has been cleaned up.');
    }
  }

  
}

  

  
