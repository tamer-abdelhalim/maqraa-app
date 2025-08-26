import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
// Firestore import removed for static user array
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// ...existing code...
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  // Firestore removed
  private router = inject(Router);

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });
  errorMsg = '';

  users = [
    { username: 'teacher1', password: '123456' },
    { username: 'teacher2', password: 'pass2' },
    { username: 'teacher3', password: 'pass3' }
  ];

  onSubmit() {
    this.errorMsg = '';
    const { username, password } = this.loginForm.value;
    if (!username || !password) {
      this.errorMsg = 'Please enter username and password.';
      return;
    }
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // Successful login
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.errorMsg = 'Invalid username or password.';
    }
  }
}
