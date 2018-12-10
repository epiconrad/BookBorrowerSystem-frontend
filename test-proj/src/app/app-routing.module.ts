import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'library', component: BookListComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'manage', component: ManageBooksComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookListComponent, RegistrationComponent,LoginComponent,UserComponent,ManageBooksComponent]
