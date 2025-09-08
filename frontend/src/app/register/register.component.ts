// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   user = {
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   };

//   constructor(private http: HttpClient, private router: Router) { }

//   ngOnInit(): void {}

//   onSubmit() {
//     if (this.user.password !== this.user.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     this.http.post('http://localhost:5000/register', this.user)
//       .subscribe(response => {
//         alert('Registration Successful');
//         this.router.navigate(['/admin-login']);
//       }, error => {
//         alert('Registration Failed');
//       });
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   user = {
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   };

//   constructor(private http: HttpClient, private router: Router) { }

//   ngOnInit(): void {}

//   onSubmit() {
//     if (this.user.password !== this.user.confirmPassword) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Passwords do not match!'
//       });
//       return;
//     }

//     this.http.post('http://localhost:5000/register', this.user)
//       .subscribe(
//         response => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Registration Successful',
//             text: 'You can now log in!'
//           }).then(() => {
//             this.router.navigate(['/admin-login']);
//           });
//         },
//         error => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Registration Failed',
//             text: 'Please try again later!'
//           });
//         }
//       );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertService   // ✅ inject alert service
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      this.alert.error('Passwords do not match!', 'Registration Failed');
      return;
    }

    this.http.post<any>('http://localhost:5000/register', this.user)
      .subscribe(
        (response) => {
          // ✅ Save user info in localStorage (simulate auto-login)
          localStorage.setItem('token', response.token || '');  // if backend sends token
          localStorage.setItem('email', this.user.email);
          localStorage.setItem('password', this.user.password);
          localStorage.setItem('name', this.user.username);

          // ✅ SweetAlert success
          this.alert.success(`Welcome, ${this.user.username}! Your account has been created.`);

          // ✅ Redirect directly to admin-home
          setTimeout(() => {
            this.router.navigate(['/admin-home']);
          }, 1500);

          // ✅ Clear form after success
          this.user = { username: '', email: '', password: '', confirmPassword: '' };
        },
        (error) => {
          this.alert.error('Registration Failed. Try again later.');
        }
      );
  }
}
