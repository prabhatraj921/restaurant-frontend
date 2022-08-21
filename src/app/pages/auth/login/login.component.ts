import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  protected options: {};
  protected cd: ChangeDetectorRef;
  protected router: Router;
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
  ) {
  }
  // "password": "asdada",
  // "email": "dada@asd.ada"

  public loginToApp() {


    this.http.post<any>('http://127.0.0.1:8000/api/v1/user/login',
      { email: 'dada@asd.ada', password: 'asdada' },
      ).subscribe(data => {
      // alert(data);
      console.log(data);

    });
  }
}
