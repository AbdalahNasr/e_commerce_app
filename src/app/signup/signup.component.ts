import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
// export class SignupComponent {

//   addUserForm :FormGroup | any

//   // registerationData: User = {
//   //   email: '',
//   //   password: '',
//   //   confirmationPassword: '',
//   //   rememberMe: false
//   // };

//   constructor(private authService: AuthService , private router:Router) {
//     this.addUserForm = new FormGroup({
//           email: new FormControl ('',[Validators.required]),
//     password: new FormControl ('',[Validators.required]),
//     confirmationPassword: new FormControl ('',[Validators.required]),
//     rememberMe: new FormControl (false)

//     })
//   }

  

// // isLoginMode: boolean = true;
//   isLoading: boolean = false ; 
// //   errorMessage: string | null = null;
// //   userModel = new User('','',false)
// passwordMatchValidator(formGroup: FormGroup) {
//   const passwordControl = formGroup.get('password');
//   const confirmationPasswordControl = formGroup.get('confirmationPassword');

//   if (passwordControl && confirmationPasswordControl) {
//     const password = passwordControl.value;
//     const confirmationPassword = confirmationPasswordControl.value;

//     if (password !== confirmationPassword) {
//       confirmationPasswordControl.setErrors({ passwordMismatch: true });
      
//     } else {
//       confirmationPasswordControl.setErrors(null);
//     }
//   }
// }


// // registrationForm: FormGroup;

// // constructor(private fb: FormBuilder) {
// //   this.registrationForm = this.fb.group({
// //     id: [''], // This will be generated on the server side
// //     name: ['', Validators.required],
// //     address: ['', ],
// //     phone: ['', ],
// //     status: ['', ],
// //     password: ['', [Validators.required, Validators.minLength(8)]],
// //     confirmPassword: ['', Validators.required],
// //     isAdmin: [false],
// //   }, { validator: this.passwordMatchValidator });
// // }

// // passwordMatchValidator(form: FormGroup) {
// //   return form.get('password')?.value === form.get('confirmPassword')?.value
// //     ? null : { mismatch: true };
// // }

// // onSubmit() {
// //   if (this.registrationForm.valid) {
// //     const formData = this.registrationForm.value;
// //     console.log('Registration successful', formData);
// //   } else {
// //     console.log('Form is invalid');
// //   }
// // }
// // onFormSubmitted(){
// //   this.isLoading = true;
// //     if (this.addUserForm.valid) {
// //       console.log(this.addUserForm.value);
// //     } else {
// //       console.log('Form is invalid');
// //     }
// //     // this.isLoading = false;
// //     }
// onFormSubmitted(){
//   console.log(    this.addUserForm.value
//   );
//   this.isLoading = true;
//       this.authService.register(this.addUserForm.value).subscribe({
//         next: (response) => {
//           console.log('register successful:', response);
          
//           this.router.navigate(['/login']);
//           this.isLoading = false;
//         },
//         error: (error) => {
//           this.isLoading = false;
  
//           // console.error('Login failed:', error); 
  
//           return error
//         }
//       });
  
//     }
  

// }


export class SignupComponent {
  addUserForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.addUserForm = new FormGroup({

      name: new FormControl('abdallah'),
      address: new FormControl('50st' ),
      phone: new FormControl('01534632451'),
      email: new FormControl('',  [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmationPassword: new FormControl('', [Validators.required]),
      // isActive: new FormControl(''),   
      status: new FormControl('isActive'),   
      rememberMe: new FormControl(false)
    }, { validators: this.passwordMatchValidator() });
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get('password');
      const confirmationPasswordControl = formGroup.get('confirmationPassword');

      if (passwordControl && confirmationPasswordControl) {
        const password = passwordControl.value;
        const confirmationPassword = confirmationPasswordControl.value;

        if (password !== confirmationPassword) {
          return { passwordMismatch: true };
        }
      }
      return null;
    };
  }

  onFormSubmitted() {
    console.log(this.addUserForm.value);
    this.isLoading = true;
    this.errorMessage = null;

    if (this.addUserForm.valid) {
      this.authService.register(this.addUserForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.isLoading = false;
          // not working ????               
          this.router.navigate(['/login']); 
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Registration failed:', error);
          this.errorMessage = 'Registration failed. Please try again later.';
        }
      });
    } else {
      console.log('Form is invalid');
      this.isLoading = false;
    }
  }
}