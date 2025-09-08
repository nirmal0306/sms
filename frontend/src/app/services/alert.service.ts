// src/app/services/alert.service.ts
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // ✅ Success Alert
  success(message: string, title: string = 'Success') {
    Swal.fire({
      icon: 'success',
      title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  // ✅ Error Alert
  error(message: string, title: string = 'Error') {
    Swal.fire({
      icon: 'error',
      title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  // ✅ Info Alert
  info(message: string, title: string = 'Info') {
    Swal.fire({
      icon: 'info',
      title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  // ✅ Warning Alert
  warning(message: string, title: string = 'Warning') {
    Swal.fire({
      icon: 'warning',
      title,
      text: message,
      showConfirmButton: true, // warnings often need confirmation
    });
  }

  // ✅ Goodbye (Logout)
  goodbye(name: string) {
    Swal.fire({
      icon: 'success',
      title: `Goodbye, ${name}! 👋`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  // ✅ Loading Alert (for API calls)
  loading(message: string = 'Please wait...') {
    Swal.fire({
      title: message,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  // ✅ Close Loading manually (after success/error)
  close() {
    Swal.close();
  }

  // ✅ Confirm Action (e.g., delete record)
  confirm(message: string, title: string = 'Are you sure?') {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  }
}
