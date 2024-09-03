import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders  } from "@angular/common/http";
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../models/product-list-data';
import { WebSocketService } from './web-socket.service';
import { ProductResponse } from '../models/product-response';

@Injectable({
  providedIn: 'root'
})
// export class productService {

// //   constructor( private  http:HttpClient ) {}

// //   getProductData(){
  
// // return this.http.get('assets/productModel.json')
// // }

// private dataUrl = 'assets/productModel.json';  // Adjust the path as needed

// constructor(private http: HttpClient) { }

// // get all products
// getProducts(): Observable<any[]> {
//   return this.http.get<any[]>(this.dataUrl);
// }

// // Get product by ID
// getProductById(id: number): Observable<any> {
//   const product=this.http.get<any[]>(this.dataUrl).pipe(
//     map(products => products.find(product => product.id == id))
//   );
//   return product;
  
// }
   
// }


// export class ProductService {
  
//   // Base URL for the API
//   private baseUrl = 'https://localhost:7096/api/Product/getallproducts';

//   constructor(private http: HttpClient) { }

//   // Get all products (with pagination, if needed)
//   getProducts(pageNumber: number): Observable<any[]> {
//     const url = `${this.baseUrl}/908c7cf4-be83-4147-ae2b-934c49f751a4`;
//     return this.http.get<any[]>(url);
//   }

//   // Get product by ID
//   getProductById(id: string): Observable<any> {
//     const url = `${this.baseUrl}/${id}`;
//     return this.http.get<any>(url);
//   }
// } 


// export class ProductService {
//   // Base URL for the API
//   private baseUrl = 'https://localhost:7096/api/Product/getallproducts';

//   constructor(private http: HttpClient ) { }
//   ngOnInit(): void {
//    }
  
//   // Get all products (with pagination, if needed)
//   getProducts(): Observable<Product[]> {
//     const userId = localStorage.getItem('userId'); 
//     console.log(userId); // with that number flag
    
//     if (!userId) {
//       console.error('User ID not found in local storage');
//       // Handle the case where userId is not available
//       return new Observable<Product[]>(); // Return an empty observable or handle it appropriately
//     }
//     const url = `${this.baseUrl}/${userId}`;
//     return this.http.get<Product[]>(url);  }

//   // Get product by ID
//   getProductById(id: string): Observable<Product> {
//     const url = `${this.baseUrl}/${id}`;
//     return this.http.get<Product>(url);
//   }
// }  

export class ProductService {

  private apiUrl = 'https://localhost:7096/api/Product/getallproducts'; 

  constructor(private http: HttpClient) { }

 getProducts(clientId: any ) : Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });

return this.http.get<ProductResponse>(`${this.apiUrl}/${clientId}`)}

private handleError(error: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
      // Server-side error
      switch (error.status) {
        case 400:
          break;
        default:
          errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
          break;
      }
    }
    return throwError(() => new Error(errorMessage));
  }

}