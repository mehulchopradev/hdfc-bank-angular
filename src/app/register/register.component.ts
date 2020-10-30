import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  fb: FormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb;

    /* this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl('')
    }); */

    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      country: ['India'],
      state: ['Maharashtra'],
      pincode: ['400053']
    });
  }

  ngOnInit(): void {
  }

  get username() {
    return this.formGroup.get('username');
  }

  get password() {
    return this.formGroup.get('password');
  }

  onSave(): void {
    const data = this.formGroup.value;
    debugger;
  }

}
