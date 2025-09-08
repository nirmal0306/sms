// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-resident-login',
//   templateUrl: './resident-login.component.html',
//   styleUrls: ['./resident-login.component.css']
// })
// export class ResidentLoginComponent {
//   userData = { email: '', password: '' };

//   constructor(private http: HttpClient, private router: Router) {}

//   onLogin() {
//     this.http.post<any>('http://localhost:5000/reslog', this.userData).subscribe(
//       (response) => {
//         if (response.token) {
//           localStorage.setItem('token', response.token); // Store token
//           localStorage.setItem('email', this.userData.email); // Store Email
//           localStorage.setItem('password', this.userData.password); // Store Password

//           this.router.navigate(['/after-login']);
//         } else {
//           console.error('Token not received');
//         }
//       },
//       (error) => {
//         console.error('Login failed:', error);
//       }
//     );
//   }

// // // }
// // import { Component } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Router } from '@angular/router';
// // import Swal from 'sweetalert2';

// // @Component({
// //   selector: 'app-resident-login',
// //   templateUrl: './resident-login.component.html',
// //   styleUrls: ['./resident-login.component.css']
// // })
// // export class ResidentLoginComponent {
// //   userData = { email: '', password: '' };

// //   constructor(private http: HttpClient, private router: Router) {}

// //   onLogin() {
// //     this.http.post<any>('http://localhost:5000/reslog', this.userData).subscribe(
// //       (response) => {
// //         if (response.token) {
// //           localStorage.setItem('token', response.token); // Store token
// //           localStorage.setItem('email', this.userData.email); // Store Email
// //           localStorage.setItem('password', this.userData.password); // Store Password

// //           Swal.fire({
// //             icon: 'success',
// //             title: 'Login Successful',
// //             text: 'Welcome back!'
// //           }).then(() => {
// //             this.router.navigate(['/after-login']);
// //           });
// //         } else {
// //           Swal.fire({
// //             icon: 'error',
// //             title: 'Login Failed',
// //             text: 'Token not received!'
// //           });
// //         }
// //       },
// //       (error) => {
// //         Swal.fire({
// //           icon: 'error',
// //           title: 'Login Failed',
// //           text: 'Invalid email or password!'
// //         });
// //       }
// //     );
// //   }
// // }
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-resident-login',
//   templateUrl: './resident-login.component.html',
//   styleUrls: ['./resident-login.component.css']
// })
// export class ResidentLoginComponent {
//   userData = { email: '', password: '' };

//   constructor(private http: HttpClient, private router: Router) {}

//   onLogin() {
//     this.http.post<any>('http://localhost:5000/reslog', this.userData).subscribe(
//       (response) => {
//         if (response.token) {
//           // Store data in localStorage
//           localStorage.setItem('token', response.token);
//           localStorage.setItem('email', this.userData.email);
//           localStorage.setItem('password', this.userData.password);

//           // Success popup
//           Swal.fire({
//             icon: 'success',
//             title: 'Login Successful',
//             text: 'Welcome back!',
//             showConfirmButton: false,
//             timer: 1000
//           });

//           // Redirect after 1 second
//           setTimeout(() => {
//             this.router.navigate(['/after-login']);
//           }, 1000);

//           // ✅ If you want to clear form after successful login
//           this.userData = { email: '', password: '' };
//         } else {
//           Swal.fire({
//             icon: 'error',
//             title: 'Login Failed',
//             text: 'Token not received!',
//             showConfirmButton: false,
//             timer: 1000
//           });
//           // ❌ Do not clear form here → values stay
//         }
//       },
//       (error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Login Failed',
//           text: 'Invalid email or password!',
//           showConfirmButton: false,
//           timer: 1000
//         });
//         // ❌ Do not clear form → values stay
//       }
//     );
//   }
// }
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-resident-login',
//   templateUrl: './resident-login.component.html',
//   styleUrls: ['./resident-login.component.css']
// })
// export class ResidentLoginComponent {
//   userData = { email: '', password: '' };

//   constructor(private http: HttpClient, private router: Router) {}

//   onLogin() {
//     this.http.post<any>('http://localhost:5000/reslog', this.userData).subscribe(
//       (response) => {
//         if (response.token) {
//           // ✅ Store all details in localStorage
//           localStorage.setItem('token', response.token);
//           localStorage.setItem('email', this.userData.email);
//           localStorage.setItem('password', this.userData.password);
//           localStorage.setItem('name', response.name || 'User'); // Save name too

//           // ✅ Success popup with username
//           Swal.fire({
//             icon: 'success',
//             title: `Welcome back, ${response.name || this.userData.email}!`,
//             showConfirmButton: false,
//             timer: 1000
//           });

//           // ✅ Redirect after 1 sec
//           setTimeout(() => {
//             this.router.navigate(['/after-login']);
//           }, 1000);

//           // ✅ Clear form after success
//           this.userData = { email: '', password: '' };
//         } else {
//           Swal.fire({
//             icon: 'error',
//             title: 'Login Failed',
//             text: 'Token not received!',
//             showConfirmButton: false,
//             timer: 1000
//           });
//         }
//       },
//       (error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Login Failed',
//           text: 'Invalid email or password!',
//           showConfirmButton: false,
//           timer: 1000
//         });
//       }
//     );
//   }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';  // ✅ Import service

@Component({
  selector: 'app-resident-login',
  templateUrl: './resident-login.component.html',
  styleUrls: ['./resident-login.component.css']
})
export class ResidentLoginComponent {
  userData = { email: '', password: '' };

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertService   // ✅ Inject service
  ) {}

  onLogin() {
    this.http.post<any>('http://localhost:5000/reslog', this.userData).subscribe(
      (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.userData.email);
          localStorage.setItem('password', this.userData.password);
          localStorage.setItem('name', response.name || 'User');

          this.alert.success(`Welcome back, ${response.name || this.userData.email}!`);

          setTimeout(() => {
            this.router.navigate(['/after-login']);
          }, 1500);
        } else {
          this.alert.error('Token not received!', 'Login Failed');
        }
      },
      (error) => {
        this.alert.error('Invalid email or password!', 'Login Failed');
      }
    );
  }
}
