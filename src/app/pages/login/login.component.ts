import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validator,
  AbstractControl,
  EmailValidator,
  Validators,
} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent  {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private router: Router,
              // private authentication: AuthenticationHelper,
              private activatedRoute: ActivatedRoute ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  public onSubmit(values: any) {
    this.submitted = true;
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    if (this.form.valid) {
      // your code goes here
    }
  }
  public clearErrorMessage() {
      // this.invalidInput = false;
    }

  public redirectToRegisterPage() {
    this.submitted = true;
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    if (this.form.valid) {
      // your code goes here
    }
  }

}

