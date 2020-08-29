import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  data: any = {
    firstName: 'Louis',
    lastName: 'Chang',
    email: 'louis@miniasp.com',
    password: '',
    repeatPassword: '',
  };
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
    // this.form = this.fb.group({
    //   firstName: ['Louis', Validators.required],
    //   lastName: ['Chang', Validators.required],
    //   email: ['louis@miniasp.com', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   repeatPassword: ['', Validators.required],
    // });
    this.form = this.fb.group({
      firstName: this.fb.control('Louis', {
        validators: [Validators.required],
      }),
      lastName: this.fb.control('Chang', {
        validators: [Validators.required],
      }),
      email: this.fb.control('louis@miniasp.com', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
      repeatPassword: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get repeatPassword() {
    return this.form.get('repeatPassword');
  }

  required(row: string): boolean {
    if (row !== 'email') {
      return this.firstName.invalid && (this.firstName.touched || this.firstName.dirty);
    }
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }
}
