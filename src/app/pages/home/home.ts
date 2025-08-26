import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  constructor() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = '/login';
    }
  }
}
