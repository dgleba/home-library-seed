import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';
import { BookService } from './book.service';

let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
    auth: {
      params: { scope: 'openid email' }
    }
  });

  constructor(private bookService: BookService) {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.bookService.getList()
          .subscribe(response => console.log(response));
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}
