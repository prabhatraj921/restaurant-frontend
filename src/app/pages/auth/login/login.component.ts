import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthenticationService} from "../../../gaurd/authentication.service";
import {UserService} from "../../../services/userService";


@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  providers: [UserService],
})
export class LoginComponent {
  protected options: {};
  protected cd: ChangeDetectorRef;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;
  rememberMe: boolean;
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router,
  ) {
  }
  // "password": "asdada",
  // "email": "dada@asd.ada"

  public loginToApp() {
   let userData = {
      email: "dada@asd.ada",
      password: "asdada",
    };
    this.userService.userLogin(userData).subscribe(
        data => this.loginSuccess(data, userData),
        error =>  this.loginFail(error)
    );




  }

    loginFail(error){

    }
    loginSuccess(result, userData){
        if(result.status === 0){
            this.authenticationService.setLogin(result);
            this.router.navigate(['/pages/dashboard']);
        }
    }
}
