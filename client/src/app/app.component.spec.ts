/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BookService } from './book.service';
import { Auth } from './auth.service';

export class MockBookService {
  constructor() { }

  getList(): Observable<any[]> {
    return Observable.of([]);
  }
}

export class MockAuth {
  login() {}
  logout() {}
  authenticated() {}
}

let mockBookService = new MockBookService();
let mockAuth = new MockAuth();

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    })
    .overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: BookService, useValue: mockBookService },
          { provide: Auth, useValue: mockAuth }
        ]
      }
    })
    .compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'HomeLibrary'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('HomeLibrary');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('HomeLibrary');
  }));
});
