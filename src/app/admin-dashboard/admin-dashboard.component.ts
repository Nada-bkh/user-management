import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.http
        .get('http://localhost:3000/users', {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .subscribe({
          next: (response: any) => (this.users = response),
          error: () => alert('Erreur lors de la récupération des utilisateurs.'),
        });
    }
  }
}
