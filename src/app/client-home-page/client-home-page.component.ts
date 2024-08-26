import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/product.service';
import { Product } from '../models/product-list-data';
import { Subscription } from 'rxjs';

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
  

export class ClientHomePageComponent implements OnInit, OnDestroy {
  data: Product[] = [];
  currentIndex: number = 0;
  currentProductName: string = '';
  errorMessage: string = '';
  private dataSubscription: Subscription | undefined; 

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataSubscription = this.dataService.getProductData().subscribe(
      (res: any) => {
        console.log('Response:', res);
        console.log('Subscription has started');


        if (Array.isArray(res) && res.length > 0) {
          this.data = res;
          this.currentProductName = this.data[this.currentIndex].name;
        } else {
          this.errorMessage = 'No products found or data is not an array.';
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Failed to load product data.';
      }
    );
  }

  nextProduct(): void {
    if (this.data.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.data.length;
      this.currentProductName = this.data[this.currentIndex].name;
    }
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      console.log('Subscription has been cleaned up.');
    }
  }

}

  

  
