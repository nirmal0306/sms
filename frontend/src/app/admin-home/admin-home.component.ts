import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit(): void {
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
        window.location.href = '/admin-login';
      },1000);
    }
  }
