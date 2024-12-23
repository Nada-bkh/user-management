import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.http.post('http://localhost:3000/users', this.signupForm.value).subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          alert('Inscription réussie!');
        },
        error: (error) => {
          console.error('Erreur lors de l’inscription', error);
          alert('Erreur lors de l’inscription.');
        },
      });
    } else {
      alert('Veuillez remplir le formulaire correctement.');
    }
  }
}
