import { Component } from '@angular/core';
//import { AuthHttp } from 'angular2-jwt';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Auth]
})
export class AppComponent {
  title = 'HomeLibrary';

  constructor(private auth: Auth) {}
  /*
  constructor(private auth: Auth, private authHttp: AuthHttp) {}

  go() {
    this.authHttp.get('http://localhost:3000/api/books.json')
        .subscribe((response) => console.log(response));
  }
  */
}
