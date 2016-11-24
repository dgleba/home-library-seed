/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookService } from './book.service';

import { AuthHttp } from 'angular2-jwt';

export class MockAuthHttp {
  get() {}
}

let mockAuthHttp = new MockAuthHttp();

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookService,
        { provide: AuthHttp, useValue: mockAuthHttp }
      ]
    });
  });

  it('should ...', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
