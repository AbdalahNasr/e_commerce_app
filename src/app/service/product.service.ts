import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productService {

//   constructor( private  http:HttpClient ) {}

//   getProductData(){
  
// return this.http.get('assets/productModel.json')
// }

private dataUrl = 'assets/productModel.json';  // Adjust the path as needed

constructor(private http: HttpClient) { }

// get all products
getProducts(): Observable<any[]> {
  return this.http.get<any[]>(this.dataUrl);
}

// Get product by ID
getProductById(id: number): Observable<any> {
  const product=this.http.get<any[]>(this.dataUrl).pipe(
    map(products => products.find(product => product.id == id))
  );
  return product;
  
}
   
}
