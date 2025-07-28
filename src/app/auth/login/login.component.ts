import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router,
    private authserviceService: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  this.authserviceService.getUsers().subscribe((users :any) => {
      console.log('Users fetched:', users);
    }); 

    
  }

  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // Handle login logic here
    alert('Login successful!');
    this.router.navigate(['/auth/homepage']);
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
