import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.http
        .get('http://localhost:3000/profile', {
          headers: {Authorization: `Bearer ${authToken}`},
        })
        .subscribe({
          next: (response) => (this.user = response),
          error: () => alert('Erreur lors de la récupération des données utilisateur.'),
        });
    }
  }
    logout(): void {
      localStorage.clear();
      alert('Déconnexion réussie.');
    window.location.href = '/login';
  }
}
