import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { User } from './user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],

})
export class SigninComponent {
  topicHasError= false ;
  userModel = new User('','',false)


  onSubmit(userForm:any){
  console.log(userForm);
  
  // debugger;
  console.log(this.userModel);
}


}
