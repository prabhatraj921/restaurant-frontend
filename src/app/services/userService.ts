import { Injectable , Inject} from '@angular/core';
import {Component, ViewEncapsulation} from '@angular/core';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../gaurd/authentication.service';
import {HttpClientHelper} from '../pages/app.httpclient';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {
    private httpClient;

    constructor( httpClient: HttpClientHelper) {
        this.httpClient = httpClient;
    }

    userLogin (data): Observable<any> {
        return this.httpClient.postPreLogin('user/login', data).pipe(
            map(this.extractResponse),
        );
    }

    private extractResponse(res: JSON) {
        return res;
    }

    private handleError (error: any) {
        return Observable.throwError(error);
    }
}
