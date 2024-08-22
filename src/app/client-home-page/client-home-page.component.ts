import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product-vm';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
export class ClientHomePageComponent {

  data: Product[] = [];
  currentIndex: number = 0;
    currentProductName: string = '';
    errorMessage: string = '';
    constructor( private dataService:DataService){
      console.log( this.dataService.getJsonData());
      
      this.dataService.getJsonData().subscribe((res:any)=>{
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
  
  
  
