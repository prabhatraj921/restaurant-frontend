import { Injectable , Inject} from '@angular/core';
import {Component, ViewEncapsulation} from '@angular/core';
import 'rxjs/Rx';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from '../gaurd/authentication.service';
import { Router } from '@angular/router';
import { environment} from '../../environments';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class HttpClientHelper {
    baseUrl: String  = this.getApiBaseUrl();
    authBaseUrl: String  = this.getApiAuthBaseUrl();
    serverUrl = this.getCurrentHostUrl();
    filesUrl = this.getFilesUrl();

    constructor(
        private http: HttpClient,
        private authentication: AuthenticationService,
        private router: Router,
    ) {}

    static joinUrls(...urls: string[]): string {
        return urls.join('/').replace(/\/\//g, '/').replace(/(https?:\/(?!\/))/, '$1/');
    }

    createAuthorizationHeader() {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'auth_token ' + this.authentication.authToken,
        });
        return headers;

    }

    getApiBaseUrl(){
        return HttpClientHelper.joinUrls(this.getCurrentHostUrl(), 'api/v1/');
    }

    getApiAuthBaseUrl(){
        return HttpClientHelper.joinUrls(this.getCurrentHostUrl(), 'api/v1/auth/');
    }

    getCurrentHostUrl(){
        return environment.urls.api;
    }

    getFilesUrl(){
        return environment.urls.files;
    }




    get(url) : Observable<any> {
        url = this.baseUrl + url;
        let headers = this.createAuthorizationHeader();
        return this.http.get(url, { headers: headers }).pipe(
            map(this.extractResponse)
        );
    }

    postPreLogin(url, data) : Observable<any> {


        let body = JSON.stringify(data);
        url = this.baseUrl + url;
        return this.http.post(url, body, {
            headers: this.createAuthorizationHeader()
        }
        ).pipe(
            map(this.extractResponse)
        );
    }

    post(url, data) : Observable<any> {
        let body = JSON.stringify(data);
        const headers = this.createAuthorizationHeader();
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: headers }).pipe(
                map(this.extractResponse)
            );
    }


    postByHeader(url, data, header): Observable<any>{
        let body = JSON.stringify(data);
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: header })
            .map(this.extractResponse)
            .catch(this.handleError);
    }

    postByHeaderPreLogin(url, data, header): Observable<any>  {
        let body = JSON.stringify(data);
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: header })
            .map(this.extractResponse)
            .catch(this.handleErrorPreLogin);
    }

    private extractResponse(res: Response) {
        return res;
    }

    private handleError(error: HttpErrorResponse): Observable<any> {
        return Observable.throwError(error ||  'Server error');
    }

    private handleErrorPreLogin(error: HttpErrorResponse): Observable<any>{
        return Observable.throwError(error ||  'Server error');
    }

}
