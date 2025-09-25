import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm!: FormGroup;
  countries = ['India', 'USA', 'UK', 'Canada'];
  captchaCode: string = '';

  constructor(private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateCaptcha();
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      captcha: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  stateValueChange(event: any) {
console.log('State value changed:', event);

  }
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  generateCaptcha() {
    this.captchaCode = Math.random().toString(36).substring(2, 8);
  }

  onSubmit() {
    console.log(this.signupForm.value);
    
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    if (this.signupForm.value.captcha !== this.captchaCode) {
      this.signupForm.get('captcha')?.setErrors({ invalidCaptcha: true });
      return;
    }
    alert('Signup successful!');
    this.router.navigate(['']);
  }
}