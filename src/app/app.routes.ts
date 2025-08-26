import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'splash', pathMatch: 'full' },
	{ path: 'splash', loadComponent: () => import('./pages/splash/splash').then(m => m.SplashComponent) },
	{ path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
	{ path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
	{ path: 'attendance', loadComponent: () => import('./pages/attendance/attendance').then(m => m.AttendanceComponent) },
	// { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterComponent) },
	// { path: 'memorization', loadComponent: () => import('./pages/memorization/memorization').then(m => m.MemorizationComponent) }
];
