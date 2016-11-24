import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class BookService {

  constructor(private authHttp: AuthHttp) {}

  getList() {
    return this.authHttp.get('http://localhost:3000/api/books.json');
  }
}
