import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';

const routes: Routes = [
  { path: 'new-user-session', component: NewUserSessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeLibraryRoutingModule { }
