import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
@Component({
  selector: 'app-visitor-home',
  templateUrl: './visitor-home.component.html',
  styleUrls: ['./visitor-home.component.css']
})
export class VisitorHomeComponent implements OnInit {
  name: string = '';
    email: string | null = '';

    constructor(private http: HttpClient, private router: Router, private alert: AlertService) {}

    ngOnInit(): void {
      this.email = localStorage.getItem('email');
      console.log(this.email)
      this.getUserData1();
      if (this.email) {
        this.http.get<any>(`http://localhost:5000/visitor/${this.email}`).subscribe(
          (data) => {
            this.name = data.name;
            this.email = data.email;
          },
          (error) => {
            console.error('Failed to fetch resident details:', error);
          }
        );
      }
    }
    getUserData1() {
      const token = sessionStorage.getItem("token");
      const storedEmail = sessionStorage.getItem("email"); // Get stored email

      if (!token || !storedEmail) {
        return;
      }

      this.http.get<{ email: string, username: string }>("http://localhost:5000/getUser1", {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-User-Email': storedEmail // Send email in header
        }
      }).subscribe((response) => {
        console.log("Fetched user:", response);

        if (response && response.email === storedEmail) {
          sessionStorage.setItem("username", response.username); // Store username
        } else {
          console.error("Email does not match database");
        }
      }, (error) => {
        console.error("Error fetching user:", error);
      });
  }
    logout(): void {
      const userName = localStorage.getItem('name') || 'Admin';

      // Clear storage
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('name');

      // ✅ SweetAlert
      this.alert.goodbye(userName);

      // Redirect after alert
      setTimeout(() => {
        window.location.href = '/visitor-login';
      },1000);
    }
  }
