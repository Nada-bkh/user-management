import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');

    if (authToken) {
      if (route.data['role'] && route.data['role'] !== userRole) {
        alert('Accès interdit.');
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    } else {
      alert('Veuillez vous connecter.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
