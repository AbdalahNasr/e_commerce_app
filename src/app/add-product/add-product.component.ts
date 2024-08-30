import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import {  Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {






  addProductForm: FormGroup;

  constructor() {
    this.addProductForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [Validators.required]),
      basePrice: new FormControl('', [Validators.required]),
      discountPrecentage: new FormControl('', [Validators.required]),
      vatPrice: new FormControl('', [Validators.required]),
      sku: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      height : new FormControl('', [Validators.required]),
      length: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),

    });
  }


  // constructor(private formBuild : FormBuilder ){
  // }
  
  // productName(){
  //   return this.addProductForm.get('productName')
  // }


  // addProductForm = this.formBuild.group({
  //   productName:['',[Validators.required]], 
  //   productDescription:['',[Validators.required]],
  //   // category:[''],
  //   // status:[''],'
  //   //  price:['',[Validators.required,Validators.min(1),Validators.max(1000)]],
  //   // producrPhoto:[],
  //   // discountAmount:[,[Validators.pattern("^\d{3}$")]],
  //   // vatAmount:[,[Validators.pattern("^\d{3}$")]],
  //   // quantity:[''],
  //   // sku:[''],
  //   // subscribe:[false],
  //   // weight:[],
  //   // height:[],
  //   // length:[],
  //   // width:[],
        
    
  // })
  
    // addProductForm = new FormGroup( {
    //   userName : new FormControl(''),
    //   password : new FormControl(''),
    //   confirmPassword : new FormControl(''),
    //   address: new FormGroup ({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     postalCode: new FormControl('')
    //   })
    // })
  
file:any;

getFile(event:any){
this.file = event.target.files[0];
console.log('file',this.file);

}
uploadFile(){
  let formData = new FormData();
  formData.set('file',this.file)
  console.log('file',this.file);
// this.http
// .post('url', formData)
}
    onSubmit(){
      console.log(this.addProductForm.value);
      
    }
  
  
  
  }
  


