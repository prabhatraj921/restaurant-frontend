import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    setLogin(result) {
        localStorage.setItem('auth_token', result.auth_token);
    }

    logout() {
        localStorage.removeItem('auth_token');
    }

    public get loggedIn(): boolean {
        return (localStorage.getItem('auth_token') !== null);
    }

    get authToken(): string | null {
        return 'sdas';
        // return this.getLoginCookieValue<string>('auth_token');
    }

    get isLoggedIn(): boolean {
        const authToken = this.authToken;
        return !!(authToken && authToken.length);
    }


}
