import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  imports: [],
  templateUrl: './splash.html',
  styleUrl: './splash.scss'
})
export class SplashComponent {
  private router = inject(Router);

  constructor() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
