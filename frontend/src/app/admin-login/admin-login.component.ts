// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { AlertService } from '../services/alert.service';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })

// export class AdminLoginComponent {
//   userData = { email: '', password: '' };

//   constructor(private http: HttpClient, private router: Router, private alert: AlertService) {}

//   onLogin() {
//     this.http.post<any>('http://localhost:5000/admin-login', this.userData).subscribe(
//       (response) => {
//         if (response.token) {
//           localStorage.setItem('token', response.token); // Store token
//           localStorage.setItem('email', this.userData.email); // Store Email
//           localStorage.setItem('password', this.userData.password); // Store Password

//           this.router.navigate(['/admin-home']);
//         } else {
//           console.error('Token not received');
//         }
//       },
//       (error) => {
//         console.error('Login failed:', error);
//       }
//     );
//   }

// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  userData = { email: '', password: '' };

  constructor(
    private http: HttpClient,
    private router: Router,
    private alert: AlertService
  ) {}

  onLogin() {
    this.http.post<any>('http://localhost:5000/admin-login', this.userData).subscribe(
      (response) => {
        if (response.token) {
          // ✅ Store data in localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.userData.email);
          localStorage.setItem('password', this.userData.password);
          localStorage.setItem('name', response.name || 'Admin');

          // ✅ SweetAlert success with name
          this.alert.success(`Welcome back, ${response.name || 'Admin'}!`);

          // ✅ Redirect after alert closes
          setTimeout(() => {
            this.router.navigate(['/admin-home']);
          }, 1500);

          // ✅ Optionally clear form
          this.userData = { email: '', password: '' };
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
